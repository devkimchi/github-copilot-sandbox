# Demo 1: Java modernization in a Docker Sandbox

This runbook follows the Demo 1 sequence in
[`ai-agent-sandboxing.md`](../ai-agent-sandboxing.md). Use two terminals:
Terminal A for Copilot CLI and Terminal B for inspection.

> [!IMPORTANT]
> Run this demo in clone mode. Direct mode protects the host operating system,
> but it gives the agent read-write access to the host working tree.

## What the demo proves

- Copilot CLI runs inside an isolated microVM.
- The modernization agent assesses, plans, and executes the Java upgrade.
- The agent works in a private clone and cannot write to the host repository.
- The sandbox has its own Docker daemon and policy-controlled network access.

## Before you begin

Complete the [Demo 1 environment setup](demo-1-setup.md). Confirm that:

- `sbx`, GitHub CLI, and Git are available.
- Docker and GitHub authentication succeed.
- The **Balanced** network policy is active.
- `uportal-messaging` is clean and checked out on `demo/baseline`.
- No stale `java-modernize` sandbox contains unpreserved work.

## 1. Start Copilot in a private clone

From the host checkout of `uportal-messaging`, run in Terminal A:

```powershell
sbx secret set github --command 'gh auth token'
sbx run --clone --name java-modernize copilot .
```

On first use, choose the **Balanced** network preset when prompted.

`--clone` is the important boundary:

- `/run/sandbox/source` is a read-only mount of the host repository.
- Copilot works in a separate read-write clone inside the microVM.
- `sbx` adds a `sandbox-java-modernize` Git remote to the host repository.
- Nothing reaches the host working tree until an explicit fetch, checkout, or
  push.

Copilot's Docker Sandbox template starts with its approval-skipping mode. This
does not remove the microVM, workspace, credential, Docker daemon, or network
boundaries.

## 2. Prepare the modernization agent

### Install the plugin

In the Copilot CLI session, enter:

```text
/plugin marketplace add microsoft/github-copilot-modernization
/plugin install github-copilot-modernization@github-copilot-modernization
/plugin list
```

Confirm that the list contains:

```text
github-copilot-modernization@github-copilot-modernization
```

The equivalent non-interactive shell commands are:

```bash
copilot plugin marketplace add microsoft/github-copilot-modernization
copilot plugin install github-copilot-modernization@github-copilot-modernization
```

### Select the orchestrator

Enter `/agent`, then select:

```text
github-copilot-modernization:modernize
```

Do not run the upgrade with the default Copilot agent. The `modernize` agent
provides the assessment, planning, specialized executors, retries, and
per-task commits used in this demo.

## 3. Run the modernization

Use this prompt:

```text
Before making changes, create and switch to a branch named demo/modernized.
Upgrade this application to Java 21 and Spring Boot 4.1. Assess the current
application, create a reviewable plan, execute the plan, update tests and build
configuration, run the relevant Maven verification, check dependencies for
known vulnerabilities, and commit each completed task separately. Do not push
the branch or open a pull request.
```

The expected workflow is:

1. **Assessment** - discovers Java version, framework, dependencies, and risks;
   writes `.github/modernize/assessment/`.
2. **Planning** - writes `.github/modernize/<app>/plan.md` and `tasks.json`.
3. **Execution** - delegates tasks, updates the application, verifies the
   build, and creates detailed task commits.

A specific upgrade prompt can go directly to planning and execution. Asking
for assessment explicitly keeps all three phases visible for the demo.

## 4. Inspect the sandbox while the agent works

In Terminal B:

```powershell
sbx ls
sbx policy ls
sbx exec -it java-modernize bash
```

Inside the sandbox shell:

```bash
pwd
node --version
git branch --show-current
git status --short
docker info
find .github/modernize -maxdepth 3 -type f -print 2>/dev/null
```

Show that the host source mount is read-only:

```bash
touch /run/sandbox/source/__sandbox-write-test
```

The command should fail with a read-only filesystem error. Do not use a path
inside the private clone for this test; the private clone is intentionally
writable.

Show the isolated Docker daemon without changing the host:

```bash
docker run --rm hello-world
docker ps -a
```

The container and image exist only in the sandbox's Docker Engine. Docker
Sandboxes do not mount the host Docker socket.

Exit the inspection shell:

```bash
exit
```

Run `sbx` with no arguments on the host to open the dashboard. Switch to its
network panel to show allowed and denied outbound connections and the rules
that made each decision.

## 5. Prove that the host stayed clean

While the agent's commits remain in the private clone, run from the host
checkout:

```powershell
git status --short
git branch --show-current
git remote --verbose
```

Expected result:

- `git status --short` prints nothing.
- The host remains on `demo/baseline`.
- A `sandbox-java-modernize` remote is present.

## 6. Verify the result

After the modernization agent finishes, use the inspection shell or ask the
agent to report:

```bash
git branch --show-current
git status --short
git --no-pager log --oneline --decorate -15
find .github/modernize -maxdepth 3 -type f -print
```

Confirm that the branch is `demo/modernized`, the expected assessment and plan
artifacts exist, verification results are reported, and task commits are
present.

## 7. Preserve evidence and clean up

Continue with
[Demo 1 validation and recovery](demo-1-validation-and-recovery.md) to:

1. Fetch `sandbox-java-modernize/demo/modernized`.
2. Review application, build, CI, and modernization artifacts.
3. Materialize only the reviewed branch on the host.
4. Stop and remove the sandbox after its work is preserved.

## Troubleshooting

Use the
[Demo 1 troubleshooting guide](demo-1-validation-and-recovery.md#troubleshooting)
for plugin installation, Java discovery, network policy, Maven, sandbox mode,
and fetch failures.

## References

- [Get started with Docker Sandboxes](https://docs.docker.com/ai/sandboxes/get-started/)
- [Run GitHub Copilot in a Docker Sandbox](https://docs.docker.com/ai/sandboxes/agents/copilot/)
- [Docker Sandbox isolation](https://docs.docker.com/ai/sandboxes/security/isolation/)
- [Use Git with Docker Sandboxes](https://docs.docker.com/ai/sandboxes/workflows/git/)
- [Modernize Java apps with GitHub Copilot modernization](https://learn.microsoft.com/azure/developer/java/migration/github-copilot-app-modernization-for-java-copilot-cli)

Commands and behavior were checked against the linked documentation on
August 24, 2026.

## Navigation

[Previous: Demo 1 environment setup](demo-1-setup.md) |
[Next: Demo 1 validation and recovery](demo-1-validation-and-recovery.md)
