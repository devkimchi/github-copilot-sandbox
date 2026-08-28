# Demo 1: .NET validation and recovery

Use this guide after the agent finishes, or when the live path needs recovery.

## Preserve and review the private branch

Keep the sandbox running while fetching because its Git daemon is available only while the sandbox runs.

From the host `dotnet-migration-copilot-samples` checkout:

```bash
git fetch sandbox-dotnet-appmod
git --no-pager log --oneline --decorate sandbox-dotnet-appmod/modernize/dotnet-*
git --no-pager diff --stat main..sandbox-dotnet-appmod/modernize/dotnet-*
git --no-pager diff main..sandbox-dotnet-appmod/modernize/dotnet-*
```

Review executable and trust-sensitive changes in addition to application code:

```bash
git --no-pager diff --name-status main..sandbox-dotnet-appmod/modernize/dotnet-*
git --no-pager diff main..sandbox-dotnet-appmod/modernize/dotnet-* -- ContosoUniversity/Web.config ContosoUniversity/appsettings.json
```

> [!NOTE]
> `*` may refer to a timestamp or a random string

Pay particular attention to:

- Target frameworks, SDK versions, NuGet dependencies, and package sources in solution, project, `packages.config`, and `NuGet.config` files.
- Migration of `Web.config` settings to `appsettings.json`, environment variables, middleware, and the modern hosting model.
- CI definitions and automation under `.github/`.
- `.github/modernize/assessment/`, `plan.md`, and `tasks.json`.
- Newly added scripts, Dockerfiles, agent configuration, and Git hooks.
- Build and vulnerability-scan output reported by the agent.

Clone mode prevents writes to the host, but the source mount is readable. Do not keep `.env`, tokens, private keys, or other secrets inside the repository, even when they are ignored by Git.

## Materialize the reviewed branch

After reviewing the remote-tracking branch:

```bash
git switch -c modernized --track sandbox-dotnet-appmod/modernize/dotnet-*
git status
```

Run host-side build or test commands only after reviewing the changes as untrusted code. The demo can stop at the diff if executing fetched code on the host is outside the presentation's safety boundary.

## Validation checklist

| Evidence                                          | Expected result                                                 |
| ------------------------------------------------- | --------------------------------------------------------------- |
| `git status --short` on the host before fetch     | No output                                                       |
| Write under `/run/sandbox/source`                 | Fails as read-only                                              |
| `docker info` in the sandbox                      | Reports the sandbox's Docker Engine                             |
| `sbx policy ls` and dashboard                     | Balanced policy and connection decisions visible                |
| Modernization artifacts                           | Assessment, `plan.md`, and `tasks.json` present                 |
| Git history                                       | Separate modernization task commits                             |
| .NET build and test verification                  | Result reported; failures have a specific cause and next action |
| Vulnerability check                               | Result or explicit tool limitation reported                     |

## Troubleshooting

### The plugin is missing

From a sandbox shell:

```bash
copilot plugin marketplace list
copilot plugin marketplace add microsoft/github-copilot-modernization
copilot plugin install github-copilot-modernization@github-copilot-modernization
```

Back in Copilot CLI, run `/plugin list`, then select `github-copilot-modernization:modernize` again with `/agent`.

### No .NET application is found

Confirm that Copilot started in the private clone root:

```bash
pwd
find . -maxdepth 3 \( -name '*.sln' -o -name '*.csproj' \) -print
dotnet --info
git rev-parse --show-toplevel
```

Start the modernization agent from the repository root or the directory containing the solution or project file.

### A network request is denied

Use the dashboard's network panel to identify the exact host, then check its decision:

```bash
sbx policy check network --sandbox dotnet-appmod example.com
```

If the host is required and approved, add only that host:

```bash
sbx policy allow network --sandbox dotnet-appmod example.com
```

If organization governance is active, local allow rules cannot expand the organization policy. Ask the organization administrator to allow the host. Local deny rules still apply.

For this sample, package and SDK downloads might require scoped rules for hosts such as:

```bash
sbx policy check network --sandbox dotnet-appmod api.nuget.org
sbx policy check network --sandbox dotnet-appmod packages.microsoft.com
sbx policy check network --sandbox dotnet-appmod aka.ms
```

### The .NET build fails

Do not present a failed build as a completed modernization. Capture:

```bash
dotnet --info
dotnet restore
dotnet build --no-restore
dotnet test --no-build
```

Classify the failure before retrying:

- A denied hostname requires a reviewed policy rule.
- A restore failure might require updating a package source or replacing an obsolete or incompatible NuGet dependency.
- A legacy .NET Framework project might not build on Linux until its target framework and project format are modernized.
- Compilation errors require another modernization task and commit.
- Test failures require either a fix or an explicit, documented blocker.

### The sandbox reused the wrong mode or state

Clone mode is fixed when the sandbox is created. Preserve useful commits, then recreate it:

```bash
git fetch sandbox-dotnet-appmod
sbx stop dotnet-appmod
sbx rm dotnet-appmod
sbx run --clone --name dotnet-appmod copilot .
```

### Fetch fails

The private clone's Git daemon is unavailable while the sandbox is stopped. Restart it and fetch again:

```bash
sbx run --name dotnet-appmod
git fetch sandbox-dotnet-appmod
```

If the agent used a different branch name, inspect branches inside the sandbox:

```bash
sbx exec -it dotnet-appmod bash
```

```bash
git branch --all
```

## Cleanup

Fetch or push every branch you want to preserve before cleanup:

```bash
git fetch sandbox-dotnet-appmod
sbx stop dotnet-appmod
sbx rm dotnet-appmod
```

Removing the sandbox deletes its microVM, private clone, installed tools, Docker images and containers, and the `sandbox-dotnet-appmod` host remote. It does not modify the host working tree.

## Navigation

Previous: [Demo 1 .NET live runbook](demo-1-runbook-dotnet.md)
