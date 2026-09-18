const terminalName = 'Copilot CLI';

async function activate(context, vscode = require('vscode')) {
  const output = vscode.window.createOutputChannel('Copilot Sandbox Terminal Layout');
  context.subscriptions.push(output);

  async function openTerminalLayout() {
    const folder = vscode.workspace.workspaceFolders?.[0];
    if (!folder) {
      return;
    }

    try {
      await vscode.commands.executeCommand('workbench.action.joinAllGroups');

      let terminal = vscode.window.terminals.find(
        (candidate) => candidate.name === terminalName && candidate.exitStatus === undefined
      );
      if (terminal) {
        terminal.show(false);
        const inEditor = vscode.window.tabGroups.all.some((group) =>
          group.tabs.some((tab) =>
            tab.input instanceof vscode.TabInputTerminal && tab.label === terminal.name
          )
        );
        // MoveToEditor targets the active panel terminal, not the active editor terminal.
        if (!inEditor) {
          await vscode.commands.executeCommand('workbench.action.terminal.moveToEditor');
        }
      } else {
        terminal = vscode.window.createTerminal({
          name: terminalName,
          cwd: folder.uri,
          location: { viewColumn: vscode.ViewColumn.One }
        });
      }

      await vscode.commands.executeCommand('workbench.action.closeSidebar');
      await vscode.commands.executeCommand('workbench.action.closeAuxiliaryBar');
      await vscode.commands.executeCommand('workbench.action.closePanel');
      terminal.show(false);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      output.appendLine(`Unable to open the terminal layout: ${message}`);
      await vscode.window.showErrorMessage(
        `Copilot Sandbox could not open the terminal layout: ${message}. See the Copilot Sandbox Terminal Layout output channel.`
      );
    }
  }

  context.subscriptions.push(
    vscode.commands.registerCommand('copilotSandbox.openTerminalLayout', openTerminalLayout)
  );

  const folder = vscode.workspace.workspaceFolders?.[0];
  if (folder && vscode.workspace
    .getConfiguration('copilotSandbox.terminalLayout', folder.uri)
    .get('enabled', false)) {
    await openTerminalLayout();
  }
}

module.exports = { activate };
