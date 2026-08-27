# Demo 1: .NET app modernization in a Docker Sandbox

This runbook follows the Demo 1 sequence in [`ai-agent-sandboxing.md`](../ai-agent-sandboxing.md). Use two terminals: Terminal A for Copilot CLI and Terminal B for inspection.

> [!IMPORTANT]
> Run this demo in clone mode. Direct mode protects the host operating system, but it gives the agent read-write access to the host working tree.

## What the demo proves

- Copilot CLI runs inside an isolated microVM.
- The modernization agent assesses, plans, and executes the .NET upgrade.
- The agent works in a private clone and cannot write to the host repository.
- The sandbox has its own Docker daemon and policy-controlled network access.

## Before you begin

Complete the [Demo 1 environment setup](demo-1-setup.md) for .NET. Confirm that:

- `sbx`, GitHub CLI, and Git are available.
- Docker and GitHub authentication succeed.
- The **Balanced** network policy is active.
- The host checkout is `dotnet-migration-copilot-samples`.

## 1. Start Copilot in a private clone

> [!NOTE]
> Copilot's Docker Sandbox template starts with its approval-skipping mode. This does not remove the microVM, workspace, credential, Docker daemon, or network boundaries.

From the host checkout of `dotnet-migration-copilot-samples`, run in Terminal A:

```bash
sbx secret set github --command 'gh auth token'
sbx run --clone --name dotnet-appmod copilot .
```

On first use, choose the **Balanced** network preset when prompted.

`--clone` is the important boundary:

- `/run/sandbox/source` is a read-only mount of the host repository.
- Copilot works in a separate read-write clone inside the microVM.
- `sbx` adds a `sandbox-dotnet-appmod` Git remote to the host repository.
- Nothing reaches the host working tree until an explicit fetch, checkout, or push.

Run the following command in Terminal B to confirm the `sandbox-dotnet-appmod` remote:

```bash
git remote -v
```

Enter the sandbox from Terminal B and check whether the .NET SDK is installed:

```bash
sbx exec -it dotnet-appmod bash
dotnet --list-sdks
```

If it is not installed, install the .NET 10 SDK inside the sandbox:

```bash
sudo apt update && \
  sudo apt install -y dotnet-sdk-10.0
```

Then exit the inspection shell and restart the sandbox and Copilot CLI session:

```bash
# Terminal B
exit
sbx stop dotnet-appmod

# Terminal A
sbx run --name dotnet-appmod
```

## 2. Prepare the modernization agent

### Install the plugin

In the Copilot CLI session, enter:

```text
/plugin marketplace add microsoft/github-copilot-modernization
/plugin install github-copilot-modernization@github-copilot-modernization
```

If the MCP server included with the plugin fails to start, enter:

```text
Starting `appmod-mcp-server` fails. Fix it.
```

Once it is fixed, restart GitHub Copilot CLI:

```text
/restart
```

Check that the MCP server is running:

```text
/mcp show
```

Then list the installed plugins:

```text
/plugin list
```

Confirm that the list contains:

```text
github-copilot-modernization@github-copilot-modernization
```

### Select the orchestrator

Enter `/agent`, then select:

```text
github-copilot-modernization:modernize
```

Do not run the upgrade with the default Copilot agent. The `modernize` agent provides the assessment, planning, specialized executors, retries, and per-task commits used in this demo.

## 3. Run the modernization

Use this prompt:

```text
modernize my application
```

The expected workflow is:

1. **Assessment** - discovers the .NET version, framework, dependencies, and risks; writes `.github/modernize/assessment/`.
2. **Planning** - writes `.github/modernize/<app>/plan.md` and `tasks.json`.
3. **Execution** - delegates tasks, updates the application, verifies the build, and creates detailed task commits.

A specific upgrade prompt can go directly to planning and execution. Asking for assessment explicitly keeps all three phases visible for the demo.

## 4. Inspect the sandbox while the agent works

In Terminal B:

```bash
sbx ls
sbx policy ls
sbx exec -it dotnet-appmod bash
```

Inside the sandbox shell:

```bash
pwd
node --version
dotnet --info
git branch --show-current
git status --short
docker info
find .github/modernize -maxdepth 3 -type f -print 2>/dev/null
```

Show that the host source mount is read-only:

```bash
touch /run/sandbox/source/__sandbox-write-test
```

The command should fail with a read-only filesystem error. Do not use a path inside the private clone for this test; the private clone is intentionally writable.

Show the isolated Docker daemon without changing the host:

```bash
docker run hello-world
docker ps -a
```

Exit the inspection shell:

```bash
exit
```

Run `sbx` with no arguments on the host to open the dashboard. Switch to its network panel to show allowed and denied outbound connections and the rules that made each decision.

## 5. Prove that the host stayed clean

While the agent's commits remain in the private clone, run from the host checkout:

```bash
git status --short
git branch --show-current
git remote --verbose
```

Expected result:

- `git status --short` prints nothing.
- The host remains on `main`.
- The `sandbox-dotnet-appmod` remote is present.

## 6. Verify the result

After the modernization agent finishes, use the inspection shell or ask the agent to report:

```bash
git branch --show-current
git status --short
git --no-pager log --oneline --decorate -15
find .github/modernize -maxdepth 3 -type f -print
```

Confirm that the branch is `modernize/dotnet-*`, the expected assessment and plan artifacts exist, verification results are reported, and task commits are present.

> [!NOTE]
> `*` may refer to a timestamp or a random string

## 7. Preserve evidence and clean up

Continue with [Demo 1 .NET validation and recovery](demo-1-validation-and-recovery-dotnet.md) to:

1. Fetch the private modernization branch.
2. Review application, build, CI, and modernization artifacts.
3. Materialize only the reviewed branch on the host.
4. Stop and remove the sandbox after its work is preserved.

## Troubleshooting

Use the [Demo 1 .NET troubleshooting guide](demo-1-validation-and-recovery-dotnet.md#troubleshooting) for plugin installation, .NET discovery, network policy, build failures, sandbox mode, and fetch failures.

## References

- [Get started with Docker Sandboxes](https://docs.docker.com/ai/sandboxes/get-started/)
- [Run GitHub Copilot in a Docker Sandbox](https://docs.docker.com/ai/sandboxes/agents/copilot/)
- [Docker Sandbox isolation](https://docs.docker.com/ai/sandboxes/security/isolation/)
- [Use Git with Docker Sandboxes](https://docs.docker.com/ai/sandboxes/workflows/git/)
- [Assess and migrate a .NET project with GitHub Copilot modernization for .NET](https://learn.microsoft.com/dotnet/azure/migration/appmod/quickstart?pivots=copilot-cli)

## Navigation

[Previous: Demo 1 environment setup](demo-1-setup.md) |
[Next: Demo 1 .NET validation and recovery](demo-1-validation-and-recovery-dotnet.md)