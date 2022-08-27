<script>	
	// Imports
	import Article from "$lib/article/Article.svelte";

	// Lets
	let dataMoreEntries = [];
	let page = 1;
	let limit = 40;

	// Fetch Data
	/** @type {import('./$types').PageData} */
	export let data;

	// Fetch More Data
	const fetchMore = async () => {
		const response = await fetch(
			`https://6016e904f534300017a4509d.mockapi.io/board?page=${page}&limit=${limit}`
		);
		dataMoreEntries = await response.json();
		console.log("Entries Fill — ", dataMoreEntries);
	};

	// Spread Data Entries
	$: data.entries = [...data.entries, ...dataMoreEntries];

	// DEVELOPMENT
	$: console.log("Entries Data — ", data);
</script>

<!-- Head -->
<svelte:head>
	<title>Board</title>
	<meta name="description" content="" />
</svelte:head>

<!-- DEVELOPMENT -->
<div style="background-color: pink; position: fixed; bottom: 50px; z-index: 999; padding: 10px;">
	<p>Entries int - {data.entries.length}</p>
	<p>Entries add - {dataMoreEntries.length}</p>
	<p>Entries addition all loaded? - {data.entries.length ? 'no' : 'yes'}</p>
</div>

<!-- Cards -->
<section>
	<h1>Collective<br />forgiveness</h1>
	{#if data.entries.length === 0}
		<pre>Nothing here yet</pre>
	{:else}
		{#each data.entries as entry, i}
			<Article {entry} {i} />
		{/each}
	{/if}
	<button on:click={() => {page++; fetchMore()}}>Load more...</button>
</section>
