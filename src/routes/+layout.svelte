<script>
	import './styles.css';
	import Switch from './Switch.svelte';
</script>

<div class="app">
	<main class="place-center">
		<nav class="p-4 flex justify-center bg-[#191919]">
			<h1 class=" font-medium text-2xl">TicTacToe</h1>
			<div class="absolute right-6 invisible md:visible">
				<Switch />
			</div>
		</nav>
		<slot />
	</main>
</div>

<style>
</style>
