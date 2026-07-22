import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { afterEach, describe, expect, it } from 'vitest';

const temporaryDirectories = [];
const scriptPath = join(dirname(fileURLToPath(import.meta.url)), 'check-api-ref-generated.mjs');

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { force: true, recursive: true });
  }
});

describe('check-api-ref-generated', () => {
  it('skips the Git diff check when Git metadata is unavailable', () => {
    const workingDirectory = mkdtempSync(join(tmpdir(), 'api-ref-check-'));
    temporaryDirectories.push(workingDirectory);

    const result = spawnSync(process.execPath, [scriptPath], {
      cwd: workingDirectory,
      encoding: 'utf8',
    });

    expect(result.status).toBe(0);
    expect(result.stderr).toContain('Skipping generated file check: Git metadata is unavailable.');
  });
});
