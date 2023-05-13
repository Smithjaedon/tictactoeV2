<script>
	import { p1Wins, p2Wins, darkmode } from '../lib/stores/store';
</script>

<div class="mt-10 pt-3 flex justify-center items-center">
	<div
		class:bgg={!$darkmode}
		class="text-rows inline-flex justify-around border-2 border-solid border-[#444] px-4 py-2 rounded-md text-lg font-bold"
	>
		<p class="text-center pr-8">{$p1Wins}</p>
		<p class="text-center">{$p2Wins}</p>
	</div>
</div>

<style>
	.text-rows {
		border-bottom: 4px solid rgb(16, 154, 204);
	}

	.text-rows:hover {
		border-bottom: 4px solid rgb(16, 195, 204);
	}

	.bgg {
		background-color: rgb(159, 159, 159);
	}
</style>
