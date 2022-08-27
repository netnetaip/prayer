<script>
	import { navigating } from '$app/stores';
	import Preloader from '$lib/Preloader.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
</script>

<!-- Preloader Indication -->
{#if $navigating}
	<Preloader />
{/if}

<!-- Navigation -->
<Nav />

<!-- Rest -->
<main>
	<slot />
</main>