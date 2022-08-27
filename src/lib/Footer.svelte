<script>
	// Exports
	export let section;
</script>

<!-- HTML -->
<header>
	<a href="javascript;">
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
		Naujas
	</a>
	<nav>
		<menu>
			<li class:selected={section === 'board'}><a sveltekit:prefetch href="/board/1">Lenta</a></li>
			<li class:selected={section === 'about'}><a sveltekit:prefetch href="/about">Apie</a></li>
		</menu>
	</nav>
</header>