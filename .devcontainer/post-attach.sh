#!/usr/bin/env bash
set -euo pipefail

extension_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/terminal-layout" && pwd)"

if ! command -v code >/dev/null 2>&1; then
  echo "The terminal layout extension requires the VS Code CLI. Open this Codespace in VS Code and rerun .devcontainer/post-attach.sh." >&2
  exit 1
fi

code --install-extension "$extension_dir/terminal-layout.vsix" --force

# The remote CLI can return zero even when extension installation fails.
extension_version="$(node -e 'const p = require(process.argv[1]); console.log(`${p.publisher}.${p.name}@${p.version}`)' "$extension_dir/package.json")"
if ! code --list-extensions --show-versions | grep -Fx "$extension_version" >/dev/null; then
  echo "The terminal layout extension was not installed. Check the VS Code extension installation output above." >&2
  exit 1
fi
