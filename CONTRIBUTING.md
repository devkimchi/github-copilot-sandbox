# Contributing

Thank you for improving the presentation materials, demo scripts, and infrastructure definitions in this repository.

## Development prerequisites

- Git
- Node.js 22 or later for Marp rendering
- PowerShell 7 for PowerShell scripts (Only for Windows users)
- Bash for shell scripts (Only for non-Windows users)
- Azure CLI with Bicep support for infrastructure validation

## Make a change

1. Create a branch using `feat/`, `fix/`, or `docs/`.
2. Keep generated HTML, PDF, PowerPoint, speaker-note exports, and previews out of commits.
3. Update `CHANGELOG.md` when a change affects users of the materials.
4. Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

## Validate presentation changes

```bash
# For English
mkdir -p en/assets
cp -R assets/. en/assets/
npx --yes @marp-team/marp-cli@4 \
   ai-agent-sandboxing-en.md \
  --html \
  --allow-local-files \
   -o en/index.html
```

```bash
# For Korean
mkdir -p ko/assets
cp -R assets/. ko/assets/
npx --yes @marp-team/marp-cli@4 \
   ai-agent-sandboxing-ko.md \
  --html \
  --allow-local-files \
   -o ko/index.html
```

Review the generated presentation for overflow, broken image links, and readability.

## Validate scripts

PowerShell files should parse without errors:

```powershell
$tokens = $null
$errors = $null
[System.Management.Automation.Language.Parser]::ParseFile(
    '.\path\to\script.ps1',
    [ref] $tokens,
    [ref] $errors
) | Out-Null
$errors
```

Bash files should pass:

```bash
bash -n path/to/script.sh
```

Bicep files should build successfully:

```bash
az bicep build --file path/to/main.bicep
```

## Pull requests

- Explain the purpose and scope of the change.
- Include screenshots for visual slide changes.
- Confirm that local validation completed.
- Keep unrelated changes in separate pull requests.
