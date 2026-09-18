# Copilot Sandbox Terminal Layout

This private workspace extension opens a shell named **Copilot CLI** in the editor area, merges editor groups, hides both sidebars and the bottom panel, and focuses the terminal. Existing editors are kept open, including unsaved files. A live terminal with the same name is reused on subsequent activations.

Automatic startup is disabled by default. This repository's dev container enables `copilotSandbox.terminalLayout.enabled`; the extension does not modify global user settings. It does not launch Copilot, execute shell commands, or toggle browser fullscreen.

The extension is packaged locally during container creation and installed into the remote VS Code server on attachment. It is not published to the Marketplace; the remote CLI installs it as machine-scoped rather than syncing it to other devices. Installation activates it in the already-open editor via `onStartupFinished`, without requiring a reload.

Run **Copilot Sandbox: Open Terminal Layout** from the Command Palette to reapply the layout. To stop automatic layout changes, set `copilotSandbox.terminalLayout.enabled` to `false` in workspace settings.

## Development

From this directory:

```bash
npm ci
npm test
npm run package
```

Packaging copies the repository's MIT license into the generated VSIX. Neither the generated license copy, dependencies, nor the VSIX is committed. After changing the extension, package it again, run `bash .devcontainer/post-attach.sh` from the repository root, and run **Developer: Reload Window** to load the new code.
