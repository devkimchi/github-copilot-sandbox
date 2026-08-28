# Demo 2: Environment setup

Complete this setup before presenting [Demo 2](demo-2-runbook.md). The demo uses Azure Container Apps Sandboxes, GitHub Copilot CLI, and [`devkimchi/battle-school-lunch`](https://github.com/devkimchi/battle-school-lunch).

## 1. Install the preview CLI

The `aca` CLI is separate from both Azure CLI and `az containerapp`. It uses the Azure CLI identity for authentication.

### Windows

```powershell
irm https://aka.ms/aca-cli-install-ps | iex
aca --version
```

### Linux or macOS

```bash
curl -fsSL https://aka.ms/aca-cli-install | sh
aca --version
```

The same install path can also be used inside sandboxes and containers for agent-driven self-installs.

Login to Azure:

```powershell
az login
```

Only Microsoft Entra ID accounts can access ACA Sandboxes. Personal Microsoft accounts are not supported.

## 2. Create the sandbox group

Create the sandbox group. This demo uses "Korea Central", but you can choose any region taht supports ACA Sandboxes.

```bash
# zsh/bash
ResourceGroup="rg-ghcp-sandbox-demo"
SandboxGroup="ghcp-sandbox-demo"
Location="koreacentral"

az group create --name $ResourceGroup --location $Location
aca sandboxgroup create --name $SandboxGroup --location $Location -g $ResourceGroup --set-config
```

```powershell
# PowerShell
$ResourceGroup = "rg-ghcp-sandbox-demo"
$SandboxGroup = "ghcp-sandbox-demo"
$Location = "koreacentral"

az group create --name $ResourceGroup --location $Location
aca sandboxgroup create --name $SandboxGroup --location $Location -g $ResourceGroup --set-config
```

`--set-config` stores the subscription, resource group, group, and region for later `aca sandbox` commands.

The caller needs permission to create the `Microsoft.App/SandboxGroups` resource. Sandbox data-plane operations require **Container Apps SandboxGroup Data Owner**. Group creation grants that role to the caller by default. Grant it explicitly only to an additional presenter or automation principal:

```bash
# zsh/bash
PrincipalId=$(az ad user list --upn "<email>" --query "[0].id" -o tsv)

aca sandboxgroup role create \
  --group $SandboxGroup \
  --role "Container Apps SandboxGroup Data Owner" \
  --principal-id $PrincipalId
```

```powershell
# PowerShell
$PrincipalId = az ad user list --upn "<email>" --query "[0].id" -o tsv

aca sandboxgroup role create `
  --group $SandboxGroup `
  --role "Container Apps SandboxGroup Data Owner" `
  --principal-id $PrincipalId
```

Treat a clean `aca doctor` result as the gate for the rest of the demo:

```bash
aca doctor
aca config show
```

RBAC changes can take several minutes to propagate. Retry `aca doctor` before changing the role assignment.

## 3. Configure the Copilot provider credential

Create a fine-grained GitHub personal access token with Copilot access. It must start with `github_pat_`; classic `ghp_` tokens are not supported.

```bash
# zsh/bash
GH_PAT="github_pat_*"
CredentialId=$(aca sandboxgroup credential create \
  --type github-copilot --token "$GH_PAT" -o json | jq -r .id)
```

```powershell
# PowerShell
$GH_PAT = "github_pat_*"
$CredentialId = aca sandboxgroup credential create `
  --type github-copilot --token "$GH_PAT" -o json | jq -r .id
```

> [!NOTE]
> `*` is the rest part of your GitHub PAT.

Provider credentials are stored as sandbox-group connections. The platform injects authentication for the provider when a sandbox starts; Recreate or restart sandboxes after rotating the token.

## 4. Verify the Copilot disk image

List the public disk names accepted by `--disk`:

```powershell
aca sandboxgroup disk list-public
```

Confirm that `copilot` is present. Public images use `--disk <name>`.

## 5. Preflight

Confirm the environment immediately before presenting:

```powershell
aca --version
aca auth status
aca doctor
aca config show
aca sandboxgroup disk list-public
```

The expected result is:

- Azure and ACA authentication succeed.
- `aca doctor` reports a valid group and Data Owner role.
- The configured group is `ghcp-sandbox-demo`.
- The `copilot` public disk is available.

## References

- [Azure Container Apps Sandboxes overview](https://learn.microsoft.com/azure/container-apps/sandboxes-overview)
- [ACA CLI quickstart](https://sandboxes.azure.com/docs/sandboxes/quickstart/setup-cli)
- [Sandbox groups](https://sandboxes.azure.com/docs/sandboxes/sandbox-groups)
- [Provider credentials](https://sandboxes.azure.com/docs/sandboxes/credentials)
- [Disk images](https://sandboxes.azure.com/docs/sandboxes/disk-images)

## Navigation

Next: [Demo 2 live runbook](demo-2-runbook.md)
