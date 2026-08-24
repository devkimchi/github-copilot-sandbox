# Demo 1 environment setup

Complete this setup before presenting the live runbook.

## 1. Check the host

Docker Sandboxes do not require Docker Desktop or Docker Engine on the host.
The supported host requirements are:

| Platform | Requirement |
| --- | --- |
| Windows | Windows 11, 64-bit Intel or AMD CPU, Windows Hypervisor Platform |
| macOS | macOS Sonoma 14 or later on Apple silicon |
| Linux | Ubuntu 24.04 or later with KVM enabled |

On Windows, enable Windows Hypervisor Platform from an elevated PowerShell
session, then restart if Windows requests it:

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName HypervisorPlatform -All
```

The Java modernization plugin requires a GitHub Copilot subscription. If the
subscription is organization-managed, the organization must enable its
Copilot CLI policy. An Azure account is not required for a source upgrade.

The Copilot sandbox template supplies Copilot CLI and its runtime. The
modernization plugin's documented standalone prerequisite is Node.js 22 or
later; verify the template before the demo:

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

Authenticate GitHub CLI on the host first. Store the resulting token through
the sandbox secret mechanism rather than copying it into the microVM:

```powershell
gh auth login
sbx secret set github --command 'gh auth token'
```

The host-side proxy injects supported credentials into outbound requests. The
token is not exposed to the agent as a file or environment variable.

## 4. Initialize a network policy

Use the **Balanced** preset for the demo. It is default-deny with a baseline
allowlist for common AI providers, code hosts, package registries, and
development services.

```powershell
sbx policy init balanced
sbx policy ls
```

If a preset already exists, do not reset it during the demo. The
`sbx policy reset` command stops running sandboxes.

Do not switch to the Open preset to resolve a single blocked dependency. Add a
narrow rule only after confirming the denied host in the dashboard:

```powershell
sbx policy allow network --sandbox java-modernize artifacts.doit.wisc.edu
sbx policy allow network --sandbox java-modernize artifactorydoit.jfrog.io
```

The sample `pom.xml` declares both hosts. A build might not contact them if all
required artifacts resolve from Maven Central.

## 5. Prepare the sample repository

Use the main checkout, not a linked Git worktree: clone mode does not support a
secondary worktree as its primary workspace.

```powershell
git clone https://github.com/UW-Madison-DoIT/uportal-messaging.git
Set-Location uportal-messaging
git switch -c demo/baseline
git status --short
```

The final command should produce no output. Clone mode follows the host's
checked-out ref when the sandbox is created, but it does not create a task
branch automatically.

Record the baseline for the audience:

```powershell
git --no-pager grep -n '<java.version>\|spring-boot-starter-parent'
git --no-pager log -1 --oneline
```

The repository's `pom.xml` declares Java 8 and Spring Boot 1.5.9.RELEASE. The
live target from Demo 1 is Java 21 and Spring Boot 4.1.

## 6. Preflight

Run these checks before presenting:

```powershell
sbx ls
sbx policy check network github.com
sbx policy check network repo.maven.apache.org
```

If a stale `java-modernize` sandbox exists, preserve any work before removing
it:

```powershell
git fetch sandbox-java-modernize
sbx stop java-modernize
sbx rm java-modernize
```

Do not remove a clone-mode sandbox until its commits have been fetched or
pushed. Removing it deletes the private clone.

## Navigation

Next: [Demo 1 live runbook](demo-1-runbook.md)
