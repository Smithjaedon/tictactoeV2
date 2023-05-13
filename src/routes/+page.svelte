<script>
	import { hasWon } from '$lib/stores/store';
	import Btn from './Btn.svelte';
	import Grid from './Grid.svelte';
	import Scores from './Scores.svelte';

	let unique = {};
	const rst = () => {
		unique = {};
		hasWon.set(false);
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Scores />
	{#key unique}
		{#if $hasWon}
			<div class=" z-0 absolute h-[480px] w-full " />
		{/if}
		<Grid />
	{/key}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	{#if $hasWon}
		<div on:click={rst}>
			<Btn />
		</div>
	{/if}
</section>

<style>
	:root {
		--nohov: rgb(16, 154, 204);
		--hov: rgb(16, 195, 204);
	}
	:global(.lightT) {
		background-color: rgb(207, 207, 207);
	}

	:global(.boardLight) {
		border-color: #242424;
		background-color: #242424;
	}

	:global(.itemLight) {
		background-color: #4e4e4e;
	}
</style>
