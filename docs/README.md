# AI agent sandboxing demo guides

These documents support the live demos in
[`ai-agent-sandboxing.md`](../ai-agent-sandboxing.md).

## Demo 1: App modernization in a Docker Sandbox

1. [Environment setup](demo-1-setup.md) - install `sbx`, prepare credentials,
   clone either sample, and establish a clean baseline.
2. Choose the [Java live demo runbook](demo-1-runbook-java.md) or the
   [.NET live demo runbook](demo-1-runbook-dotnet.md).
3. Continue with [Java validation and recovery](demo-1-validation-and-recovery-java.md)
   or [.NET validation and recovery](demo-1-validation-and-recovery-dotnet.md).

## Demo 2: Copilot CLI in an ACA Sandbox

1. [Environment setup](demo-2-setup.md) - install `aca`, prepare Azure RBAC and
   credentials, and verify the Copilot disk image.
2. [Live demo runbook](demo-2-runbook.md) - create the managed sandbox,
   generate a UI design plan, and prove that state survives stop and resume.
3. [Validation and recovery](demo-2-validation-and-recovery.md) - export
   evidence, snapshot state, troubleshoot failures, and clean up Azure
   resources.

## Demo 1 outcome

The demo should make four points visible:

- Copilot CLI runs inside an isolated microVM.
- The modernization agent assesses, plans, and executes a Java or .NET upgrade.
- The agent uses a private Git clone and cannot write to the host repository.
- The sandbox has its own Docker daemon and policy-controlled network access.

The sample applications are
[`UW-Madison-DoIT/uportal-messaging`](https://github.com/UW-Madison-DoIT/uportal-messaging)
for Java and
[`Azure-Samples/dotnet-migration-copilot-samples`](https://github.com/Azure-Samples/dotnet-migration-copilot-samples)
for .NET.

## Demo 2 outcome

Demo 2 runs Copilot CLI in an Azure Container Apps Sandbox, asks it to create a
design-only plan for
[`devkimchi/battle-school-lunch`](https://github.com/devkimchi/battle-school-lunch),
stops the remote sandbox, and resumes the same sandbox with its filesystem
state intact.

## References

- [Get started with Docker Sandboxes](https://docs.docker.com/ai/sandboxes/get-started/)
- [Run GitHub Copilot in a Docker Sandbox](https://docs.docker.com/ai/sandboxes/agents/copilot/)
- [Docker Sandbox installation](https://docs.docker.com/ai/sandboxes/install/)
- [Docker Sandbox isolation](https://docs.docker.com/ai/sandboxes/security/isolation/)
- [Modernize Java apps with GitHub Copilot modernization](https://learn.microsoft.com/azure/developer/java/migration/github-copilot-app-modernization-for-java-copilot-cli)

Commands and prerequisites were checked against the linked documentation on
August 24, 2026.
