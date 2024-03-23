<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { Diff2HtmlUI, type Diff2HtmlUIConfig } from 'diff2html/lib/ui/js/diff2html-ui.js';

	import 'highlight.js/styles/github.css';
	import 'diff2html/bundles/css/diff2html.min.css';
	import './diff.css';

	let diffContainer: HTMLDivElement;
	export let data: PageData;

	onMount(() => {
		const config: Diff2HtmlUIConfig = {
			drawFileList: true,
			fileListToggle: false,
			fileListStartVisible: false,
			fileContentToggle: false,
			matching: 'lines',
			outputFormat: 'side-by-side',
			synchronisedScroll: true,
			highlight: true,
			renderNothingWhenEmpty: false
		};

		const diff2htmlUi = new Diff2HtmlUI(diffContainer, data.diff, config);
		diff2htmlUi.draw();
		diff2htmlUi.highlightCode();
	});
</script>

<svelte:head>
	<title>[diff.haus] {data.uuid}</title>
</svelte:head>

<h1>DIFF HAUS</h1>

<div id="diff-ui" bind:this={diffContainer}></div>
