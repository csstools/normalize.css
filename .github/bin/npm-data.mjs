export async function getPackageDataFromNPM() {
	const resp = await fetch(`https://registry.npmjs.org/@csstools/normalize.css`);
	if (resp.status === 404) {
		throw new Error(`Failed to fetch package metadata for @csstools/normalize.css, status code: ${resp.status} ${resp.statusText}`);
	}

	if (!resp.ok) {
		throw new Error(`Failed to fetch package metadata for @csstools/normalize.css, status code: ${resp.status} ${resp.statusText}`);
	}

	const data = await resp.json();

	return data;
}
