import path from 'path';
import fs from 'fs/promises';

export async function removeAllReleaseDirs() {
	const releaseDirs = await findAllReleaseDirs();

	for (const dir of releaseDirs) {
		await fs.rm(dir, { recursive: true, force: true });
	}
}

async function findAllReleaseDirs() {
	const dir = path.resolve('docs');
	const dirents = await fs.readdir(dir, { withFileTypes: true });
	const releaseDirs = dirents.map((dirent) => {
		const res = path.resolve(dir, dirent.name);
		if (!res.startsWith(dir)) {
			return [];
		}

		if (dirent.isSymbolicLink()) {
			return [];
		}

		if (dirent.isDirectory()) {
			const basename = path.basename(res);
			if (/^\d+\.\d+\.\d+/.test(basename) && parseInt(basename.split('.')[0], 10) >= 8) {
				return [res];
			}

			if (basename === 'latest') {
				return [res];
			}
		}

		return [];
	});

	return releaseDirs.flat();
}
