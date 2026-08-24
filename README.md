# GitHub Copilot Sandbox

Presentation materials and demo automation for running GitHub Copilot CLI in Docker Sandboxes and Azure Container Apps (ACA) Sandboxes.

The primary presentation was prepared for various conferences and meetups, and covers local microVM isolation, remote sandbox lifecycle automation, and Java application modernization with GitHub Copilot CLI.

## Repository contents

```text
.
├── .github/
├── assets/
├── ai-agent-sandboxing.md      # Marp presentation source
├── docs/                       # Demo setup, runbooks, and recovery guides
├── index.html                  # Generated presentation (ignored)
├── LICENSE
└── README.md
```

## Demo guides

The [demo documentation index](docs/README.md) provides two complete,
sequential walkthroughs:

| Demo | Setup | Runbook | Validation and recovery |
| --- | --- | --- | --- |
| 1. Java modernization in a Docker Sandbox | [Setup](docs/demo-1-setup.md) | [Runbook](docs/demo-1-runbook.md) | [Validation](docs/demo-1-validation-and-recovery.md) |
| 2. Copilot CLI in an ACA Sandbox | [Setup](docs/demo-2-setup.md) | [Runbook](docs/demo-2-runbook.md) | [Validation](docs/demo-2-validation-and-recovery.md) |

## Preview the presentation

1. Install Node.js 22 or later, then generate an HTML presentation:

    ```bash
    # zsh/bash
    npx --yes @marp-team/marp-cli@4 \
      --watch \
      ai-agent-sandboxing.md \
      --html \
      --allow-local-files \
      -o index.html
    ```

    ```powershell
    # PowerShell
    npx --yes @marp-team/marp-cli@4 `
      --watch `
      ai-agent-sandboxing.md `
      --html `
      --allow-local-files `
      -o index.html
    ```

1. Run local web server:

    ```bash
    npx serve .
    ```

1. Open a web browser and navigate to `http://localhost:3000` to see the presentation.