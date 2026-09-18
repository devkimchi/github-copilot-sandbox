const fs = require('node:fs');
const path = require('node:path');
const { randomUUID } = require('node:crypto');

const configDirectory = process.argv[2];
if (!configDirectory) {
  throw new Error('Usage: node configure-copilot.js <container-copilot-config-directory>');
}

const configPath = path.join(configDirectory, 'config.json');
let config = {};
if (fs.existsSync(configPath)) {
  const contents = fs.readFileSync(configPath, 'utf8');
  try {
    config = JSON.parse(contents);
  } catch {
    throw new Error(`Invalid JSON in ${configPath}. The existing configuration was not changed.`);
  }
}

if (config === null || Array.isArray(config) || typeof config !== 'object') {
  throw new Error(`Expected a JSON object in ${configPath}. The existing configuration was not changed.`);
}

config.defaultPermissionMode = 'allow-all';
fs.mkdirSync(configDirectory, { recursive: true, mode: 0o700 });

const temporaryPath = path.join(configDirectory, `.config-${randomUUID()}.tmp`);
try {
  fs.writeFileSync(temporaryPath, `${JSON.stringify(config, null, 2)}\n`, {
    encoding: 'utf8',
    mode: 0o600,
    flag: 'wx'
  });
  fs.renameSync(temporaryPath, configPath);
} finally {
  fs.rmSync(temporaryPath, { force: true });
}

console.log(`Configured Copilot defaultPermissionMode=allow-all in ${configPath}`);
