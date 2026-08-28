# Demo 2: Validation and recovery

Use this guide after the Demo 2 run, or when the live path needs recovery.

## Preserve the generated plan

Confirm the repository path inside the sandbox:

```bash
# zsh/bash
aca sandbox exec \
  -l name=ghcp-demo \
  -c "cd /workspaces/battle-school-lunch && pwd && sha256sum design-update.md"
```

```powershell
# PowerShell
aca sandbox exec `
  -l name=ghcp-demo `
  -c "cd /workspaces/battle-school-lunch && pwd && sha256sum design-update.md"
```

Export the generated plan with the data-plane file API rather than `scp`:

```bash
# zsh/bash
aca sandbox fs cat \
  -l name=ghcp-demo \
  --path /workspaces/battle-school-lunch/design-update.md \
  > ./design-update.md
```

```powershell
# PowerShell
aca sandbox fs cat `
  -l name=ghcp-demo `
  --path /workspaces/battle-school-lunch/design-update.md `
  | Set-Content ./design-update.md -Encoding utf8 -Force
```

> [!CAUTION]
> Adjust `--path` if `pwd` shows that the `copilot` image uses a different directory.

## Snapshot the remote state

Snapshot before deletion when the repository and sandbox state are worth preserving:

```bash
# zsh/bash
aca sandbox snapshot \
  -l name=ghcp-demo \
  --name ghcp-demo-complete
```

```powershell
# PowerShell
aca sandbox snapshot `
  -l name=ghcp-demo `
  --name ghcp-demo-complete
```

A snapshot preserves state independently of the running sandbox. A new sandbox can be created from it:

```powershell
aca sandbox create --snapshot ghcp-demo-complete --label name=ghcp-demo-from-snapshot
aca sandbox shell -l name=ghcp-demo-from-snapshot
```

## Validation checklist

| Evidence                          | Expected result                                  |
| --------------------------------- | ------------------------------------------------ |
| `aca doctor`                      | Group configuration and Data Owner role pass     |
| Initial sandbox state             | `Running`                                        |
| Copilot authentication            | Starts without placing a token in the repository |
| Repository status before the task | Clean                                            |
| Generated artifact                | `design-update.md` exists                        |
| Source changes                    | No application source file changed               |
| State after stop                  | `Stopped`                                        |
| State after resume                | `Running`                                        |
| Sandbox identity                  | Same ID before and after resume                  |
| Plan checksum                     | Same before and after resume                     |

## Troubleshooting

### `aca doctor` reports an RBAC failure

Verify that the presenter has **Container Apps SandboxGroup Data Owner** at the group or parent scope. Wait for propagation, then rerun `aca doctor`.

### `copilot` is not a public disk

Run:

```bash
aca sandboxgroup disk list-public
```

Preview image availability can vary by release and region. Use a supported region or build a reviewed custom disk from an OCI image:

```bash
# zsh/bash
aca sandboxgroup disk create \
  --image docker/sandbox-templates:copilot-docker \
  --name ghcp-demo-image

aca sandboxgroup disk list
```

```powershell
# PowerShell
aca sandboxgroup disk create `
  --image docker/sandbox-templates:copilot-docker `
  --name ghcp-demo-image

aca sandboxgroup disk list
```

Create from the returned private image ID with `--disk-id`, not `--disk`.

```bash
# zsh/bash
DiskId=$(aca sandboxgroup disk list -o json | jq -r "first(.[] | .id)")
aca sandbox create --disk-id $DiskId --label name=custom-ghcp-demo
aca sandbox shell -l name=custom-ghcp-demo
```

```powershell
# PoewrShell
$DiskId = (aca sandboxgroup disk list -o json | ConvertFrom-Json)[0].id
aca sandbox create --disk-id $DiskId --label name=custom-ghcp-demo
aca sandbox shell -l name=custom-ghcp-demo
```

> [!NOTE]
> You may find out official Docker Sandbox images from [Docker Hub](https://hub.docker.com/r/docker/sandbox-templates/tags).

### Copilot authentication fails

Confirm that the group credential status is **Configured**, the token is a fine-grained `github_pat_` token with Copilot access, and the sandbox was created after the credential was saved. Recreate the sandbox after credential rotation.

### Git clone or Copilot traffic is blocked

Inspect the sandbox egress policy:

```powershell
aca sandbox egress show -l name=ghcp-demo
```

Review denied connection decisions and add only the required hostname. Do not disable deny-by-default policy to work around one missing rule.

### The plan disappears after resume

Confirm that the same sandbox ID was resumed:

```powershell
aca sandbox get -l name=ghcp-demo -o json
```

Confirm that the shell returned to the same repository path. The `aca sandbox create` command creates a different sandbox; `aca sandbox resume ...` resumes the existing one.

### The sandbox remains stopped

Resume it explicitly and wait for `Running`:

```bash
# zsh/bash
aca sandbox resume -l name=ghcp-demo
aca sandbox get -l name=ghcp-demo -o json | jq -r "{id, state}"
```

```powershell
# PowerShell
aca sandbox resume -l name=ghcp-demo
aca sandbox get -l name=ghcp-demo -o json `
  | ConvertFrom-Json | Select-Object id, state | ConvertTo-Json
```

If resume fails, inspect the Azure activity log and retry only after identifying the provisioning or policy error.

### A preview command rejects a flag

Use the installed CLI help as the source of truth:

```powershell
aca --version
aca sandbox create --help
aca sandbox lifecycle set --help
aca sandbox egress set --help
```

Do not mix commands from different preview releases.

## Cleanup

Export or snapshot every artifact you want to preserve before deletion. Deleting a sandbox is destructive:

```powershell
aca sandbox delete -l name=ghcp-deno --yes
```

Confirm that the labeled sandbox is gone:

```powershell
aca sandbox list -l "name=ghcp-demo"
```

If the whole demo environment is no longer needed, deleting its group also deletes all remaining sandboxes, snapshots, disk images, volumes, secrets, identities, and connector attachments:

```bash
# zsh/bash
ResourceGroup="rg-ghcp-sandbox-demo"
SandboxGroup="ghcp-sandbox-demo"

aca sandboxgroup delete --name $SandboxGroup --yes
az group delete --name $ResourceGroup --yes --no-wait
```

```powershell
# PowerShell
$ResourceGroup = "rg-ghcp-sandbox-demo"
$SandboxGroup = "ghcp-sandbox-demo"

aca sandboxgroup delete --name $SandboxGroup --yes
az group delete --name $ResourceGroup --yes --no-wait
```

## Navigation

Previous: [Demo 2 live runbook](demo-2-runbook.md)
