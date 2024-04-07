<div class="grid justify-center m-20">
	<div class="flex flex-col gap-4 items-center max-w-screen-sm">
		<h1 class="text-5xl font-bold">DIFF.HAUS</h1>

		<p>
			This app is a work in progress, but basic diff sharing works! Try something like this to
			easily post a diff and send it to your pals.
		</p>

		<code class="bg-black text-white p-2 rounded-sm">
			git diff | curl -X POST -H "Content-Type: text/plain" --data-binary @-
			http://diff.haus/api/diffs
		</code>
	</div>
</div>
