import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	// Go home if no uuid is supplied
	if (!params.uuid) {
		return redirect(303, '/');
	}

	// Return demo data for now
	return {
		diff: demoDiff
	};
};

const demoDiff = `
diff --git a/web/package-lock.json b/web/package-lock.json
index 3744b5c..efde344 100644
--- a/web/package-lock.json
+++ b/web/package-lock.json
@@ -7,6 +7,9 @@
 		"": {
 			"name": "web",
 			"version": "0.0.1",
+			"dependencies": {
+				"diff2html": "^3.4.47"
+			},
 			"devDependencies": {
 				"@sveltejs/adapter-auto": "^3.0.0",
 				"@sveltejs/kit": "^2.0.0",
@@ -1241,6 +1244,11 @@
 				"url": "https://opencollective.com/vitest"
 			}
 		},
+		"node_modules/abbrev": {
+			"version": "1.1.1",
+			"resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
+			"integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="
+		},
 		"node_modules/acorn": {
 			"version": "8.11.3",
 			"resolved": "https://registry.npmjs.org/acorn/-/acorn-8.11.3.tgz",
@@ -1667,6 +1675,14 @@
 			"integrity": "sha512-KqFl6pOgOW+Y6wJgu80rHpo2/3H07vr8ntR9rkkFIRETewbf5GaYYcakYfiKz89K+sLsuPkQIZaXDMjUObZwWg==",
 			"dev": true
 		},
+		"node_modules/diff": {
+			"version": "5.1.0",
+			"resolved": "https://registry.npmjs.org/diff/-/diff-5.1.0.tgz",
+			"integrity": "sha512-D+mk+qE8VC/PAUrlAU34N+VfXev0ghe5ywmpqrawphmVZc1bEfn56uo9qpyGp1p4xpzOHkSW4ztBd6L7Xx4ACw==",
+			"engines": {
+				"node": ">=0.3.1"
+			}
+		},
 		"node_modules/diff-sequences": {
 			"version": "29.6.3",
 			"resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-29.6.3.tgz",
@@ -1676,6 +1692,21 @@
 				"node": "^14.15.0 || ^16.10.0 || >=18.0.0"
 			}
 		},
+		"node_modules/diff2html": {
+			"version": "3.4.47",
+			"resolved": "https://registry.npmjs.org/diff2html/-/diff2html-3.4.47.tgz",
+			"integrity": "sha512-2llDp8750FRUJl8n7apM0tlcqZYxbDHTw7qhzv/kGddByHRpn3Xg/sWHHIy34h492aGSpStEULydxqrITYpuoA==",
+			"dependencies": {
+				"diff": "5.1.0",
+				"hogan.js": "3.0.2"
+			},
+			"engines": {
+				"node": ">=12"
+			},
+			"optionalDependencies": {
+				"highlight.js": "11.9.0"
+			}
+		},
 		"node_modules/dir-glob": {
 			"version": "3.0.1",
 			"resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
@@ -2295,6 +2326,36 @@
 				"node": ">=8"
 			}
 		},
+		"node_modules/highlight.js": {
+			"version": "11.9.0",
+			"resolved": "https://registry.npmjs.org/highlight.js/-/highlight.js-11.9.0.tgz",
+			"integrity": "sha512-fJ7cW7fQGCYAkgv4CPfwFHrfd/cLS4Hau96JuJ+ZTOWhjnhoeN1ub1tFmALm/+lW5z4WCAuAV9bm05AP0mS6Gw==",
+			"optional": true,
+			"engines": {
+				"node": ">=12.0.0"
+			}
+		},
+		"node_modules/hogan.js": {
+			"version": "3.0.2",
+			"resolved": "https://registry.npmjs.org/hogan.js/-/hogan.js-3.0.2.tgz",
+			"integrity": "sha512-RqGs4wavGYJWE07t35JQccByczmNUXQT0E12ZYV1VKYu5UiAU9lsos/yBAcf840+zrUQQxgVduCR5/B8nNtibg==",
+			"dependencies": {
+				"mkdirp": "0.3.0",
+				"nopt": "1.0.10"
+			},
+			"bin": {
+				"hulk": "bin/hulk"
+			}
+		},
+		"node_modules/hogan.js/node_modules/mkdirp": {
+			"version": "0.3.0",
+			"resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.3.0.tgz",
+			"integrity": "sha512-OHsdUcVAQ6pOtg5JYWpCBo9W/GySVuwvP9hueRMW7UqshC0tbfzLv8wjySTPm3tfUZ/21CE9E1pJagOA91Pxew==",
+			"deprecated": "Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)",
+			"engines": {
+				"node": "*"
+			}
+		},
 		"node_modules/human-signals": {
 			"version": "5.0.0",
 			"resolved": "https://registry.npmjs.org/human-signals/-/human-signals-5.0.0.tgz",
@@ -2757,6 +2818,20 @@
 			"integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
 			"dev": true
 		},
+		"node_modules/nopt": {
+			"version": "1.0.10",
+			"resolved": "https://registry.npmjs.org/nopt/-/nopt-1.0.10.tgz",
+			"integrity": "sha512-NWmpvLSqUrgrAC9HCuxEvb+PSloHpqVu+FqcO4eeF2h5qYRhA7ev6KvelyQAKtegUbC6RypJnlEOhd8vloNKYg==",
+			"dependencies": {
+				"abbrev": "1"
+			},
+			"bin": {
+				"nopt": "bin/nopt.js"
+			},
+			"engines": {
+				"node": "*"
+			}
+		},
 		"node_modules/normalize-path": {
 			"version": "3.0.0",
 			"resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
diff --git a/web/package.json b/web/package.json
index 0800bac..122ec27 100644
--- a/web/package.json
+++ b/web/package.json
@@ -31,5 +31,8 @@
 		"vite": "^5.0.3",
 		"vitest": "^1.2.0"
 	},
-	"type": "module"
+	"type": "module",
+	"dependencies": {
+		"diff2html": "^3.4.47"
+	}
 }
diff --git a/web/src/routes/d/[[uuid]]/+page.server.ts b/web/src/routes/d/[[uuid]]/+page.server.ts
new file mode 100644
index 0000000..7e6ac83
--- /dev/null
+++ b/web/src/routes/d/[[uuid]]/+page.server.ts
@@ -0,0 +1,18 @@
+import { redirect } from '@sveltejs/kit';
+import type { PageServerLoad } from './$types';
+
+export const load: PageServerLoad = async ({ params }) => {
+	// Go home if no uuid is supplied
+	if (!params.uuid) {
+		return redirect(303, '/');
+	}
+
+	// Return demo data for now
+	return {
+		props: {
+			uuid: params.uuid,
+			title: 'Demo Page',
+			content: 'This is a demo page.'
+		}
+	};
+};
diff --git a/web/src/routes/d/[[uuid]]/+page.svelte b/web/src/routes/d/[[uuid]]/+page.svelte
new file mode 100644
index 0000000..7235c4d
--- /dev/null
+++ b/web/src/routes/d/[[uuid]]/+page.svelte
@@ -0,0 +1,10 @@
+<script lang="ts">
+	import type { PageData } from './$types';
+
+	export let data: PageData;
+
+	console.log(data);
+</script>
+
+<h1>It's a diff... haus</h1>
+<p>Mighty mighty, letting it all hang out</p>
`;
