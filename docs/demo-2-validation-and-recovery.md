# Demo 2 validation and recovery

Use this guide after the Demo 2 run, or when the live path needs recovery.

## Preserve the generated plan

Confirm the repository path inside the sandbox:

```powershell
aca sandbox exec `
    --id $SandboxId `
    -c "cd battle-school-lunch && pwd && sha256sum design-update.md"
```

Export the generated plan with the data-plane file API rather than `scp`:

```powershell
aca sandbox fs cat `
    --id $SandboxId `
    --path /home/coder/battle-school-lunch/design-update.md |
    Set-Content -Encoding utf8 .\design-update.md
```

Adjust `--path` if `pwd` shows that the `copilot` image uses a different home
directory.

## Snapshot the remote state

Snapshot before deletion when the repository and sandbox state are worth
preserving:

```powershell
aca sandbox snapshot `
    --id $SandboxId `
    --name demo2-complete
```

A snapshot preserves state independently of the running sandbox. A new sandbox
can be created from it:

```powershell
aca sandbox create --snapshot demo2-complete
```

## Validation checklist

| Evidence | Expected result |
| --- | --- |
| `aca doctor` | Group configuration and Data Owner role pass |
| Initial sandbox state | `Running` |
| Copilot authentication | Starts without placing a token in the repository |
| Repository status before the task | Clean |
| Generated artifact | `design-update.md` exists |
| Source changes | No application source file changed |
| State after stop | `Stopped` |
| State after resume | `Running` |
| Sandbox identity | Same ID before and after resume |
| Plan checksum | Same before and after resume |

## Troubleshooting

### `aca doctor` reports an RBAC failure

Verify that the presenter has **Container Apps SandboxGroup Data Owner** at the
group or parent scope. Wait for propagation, then rerun `aca doctor`.

### `copilot` is not a public disk

Run:

```powershell
aca sandboxgroup disk list-public
```

Preview image availability can vary by release and region. Use a supported
region or build a reviewed custom disk from an OCI image:

```powershell
aca sandboxgroup disk create `
    --image <registry>/<image>:<tag> `
    --name copilot-demo-image

aca sandboxgroup disk list
```

Create from the returned private image ID with `--disk-id`, not `--disk`.

### Copilot authentication fails

Confirm that the group credential status is **Configured**, the token is a
fine-grained `github_pat_` token with Copilot access, and the sandbox was
created after the credential was saved. Recreate the sandbox after credential
rotation.

### Git clone or Copilot traffic is blocked

Inspect the sandbox egress policy:

```powershell
aca sandbox egress show --id $SandboxId
```

Review denied connection decisions and add only the required hostname. Do not
disable deny-by-default policy to work around one missing rule.

### The plan disappears after resume

Confirm that the same sandbox ID was resumed:

```powershell
$SandboxId
aca sandbox get --id $SandboxId -o json
```

Confirm that the shell returned to the same repository path. The
`aca sandbox create` command creates a different sandbox;
`aca sandbox resume --id $SandboxId` resumes the existing one.

### The sandbox remains stopped

Resume it explicitly and wait for `Running`:

```powershell
aca sandbox resume --id $SandboxId
(aca sandbox get --id $SandboxId -o json | ConvertFrom-Json).state
```

If resume fails, inspect the Azure activity log and retry only after identifying
the provisioning or policy error.

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

Export or snapshot every artifact you want to preserve before deletion.
Deleting a sandbox is destructive:

```powershell
aca sandbox delete --id $SandboxId --yes
```

Confirm that the labeled sandbox is gone:

```powershell
aca sandbox list -l "name=copilot-demo"
```

If the whole demo environment is no longer needed, deleting its group also
deletes all remaining sandboxes, snapshots, disk images, volumes, secrets,
identities, and connector attachments:

```powershell
$ResourceGroup = "rg-ghcp-sandbox-demo"
$SandboxGroup = "ghcp-sandbox-demo"

aca sandboxgroup delete `
    --name $SandboxGroup `
    --yes

az group delete `
    --name $ResourceGroup `
    --yes `
    --no-wait
```

## Navigation

Previous: [Demo 2 live runbook](demo-2-runbook.md)
