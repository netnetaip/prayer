<script>
	import { onMount } from 'svelte';
	let bar = 0;
	let visible = false;
	onMount(() => {
		visible = true;
		function next() {
			bar += 0.1;
			const remaining = 1 - bar;
			if (remaining > 0.2) setTimeout(next, 500 / remaining);
		}
		setTimeout(next, 200);
	});
</script>

{#if visible}
	<progress max="100" value="{bar * 100}"></progress>
{/if}