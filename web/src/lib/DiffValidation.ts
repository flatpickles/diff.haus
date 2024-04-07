export function validate(diffText: string): boolean {
	// Check for empty text
	if (!diffText.trim()) {
		return false;
	}

	// Regular expression to match the start of a file diff section
	const fileDiffHeaderRegex = /^diff --git a\/.+ b\/.+/gm;
	// Regular expression to match hunk headers
	const hunkHeaderRegex = /^@@ -\d+,\d+ \+\d+,\d+ @@/gm;

	// Check for the presence of file diff headers and hunk headers
	const hasFileDiffHeaders = diffText.match(fileDiffHeaderRegex);
	const hasHunkHeaders = diffText.match(hunkHeaderRegex);

	return Boolean(hasFileDiffHeaders && hasHunkHeaders);
}
