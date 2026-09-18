# GitHub Copilot Sandbox

Presentation materials and demo for running GitHub Copilot CLI in Docker Sandboxes and Azure Container Apps (ACA) Sandboxes.

The primary presentation was prepared for various conferences and meetups, and covers local microVM isolation, remote sandbox lifecycle automation, and Java/.NET application modernization with GitHub Copilot CLI.

## Repository contents

```text
.
├── .devcontainer/              # Copilot CLI Codespaces environment and terminal layout
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

## Open in GitHub Codespaces

Choose **Code > Codespaces > Create codespace** on a branch containing
[`.devcontainer/devcontainer.json`](.devcontainer/devcontainer.json). For an existing
Codespace, run **Codespaces: Rebuild Container** from the Command Palette.

The container uses Microsoft's
[`mcr.microsoft.com/devcontainers/universal:6.1.7-noble`](https://github.com/devcontainers/images/tree/v0.4.33/src/universal)
image as the non-root `codespace` user. Its published image already includes GitHub
Copilot CLI, GitHub CLI, Node.js, and the multi-language toolchains; no separate
Copilot installation is performed. This image targets Linux x86-64, as used by
Codespaces; local ARM64 machines require emulation.

On the first VS Code attachment, a small
[repository-owned extension](.devcontainer/terminal-layout/README.md) is installed
automatically. It opens a full-width editor terminal, hides both sidebars and the
bottom panel, and focuses the shell. Container settings also hide the activity bar,
status bar, and editor tabs. The normal editor UI may appear briefly while setup
and extension activation finish. Browser tabs and the address bar remain visible;
browser fullscreen requires a user gesture.

In the terminal, run:

```bash
copilot --version
copilot
```

Complete Copilot's sign-in flow if prompted; a Copilot-enabled account and any
required organization policy approval are still needed. No credentials are stored
in this repository. The layout extension opens a shell, not an unattended Copilot
session, and does not bypass Copilot's permission prompts.

To reapply the layout, open the Command Palette with **F1** and run
**Copilot Sandbox: Open Terminal Layout**. To return to a normal editor, set
`copilotSandbox.terminalLayout.enabled` to `false` in workspace settings, set
`workbench.activityBar.location` to `"default"`, `workbench.statusBar.visible` to
`true`, and `workbench.editor.showTabs` to `"multiple"`. Then use **View: Toggle
Primary Side Bar Visibility** and **View: Toggle Secondary Side Bar Visibility**
as needed. These changes do not affect VS Code outside this container/workspace.

If no terminal appears, inspect the Codespaces creation log for
`post-create.sh`/`post-attach.sh` failures and the **Copilot Sandbox Terminal Layout**
output channel. The setup needs npm registry access to package the extension.
After correcting a setup failure, run `bash .devcontainer/post-create.sh` followed
by `bash .devcontainer/post-attach.sh` in a VS Code terminal. SSH-only sessions have
no VS Code layout to configure.

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
