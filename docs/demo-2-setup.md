# Demo 2 environment setup

Complete this setup before presenting
[Demo 2](demo-2-runbook.md). The demo uses Azure Container Apps Sandboxes,
GitHub Copilot CLI, and
[`devkimchi/battle-school-lunch`](https://github.com/devkimchi/battle-school-lunch).

> [!IMPORTANT]
> Azure Container Apps Sandboxes and the dedicated `aca` CLI are in public
> preview. Commands and resources created during preview can change or require
> recreation. Run `aca <command> --help` against the installed version during
> rehearsal.

## 1. Install the preview CLI

The `aca` CLI is separate from both Azure CLI and `az containerapp`. It uses
the Azure CLI identity for authentication.

### Windows PowerShell

```powershell
irm https://aka.ms/aca-cli-install-ps | iex
aca --version
```

### Linux or macOS

```bash
curl -fsSL https://aka.ms/aca-cli-install | sh
aca --version
```

The same install path can also be used inside sandboxes and containers for
agent-driven self-installs.

Authenticate only when the current sessions are missing:

```powershell
az account show -o none 2>$null
if ($LASTEXITCODE -ne 0) {
    az login
}

aca auth status
if ($LASTEXITCODE -ne 0) {
    aca auth login
}
```

Select the intended subscription:

```powershell
$SubscriptionId = az account show --query id -o tsv
az account set --subscription $SubscriptionId
```

Only Microsoft Entra ID accounts can access ACA Sandboxes. Personal Microsoft
accounts are not supported.

## 2. Create the sandbox group

Choose a supported region. Demo 2 uses Korea Central:

```powershell
$ResourceGroup = "rg-ghcp-sandbox-demo"
$SandboxGroup = "ghcp-sandbox-demo"
$Location = "koreacentral"

az group create `
    --name $ResourceGroup `
    --location $Location

aca sandboxgroup create `
    --name $SandboxGroup `
    --location $Location `
    --set-config
```

`--set-config` stores the subscription, resource group, group, and region for
later `aca sandbox` commands.

The caller needs permission to create the `Microsoft.App/SandboxGroups`
resource. Sandbox data-plane operations require **Container Apps SandboxGroup
Data Owner**. Group creation grants that role to the caller by default. Grant
it explicitly only to an additional presenter or automation principal:

```powershell
$PrincipalId = az ad signed-in-user show --query id -o tsv

aca sandboxgroup role create `
    --group $SandboxGroup `
    --role "Container Apps SandboxGroup Data Owner" `
    --principal-id $PrincipalId
```

Treat a clean `aca doctor` result as the gate for the rest of the demo:

```powershell
aca doctor
aca config show
```

RBAC changes can take several minutes to propagate. Retry `aca doctor` before
changing the role assignment.

## 3. Configure the Copilot provider credential

Create a fine-grained GitHub personal access token with Copilot access. It must
start with `github_pat_`; classic `ghp_` tokens are not supported.

1. Open [ACA Sandboxes](https://sandboxes.azure.com/sandbox-groups).
2. Open `ghcp-sandbox-demo`.
3. Open **Credentials** and select **Set Token** for **GitHub Copilot**.
4. Paste the fine-grained token and save it.
5. Confirm that its status is **Configured**.

Provider credentials are stored as sandbox-group connections. The platform
injects authentication for the provider when a sandbox starts; the saved token
is not displayed again in the portal. Recreate or restart sandboxes after
rotating the token.

The presentation slide includes this older preview command shape:

```text
aca sandbox create --disk copilot --credential <copilot-credential-id>
```

The current preview credential documentation configures the credential at
group scope, and the current published CLI reference does not document
`--credential`. Use `aca sandbox create --help` during rehearsal. Add the
flag only if the installed CLI documents it and the portal supplies a
connection ID; never pass the raw PAT on the command line.

## 4. Verify the Copilot disk image

List the public disk names accepted by `--disk`:

```powershell
aca sandboxgroup disk list-public
```

Confirm that `copilot` is present. Public images use `--disk <name>`. Private
or committed images use `--disk-id <resource-id>`.

If the public `copilot` image is unavailable in the selected region or CLI
release, stop the rehearsal and choose a supported region or a reviewed custom
disk image. Do not silently substitute `ubuntu`: Demo 2 expects Copilot CLI to
be preinstalled and authenticated.

## 5. Preflight

Confirm the environment immediately before presenting:

```powershell
aca --version
aca auth status
aca doctor
aca config show
aca sandboxgroup disk list-public
aca sandbox list -l "name=copilot-demo"
```

The expected result is:

- Azure and ACA authentication succeed.
- `aca doctor` reports a valid group and Data Owner role.
- The configured group is `ghcp-sandbox-demo`.
- The `copilot` public disk is available.
- No stale `copilot-demo` sandbox contains state that must be preserved.

If a stale sandbox exists, follow
[Demo 2 validation and recovery](demo-2-validation-and-recovery.md) before
deleting it.

## References

- [Azure Container Apps Sandboxes overview](https://learn.microsoft.com/azure/container-apps/sandboxes-overview)
- [ACA CLI quickstart](https://sandboxes.azure.com/docs/sandboxes/quickstart/setup-cli)
- [Sandbox groups](https://sandboxes.azure.com/docs/sandboxes/sandbox-groups)
- [Provider credentials](https://sandboxes.azure.com/docs/sandboxes/credentials)
- [Disk images](https://sandboxes.azure.com/docs/sandboxes/disk-images)

Commands and preview behavior were checked against the linked documentation on
August 24, 2026.

## Navigation

Next: [Demo 2 live runbook](demo-2-runbook.md)
