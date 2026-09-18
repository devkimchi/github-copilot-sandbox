const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');
const manifest = require('../package.json');

const extensionVersion = `${manifest.publisher}.${manifest.name}@${manifest.version}`;
const script = path.resolve(__dirname, '../../post-attach.sh');

function attach({ installed = extensionVersion, installExit = 0 } = {}) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'terminal-layout-test-'));
  try {
    const log = path.join(directory, 'calls.jsonl');
    fs.writeFileSync(path.join(directory, 'code'), `#!/usr/bin/env node
const fs = require('node:fs');
const args = process.argv.slice(2);
fs.appendFileSync(process.env.TEST_LOG, JSON.stringify(args) + '\\n');
if (args[0] === '--install-extension') process.exit(Number(process.env.TEST_INSTALL_EXIT));
if (args[0] === '--list-extensions') console.log(process.env.TEST_INSTALLED);
`, { mode: 0o755 });
    const result = spawnSync('bash', [script], {
      encoding: 'utf8',
      env: {
        ...process.env,
        PATH: `${directory}${path.delimiter}${process.env.PATH}`,
        TEST_LOG: log,
        TEST_INSTALL_EXIT: String(installExit),
        TEST_INSTALLED: installed
      }
    });
    if (result.error) throw result.error;
    return {
      ...result,
      calls: fs.readFileSync(log, 'utf8').trim().split('\n').map((line) => JSON.parse(line))
    };
  } finally {
    fs.rmSync(directory, { recursive: true });
  }
}

test('installs the local VSIX and verifies the exact installed extension version', () => {
  const result = attach();
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.calls[0][0], '--install-extension');
  assert.equal(path.basename(result.calls[0][1]), 'terminal-layout.vsix');
  assert.deepEqual(result.calls[0].slice(2), ['--force']);
  assert.deepEqual(result.calls[1], ['--list-extensions', '--show-versions']);
});

test('reports installation failure even when the remote CLI exits successfully', () => {
  const result = attach({ installed: '' });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /extension was not installed/);
});

test('rejects an outdated installed extension', () => {
  const result = attach({ installed: `${manifest.publisher}.${manifest.name}@0.0.0` });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /extension was not installed/);
});

test('propagates a failing CLI exit code instead of continuing', () => {
  const result = attach({ installExit: 17 });
  assert.equal(result.status, 17);
  assert.equal(result.calls.length, 1);
});
