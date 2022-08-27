<script>
	// Imports
	import { onMount } from "svelte";

	// Exports
	export let entry;
	export let i;

	// Lets
	let daysAgo;

	// Days Counter
	const daysAgoCounter = () => {
		let firstDate = new Date();
		let secondDate = new Date(entry.timestamp);
		const daysSingle = 24 * 60 * 60 * 1000;
		const daysDiff = Math.round(
			Math.abs((firstDate - secondDate) / daysSingle)
		);
		return (daysAgo = daysDiff);
	};

	// Trigger Days Counter
	onMount(() => {
		daysAgoCounter();
	});
</script>

<!-- DEMO -->
<!-- <article>
	<ul style="border: 1px solid blue; display: flex; flex-direction: column; padding: 20px;">
		<li>{entry.id}</li>
		<li>{entry.timestamp}</li>
		<li>{@html entry.author}</li>
		<img src="https://joeschmoe.io/api/v1/{entry.avatar}" alt="{entry.avatar}" height="50" width="50"/>
		<li>{@html entry.location.country}, {@html entry.location.city}</li>
		<li>{entry.language}</li>
		<li>{entry.text}</li>
		<li>{entry.rating}</li>
	</ul>
</article> -->

<!-- HTML -->
{#if entry}
	<article id={entry.userId}>
		<div>
			<figure>
				<img src="https://joeschmoe.io/api/v1/{entry.avatar}" alt="{entry.author}" loading="lazy" width="60" height="60"/>
				<figcaption>
					<dl>
						<dt>{entry.author}</dt>
						<dd><time datetime={entry.timestamp}>{daysAgo} days ago</time></dd>
					</dl>
				</figcaption>
			</figure>
			<p>{entry.text} — {++i}</p>
		</div>
		<button>Pray</button>
	</article>
{/if}
