<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { Diff2HtmlUI, type Diff2HtmlUIConfig } from 'diff2html/lib/ui/js/diff2html-ui.js';

	import 'highlight.js/styles/github.css';
	import 'diff2html/bundles/css/diff2html.min.css';
	import './diff.css';

	export let data: PageData;
	let diffContainer: HTMLDivElement;
	let diffRendered = false;
	let sideBySideRender = true; // todo: persist, and default false on mobile

	onMount(() => {
		renderDiff();
	});

	function renderDiff(sideBySide = true) {
		const config: Diff2HtmlUIConfig = {
			drawFileList: true,
			fileListToggle: false,
			fileListStartVisible: false,
			fileContentToggle: false,
			matching: 'lines',
			outputFormat: sideBySide ? 'side-by-side' : 'line-by-line',
			synchronisedScroll: true,
			highlight: true,
			renderNothingWhenEmpty: false
		};

		const diff2htmlUi = new Diff2HtmlUI(diffContainer, data.diff, config);
		diff2htmlUi.draw();
		diff2htmlUi.highlightCode();

		// Page state
		diffRendered = true;
		sideBySideRender = sideBySide;
	}
</script>

<svelte:head>
	<title>[diff.haus] {data.uuid}</title>
</svelte:head>

<div id="page-contents" class="m-8" class:rendered={diffRendered}>
	<header class="flex flex-col w-full items-center mb-8">
		<a href="/">
			<h1 class="text-7xl font-bold mb-2 font-display">diff.haus</h1>
		</a>
		<a href={`/d/${data.uuid}`}>{data.uuid}</a>
		<div class="flex flex-row gap-2">
			<button on:click={() => renderDiff(true)} class:underline={sideBySideRender}>
				Side by Side
			</button>
			<button on:click={() => renderDiff(false)} class:underline={!sideBySideRender}>
				Line by Line
			</button>
		</div>
	</header>

	<div bind:this={diffContainer} />
</div>

<style>
	#page-contents {
		opacity: 0;
		transition: opacity 0.5s;
	}

	#page-contents.rendered {
		opacity: 1;
	}
</style>
