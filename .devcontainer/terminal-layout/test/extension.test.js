const assert = require('node:assert/strict');
const { test } = require('node:test');
const { activate } = require('../extension');

function createHost({ enabled = true, folders = [{ uri: 'file:///workspaces/sandbox' }], terminals = [] } = {}) {
  const calls = [];
  const commands = new Map();
  const errors = [];
  const output = [];
  const context = { subscriptions: [] };
  const vscode = {
    ViewColumn: { One: 1 },
    TabInputTerminal: class {},
    workspace: {
      workspaceFolders: folders,
      getConfiguration: () => ({ get: () => enabled })
    },
    commands: {
      async executeCommand(command) {
        calls.push(command);
      },
      registerCommand(command, handler) {
        commands.set(command, handler);
        return { dispose() {} };
      }
    },
    window: {
      terminals,
      tabGroups: { all: [{ tabs: [] }] },
      createOutputChannel() {
        return { appendLine: (message) => output.push(message), dispose() {} };
      },
      createTerminal(options) {
        calls.push(options);
        const terminal = {
          name: options.name,
          show: (preserveFocus) => calls.push(['show', preserveFocus])
        };
        terminals.push(terminal);
        vscode.window.tabGroups.all[0].tabs.push({
          label: options.name,
          input: new vscode.TabInputTerminal()
        });
        return terminal;
      },
      async showErrorMessage(message) {
        errors.push(message);
      }
    }
  };
  return { vscode, context, calls, commands, errors, output };
}

test('opens a focused editor terminal and explicitly closes both sidebars and the panel', async () => {
  const host = createHost();
  await activate(host.context, host.vscode);

  assert.deepEqual(host.calls, [
    'workbench.action.joinAllGroups',
    {
      name: 'Copilot CLI',
      cwd: 'file:///workspaces/sandbox',
      location: { viewColumn: 1 }
    },
    'workbench.action.closeSidebar',
    'workbench.action.closeAuxiliaryBar',
    'workbench.action.closePanel',
    ['show', false]
  ]);
  assert.deepEqual(host.errors, []);
  assert.equal(host.context.subscriptions.length, 2);
});

test('reuses an editor terminal without moving an unrelated panel terminal or creating duplicates', async () => {
  const host = createHost();
  await activate(host.context, host.vscode);
  host.vscode.window.terminals.push({ name: 'bash' });
  host.calls.length = 0;
  await host.commands.get('copilotSandbox.openTerminalLayout')();

  assert.equal(host.vscode.window.terminals.length, 2);
  assert.deepEqual(host.calls, [
    'workbench.action.joinAllGroups',
    ['show', false],
    'workbench.action.closeSidebar',
    'workbench.action.closeAuxiliaryBar',
    'workbench.action.closePanel',
    ['show', false]
  ]);
});

test('moves a reused panel terminal back to the editor', async () => {
  const host = createHost();
  await activate(host.context, host.vscode);
  host.vscode.window.tabGroups.all[0].tabs.length = 0;
  host.calls.length = 0;

  await host.commands.get('copilotSandbox.openTerminalLayout')();
  assert.equal(host.vscode.window.terminals.length, 1);
  assert.ok(host.calls.includes('workbench.action.terminal.moveToEditor'));
});

test('does not reuse exited terminals or unrelated terminals', async () => {
  const host = createHost({
    terminals: [
      { name: 'Copilot CLI', exitStatus: { code: 0 } },
      { name: 'bash' }
    ]
  });
  await activate(host.context, host.vscode);
  assert.equal(host.vscode.window.terminals.length, 3);
  assert.equal(host.vscode.window.terminals[2].name, 'Copilot CLI');
});

test('does not change the layout when automatic startup is disabled, but allows the command', async () => {
  const host = createHost({ enabled: false });
  await activate(host.context, host.vscode);
  assert.deepEqual(host.calls, []);

  await host.commands.get('copilotSandbox.openTerminalLayout')();
  assert.equal(host.vscode.window.terminals.length, 1);
});

test('does not open a terminal when no workspace is open', async () => {
  const host = createHost({ folders: undefined });
  host.vscode.workspace.workspaceFolders = undefined;
  await activate(host.context, host.vscode);
  await host.commands.get('copilotSandbox.openTerminalLayout')();
  assert.deepEqual(host.calls, []);
});

test('reports layout failures in both the output channel and a notification', async () => {
  const host = createHost();
  host.vscode.commands.executeCommand = async () => {
    throw new Error('Command unavailable');
  };
  await activate(host.context, host.vscode);

  assert.equal(host.errors.length, 1);
  assert.match(host.errors[0], /Command unavailable/);
  assert.match(host.output[0], /Command unavailable/);
  assert.equal(host.vscode.window.terminals.length, 0);
});
