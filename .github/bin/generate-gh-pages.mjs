import fs from "fs/promises";
import path from "path";
import { createTempDir, curlDownloadAndExtract } from "./download.mjs";
import { getPackageDataFromNPM } from "./npm-data.mjs";
import { removeAllReleaseDirs } from "./remove-all-current-release-dirs.mjs";

await fs.copyFile(path.join('.', 'test.html'), path.join('docs', 'test.html'));

await removeAllReleaseDirs();

const npmData = await getPackageDataFromNPM();
const [tmpDir, cleanup] = await createTempDir();

for (const version in npmData.versions) {
	const versionData = npmData.versions[version];
	const tarBallURL = versionData.dist.tarball;
	const tmpDirForVersion = path.join(tmpDir, version);

	await curlDownloadAndExtract(tarBallURL, tmpDirForVersion);

	await fs.mkdir(path.join('docs', version));
	await fs.copyFile(path.join(tmpDirForVersion, 'normalize.css'), path.join('docs', version, 'normalize.css'));
	await fs.copyFile(path.join('docs', 'test.html'), path.join('docs', version, 'test.html'));
}

for (const distTag in npmData['dist-tags']) {
	const version = npmData['dist-tags'][distTag];
	const versionData = npmData.versions[version];
	if (!versionData) {
		continue;
	}

	const tarBallURL = versionData.dist.tarball;
	const tmpDirForVersion = path.join(tmpDir, distTag);

	await curlDownloadAndExtract(tarBallURL, tmpDirForVersion);

	await fs.mkdir(path.join('docs', distTag));
	await fs.copyFile(path.join(tmpDirForVersion, 'normalize.css'), path.join('docs', distTag, 'normalize.css'));
	await fs.copyFile(path.join('docs', 'test.html'), path.join('docs', distTag, 'test.html'));
}

await cleanup();
