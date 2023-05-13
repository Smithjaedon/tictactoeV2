<script>
	import { darkmode } from '../lib/stores/store';

	const theme = () => {
		darkmode.update((n) => !n);
		document.body.classList.toggle('lightT');
		document.querySelector('.chart')?.classList.toggle('boardLight');

		const elItem = document.querySelectorAll('.item');

		for (const el of elItem) {
			el.classList.toggle('itemLight');
		}
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class:light={!$darkmode}
	on:click={theme}
	class="pill bg-[rbg(124,124,124)] w-20 h-8 rounded-full border-2 border-[rgb(73, 73, 73)]"
>
	<div
		class:lightC={!$darkmode}
		class="relative top-[0.25rem] left-1 circle bg-white w-5 h-5 rounded-full"
	/>
</div>

<style>
	.pill {
		transition: 0.25s all linear;
	}

	.circle {
		transition: 0.25s all linear;
	}

	.light {
		background-color: white;
		transition: 0.25s all linear;
	}

	.lightC {
		background-color: rgb(21, 21, 21);
		left: 3.2rem;
		transition: 0.25s all linear;
	}
</style>
