# GitHub Copilot Sandbox

Presentation materials and demo for running GitHub Copilot CLI in Docker Sandboxes and Azure Container Apps (ACA) Sandboxes.

The primary presentation was prepared for various conferences and meetups, and covers local microVM isolation, remote sandbox lifecycle automation, and Java/.NET application modernization with GitHub Copilot CLI.

## Repository contents

```text
.
├── .github/
├── assets/
├── ai-agent-sandboxing-ko.md   # Korean Marp presentation source
├── ai-agent-sandboxing-en.md   # English Marp presentation source
├── docs/                       # Demo setup, runbooks, and recovery guides
├── index.html                  # Redirect to the Korean presentation
├── LICENSE
└── README.md
```

## Demo guides

The [demo documentation index](docs/README.md) provides two complete, sequential walkthroughs:

| Demo                                      | Setup                         | Runbook                                  | Validation and recovery                                     |
| ----------------------------------------- | ----------------------------- | ---------------------------------------- | ----------------------------------------------------------- |
| 1. Java modernization in a Docker Sandbox | [Setup](docs/demo-1-setup.md) | [Runbook](docs/demo-1-runbook-java.md)   | [Validation](docs/demo-1-validation-and-recovery-java.md)   |
| 1. .NET modernization in a Docker Sandbox | [Setup](docs/demo-1-setup.md) | [Runbook](docs/demo-1-runbook-dotnet.md) | [Validation](docs/demo-1-validation-and-recovery-dotnet.md) |
| 2. Copilot CLI in an ACA Sandbox          | [Setup](docs/demo-2-setup.md) | [Runbook](docs/demo-2-runbook.md)        | [Validation](docs/demo-2-validation-and-recovery.md)        |

## Preview the presentation

> [!NOTE]
> To preview the presentation, you'll need 3 terminals.

1. Install Node.js 22 or later

1. Generate an HTML presentation for English in Terminal A:

    ```bash
    # zsh/bash
    mkdir -p en/assets
    cp -R assets/. en/assets/
    npx --yes @marp-team/marp-cli@4 \
      --watch \
      ai-agent-sandboxing-en.md \
      --html \
      --allow-local-files \
      -o en/index.html
    ```

    ```powershell
    # PowerShell
    New-Item -ItemType Directory -Force en/assets
    Copy-Item -Recurse -Force assets/* en/assets/
    npx --yes @marp-team/marp-cli@4 `
      --watch `
      ai-agent-sandboxing-en.md `
      --html `
      --allow-local-files `
      -o en/index.html
    ```

1. Generate an HTML presentation for Korean in Terminal B:

    ```bash
    # zsh/bash
    mkdir -p ko/assets
    cp -R assets/. ko/assets/
    npx --yes @marp-team/marp-cli@4 \
      --watch \
      ai-agent-sandboxing-ko.md \
      --html \
      --allow-local-files \
      -o ko/index.html
    ```

    ```powershell
    # PowerShell
    New-Item -ItemType Directory -Force ko/assets
    Copy-Item -Recurse -Force assets/* ko/assets/
    npx --yes @marp-team/marp-cli@4 `
      --watch `
      ai-agent-sandboxing-ko.md `
      --html `
      --allow-local-files `
      -o ko/index.html
    ```

1. Run local web server in Terminal C:

    ```bash
    npx serve .
    ```

1. Open a web browser and navigate to `http://localhost:3000` to see the presentation.
