const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');

const script = path.resolve(__dirname, '../../configure-copilot.js');

function withConfig(callback) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'copilot-config-test-'));
  const configDirectory = path.join(directory, 'custom copilot home');
  const configPath = path.join(configDirectory, 'config.json');
  function configure() {
    const result = spawnSync(process.execPath, [script, configDirectory], { encoding: 'utf8' });
    if (result.error) throw result.error;
    return result;
  }
  try {
    callback({ directory, configDirectory, configPath, configure });
  } finally {
    fs.rmSync(directory, { recursive: true });
  }
}

test('creates a private Copilot config with allow-all as the interactive permission default', () => {
  withConfig(({ configPath, configure }) => {
    const result = configure();
    assert.equal(result.status, 0, result.stderr);
    assert.deepEqual(JSON.parse(fs.readFileSync(configPath, 'utf8')), {
      defaultPermissionMode: 'allow-all'
    });
    assert.equal(fs.statSync(configPath).mode & 0o777, 0o600);
  });
});

test('preserves other settings and is idempotent when configuring an existing Copilot home', () => {
  withConfig(({ configDirectory, configPath, configure }) => {
    fs.mkdirSync(configDirectory);
    const existing = {
      defaultPermissionMode: 'manual',
      model: 'test-model',
      trustedFolders: ['/workspaces/sandbox'],
      customSetting: { enabled: true }
    };
    fs.writeFileSync(configPath, JSON.stringify(existing));

    assert.equal(configure().status, 0);
    const first = fs.readFileSync(configPath, 'utf8');
    assert.deepEqual(JSON.parse(first), { ...existing, defaultPermissionMode: 'allow-all' });
    assert.equal(configure().status, 0);
    assert.equal(fs.readFileSync(configPath, 'utf8'), first);
    assert.deepEqual(fs.readdirSync(configDirectory), ['config.json']);
  });
});

for (const contents of ['{invalid-json', 'null', '[]', '"text"', 'false']) {
  test(`rejects invalid configuration without overwriting it: ${contents}`, () => {
    withConfig(({ configDirectory, configPath, configure }) => {
      fs.mkdirSync(configDirectory);
      fs.writeFileSync(configPath, contents);

      const result = configure();
      assert.notEqual(result.status, 0);
      assert.match(result.stderr, /existing configuration was not changed/);
      assert.equal(fs.readFileSync(configPath, 'utf8'), contents);
      assert.deepEqual(fs.readdirSync(configDirectory), ['config.json']);
    });
  });
}

test('requires an explicit destination instead of modifying the host Copilot home', () => {
  const result = spawnSync(process.execPath, [script], { encoding: 'utf8' });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Usage: node configure-copilot.js/);
});

for (const customHome of [false, true]) {
  test(`post-create configures the container ${customHome ? 'COPILOT_HOME' : 'HOME'} before packaging`, () => {
    withConfig(({ directory, configDirectory }) => {
      const bin = path.join(directory, 'bin');
      const log = path.join(directory, 'tools.log');
      const home = path.join(directory, 'home');
      fs.mkdirSync(bin);
      for (const tool of ['copilot', 'npm']) {
        fs.writeFileSync(path.join(bin, tool), `#!/bin/sh
printf '%s\\n' '${tool}' >> "$TEST_TOOL_LOG"
`, { mode: 0o755 });
      }

      const result = spawnSync('bash', [path.resolve(__dirname, '../../post-create.sh')], {
        encoding: 'utf8',
        env: {
          ...process.env,
          HOME: home,
          COPILOT_HOME: customHome ? configDirectory : '',
          PATH: `${bin}${path.delimiter}${process.env.PATH}`,
          TEST_TOOL_LOG: log
        }
      });
      if (result.error) throw result.error;
      assert.equal(result.status, 0, result.stderr);
      const destination = customHome ? configDirectory : path.join(home, '.copilot');
      assert.equal(
        JSON.parse(fs.readFileSync(path.join(destination, 'config.json'), 'utf8')).defaultPermissionMode,
        'allow-all'
      );
      assert.deepEqual(fs.readFileSync(log, 'utf8').trim().split('\n'), ['copilot', 'npm', 'npm']);
      if (customHome) assert.equal(fs.existsSync(path.join(home, '.copilot')), false);
    });
  });
}
