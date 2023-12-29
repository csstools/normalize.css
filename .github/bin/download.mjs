import fs from 'fs/promises';
import path from 'node:path';
import { spawn } from 'child_process';
import { tmpdir } from 'node:os';

export async function createTempDir() {
	const name = await fs.mkdtemp(path.join(tmpdir(), 'normalize.css-'));
	return [name, async () => fs.rm(name, { recursive: true, force: true })];
}

export async function curlDownloadAndExtract(url, dir) {
	await fs.mkdir(dir, { recursive: true });

	const curl = spawn('curl', [url, '-o', path.join(dir, 'archive.tgz')]);
	await new Promise((resolve, reject) => {
		curl.on('close', (code) => {
			if (code === 0) {
				resolve();
			} else {
				reject(new Error(`curl exited with code ${code}`));
			}
		});
	});

	const unzip = spawn('tar', ['-xzf', path.join(dir, 'archive.tgz'), '-C', dir, '--strip-components=1']);
	await new Promise((resolve, reject) => {
		unzip.on('close', (code) => {
			if (code === 0) {
				resolve();
			} else {
				reject(new Error(`tar exited with code ${code}`));
			}
		});
	});
}
