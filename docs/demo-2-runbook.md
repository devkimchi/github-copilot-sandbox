# Demo 2: Copilot CLI in an ACA Sandbox

This runbook follows the Demo 2 sequence in
[`ai-agent-sandboxing.md`](../ai-agent-sandboxing.md). It runs GitHub Copilot
CLI against
[`devkimchi/battle-school-lunch`](https://github.com/devkimchi/battle-school-lunch)
and proves that `design-update.md` survives a stop and resume cycle.

> [!IMPORTANT]
> Use the same sandbox ID throughout the stop and resume sequence.
> `aca sandbox create` creates a different environment and does not prove state
> restoration.

## What the demo proves

- A sandbox group is the Azure resource, RBAC, image, and policy boundary.
- Each sandbox is a hardware-isolated microVM with its own filesystem and
  lifecycle.
- Copilot CLI can work inside the remote sandbox without placing its token in
  the repository.
- Stopping the sandbox suspends compute while retaining state according to its
  suspend mode.
- Resuming the same sandbox restores the repository and generated design plan.

## Before you begin

Complete the [Demo 2 environment setup](demo-2-setup.md). Confirm that:

- Azure CLI and the preview `aca` CLI are authenticated.
- `aca doctor` passes all group, region, and RBAC checks.
- The GitHub Copilot provider credential is configured.
- The `copilot` public disk is available.
- No stale `copilot-demo` sandbox contains unpreserved work.

## 1. Create and harden the sandbox

Create a labeled sandbox and capture its ID:

```powershell
aca sandbox create `
    --disk copilot `
    --label name=copilot-demo

$SandboxId = (
    aca sandbox list -l "name=copilot-demo" -o json |
        ConvertFrom-Json
)[0].id

$SandboxId
aca sandbox get --id $SandboxId -o json
```

The expected state is `Running`.

For production agent workloads, use deny-by-default egress and add only
reviewed destinations. This baseline covers the public repository and common
Copilot endpoints:

```powershell
aca sandbox egress set `
    --id $SandboxId `
    --default Deny `
    --rule "github.com:Allow" `
    --rule "api.github.com:Allow" `
    --rule "api.githubcopilot.com:Allow" `
    --rule "*.githubusercontent.com:Allow" `
    --traffic-inspection Full

aca sandbox egress show --id $SandboxId
```

If the portal reports another denied Copilot or GitHub hostname, review it and
add that exact hostname rather than changing the default to Allow.

Set an explicit memory suspend policy for the state-restoration demonstration:

```powershell
aca sandbox lifecycle set `
    --id $SandboxId `
    --auto-suspend enable `
    --mode Memory `
    --idle-timeout-seconds 900
```

## 2. Prepare Copilot in the interactive shell

Open a real PTY using the label from the presentation:

```powershell
aca sandbox shell -l "name=copilot-demo"
```

There is no SSH daemon in an ACA Sandbox. Use `aca sandbox shell` for an
interactive terminal or `aca sandbox exec` for a one-shot command.

Inside the sandbox:

```bash
git --version
copilot --version
git clone https://github.com/devkimchi/battle-school-lunch.git
cd battle-school-lunch
git status --short
copilot
```

The sample is a full-stack school lunch application with a React 19, Vite,
TypeScript, and Tailwind v4 web UI under `src/web`.

## 3. Run the design-planning task

Use the prompt from the presentation:

```text
이 프로젝트의 Web UI를 Brutal Design 스타일로 변경하려고 해. 코드는 수정하지
말고, 변경 계획을 design-update.md 파일로 작성해 줘
```

An English equivalent is:

```text
I want to restyle this project's web UI using Brutalist design. Do not modify
any source code. Inspect the existing UI and write a concrete implementation
plan to design-update.md at the repository root.
```

## 4. Inspect the sandbox result

Exit Copilot after it finishes, then verify from the sandbox shell:

```bash
test -f design-update.md
sed -n '1,160p' design-update.md
git status --short
```

Expected result: `design-update.md` exists and source files remain unchanged.
The only `git status --short` entry should be the untracked plan file.

Record the working directory and checksum:

```bash
pwd
sha256sum design-update.md
git diff --name-only
exit
```

`git diff --name-only` does not list untracked files, so use it together with
`git status --short`.

## 5. Prove the stop and resume lifecycle

Back in the host PowerShell session, capture the original identity and state:

```powershell
$Before = aca sandbox get --id $SandboxId -o json | ConvertFrom-Json
$Before.id
$Before.state
```

Stop the sandbox:

```powershell
aca sandbox stop --id $SandboxId
(aca sandbox get --id $SandboxId -o json | ConvertFrom-Json).state
```

Wait for `Stopped`. In this state, CPU and memory compute charges stop; stored
state and related resources can still incur charges.

Resume the same sandbox:

```powershell
aca sandbox resume --id $SandboxId
(aca sandbox get --id $SandboxId -o json | ConvertFrom-Json).state
```

Wait for `Running`, then reconnect:

```powershell
aca sandbox shell --id $SandboxId
```

## 6. Verify the resumed state

Inside the resumed sandbox:

```bash
cd battle-school-lunch
pwd
test -f design-update.md
sha256sum design-update.md
sed -n '1,40p' design-update.md
git status --short
exit
```

Confirm that:

- The sandbox ID before and after resume is identical.
- The repository is still present.
- `design-update.md` is present with the same checksum.
- No application source file was modified.

Memory suspend mode also preserves running-process state. This demo validates
filesystem state because it is deterministic and visible to the audience.

## 7. Preserve evidence and clean up

Continue with
[Demo 2 validation and recovery](demo-2-validation-and-recovery.md) to:

1. Export `design-update.md`.
2. Review the state and validation evidence.
3. Snapshot the sandbox if its remote state must be preserved.
4. Delete the sandbox and optional demo resource group.

## Troubleshooting

Use the
[Demo 2 troubleshooting guide](demo-2-validation-and-recovery.md#troubleshooting)
for RBAC, disk image, Copilot authentication, egress, lifecycle, and preview
CLI failures.

## References

- [Azure Container Apps Sandboxes overview](https://learn.microsoft.com/azure/container-apps/sandboxes-overview)
- [Sandboxes](https://sandboxes.azure.com/docs/sandboxes/sandboxes)
- [Interactive shell](https://sandboxes.azure.com/docs/sandboxes/sandbox/interactive-shell)
- [Sandbox lifecycle](https://sandboxes.azure.com/docs/sandboxes/sandbox/lifecycle)

Commands and preview behavior were checked against the linked documentation on
August 24, 2026.

## Navigation

[Previous: Demo 2 environment setup](demo-2-setup.md) |
[Next: Demo 2 validation and recovery](demo-2-validation-and-recovery.md)
