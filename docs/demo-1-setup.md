# Demo 1: Environment setup

Complete this setup before presenting the live runbook.

## 1. Check the host

Docker Sandboxes do not require Docker Desktop or Docker Engine on the host. The supported host requirements are:

| Platform | Requirement                                                      |
| -------- | ---------------------------------------------------------------- |
| Windows  | Windows 11, 64-bit Intel or AMD CPU, Windows Hypervisor Platform |
| macOS    | macOS Sonoma 14 or later on Apple silicon                        |
| Linux    | Ubuntu 24.04 or later with KVM enabled                           |

On Windows, enable Windows Hypervisor Platform from an elevated PowerShell session, then restart if Windows requests it:

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName HypervisorPlatform -All
```

The app modernization plugin requires a GitHub Copilot subscription. If the subscription is organization-managed, the organization must enable its Copilot CLI policy. An Azure account is not required for a source upgrade.

The Copilot sandbox template supplies Copilot CLI and its runtime. The modernization plugin's documented standalone prerequisite is Node.js 22 or later; verify the template before the demo:

```powershell
sbx --version
gh auth status
```

## 2. Install and sign in to `sbx`

### Windows

```powershell
winget install -h Docker.sbx
sbx login
```

### macOS

```bash
brew trust docker/tap
brew install docker/tap/sbx
sbx login
```

### Ubuntu

Install `sbx` without adding Docker Engine to the host:

```bash
curl -fsSL https://get.docker.com | sudo REPO_ONLY=1 sh
sudo apt install docker-sbx
sbx login
```

## 3. Store the GitHub credential

Authenticate GitHub CLI on the host first. Store the resulting token through the sandbox secret mechanism rather than copying it into the microVM:

```powershell
gh auth login
sbx secret set github --command 'gh auth token'
```

The host-side proxy injects supported credentials into outbound requests. The token is not exposed to the agent as a file or environment variable.

## 4. Initialize a network policy

Use the **Balanced** preset for the demo. It is default-deny with a baseline allowlist for common AI providers, code hosts, package registries, and development services.

```powershell
sbx policy init balanced
sbx policy ls
```

## 5. Prepare the sample repository

Use the main checkout, not a linked Git worktree: clone mode does not support a secondary worktree as its primary workspace.

```bash
# Java
git clone https://github.com/UW-Madison-DoIT/uportal-messaging.git
cd uportal-messaging
```

```bash
# .NET
git clone https://github.com/Azure-Samples/dotnet-migration-copilot-samples.git
cd dotnet-migration-copilot-samples
```

## 6. Preflight

Run these checks before presenting:

```bash
# Java
sbx ls
sbx policy check network "**.github.com"

sbx policy allow network "**.apache.org"
```

```bash
# .NET
sbx ls
sbx policy check network "**.github.com"

sbx policy allow network "**.nuget.org"
sbx policy allow network "**.microsoft.com"
sbx policy allow network "**.azure.com"
sbx policy allow network aka.ms
```

## Navigation

Next: [Demo 1 Java live runbook](demo-1-runbook-java.md) | [Demo 1 .NET live runbook](demo-1-runbook-dotnet.md)
