<script>
	// Exports
	// export let section;
</script>

<!-- HTML -->
<header>
	<a sveltekit:prefetch href="/board">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M2 17L12 22L22 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M2 12L12 17L22 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>						
	</a>
	<nav>
		<!-- <a sveltekit:prefetch href="/list/board/" class:selected={section === 'list'}>Forgive</a>
		<a sveltekit:prefetch href="/about/" class:selected={section === 'about'}>WTF?</a> -->
		<a sveltekit:prefetch href="/about">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
		</a>
	</nav>
</header>