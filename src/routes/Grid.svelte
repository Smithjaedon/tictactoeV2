<!-- svelte-ignore a11y-click-events-have-key-events -->
<script lang="ts">
	import { hasWon, p1Wins, p2Wins } from '../lib/stores/store';

	let moveCount = 0;
	let isX = true;
	let testX = (value: string) => value == 'X';
	let testO = (value: string) => value == 'O';
	let arrTestX = (arr: string[]) => arr.every(testX);
	let arrTestO = (arr: string[]) => arr.every(testO);

	let board = ['', '', '', '', '', '', '', '', ''];
	let winSet = [];

	const check = () => {
		winSet = [
			[board[0], board[1], board[2]],
			[board[3], board[4], board[5]],
			[board[6], board[7], board[8]],
			[board[0], board[4], board[8]],
			[board[2], board[4], board[6]],
			[board[0], board[3], board[6]],
			[board[1], board[4], board[7]],
			[board[2], board[5], board[8]]
		];

		if (moveCount == 9) {
			hasWon.set(true);
			p1Wins.update((n) => n + 1);
			p2Wins.update((n) => n + 1);
		}

		if (isX) {
			if (winSet.some(arrTestX)) {
				hasWon.set(true);
				p1Wins.update((n) => n + 1);
			}
		} else {
			if (winSet.some(arrTestO)) {
				hasWon.set(true);
				p2Wins.update((n) => n + 1);
			}
		}
	};
	const place = (x: number) => {
		if (board[x] == '') {
			isX ? (board[x] = 'X') : (board[x] = 'O');
			moveCount++;
			check();
			isX = !isX;
		}
	};
</script>

<div class="flex justify-center items-center m-14 text-white text-lg font`">
	<div class="chart grid gap-[0.2rem] border-4 border-[#191919] bg-[#191919]">
		<div on:click={() => place(0)} class="item flex justify-center items-center bg-[#383838]">
			{board[0]}
		</div>
		<div on:click={() => place(1)} class="item flex justify-center items-center bg-[#383838]">
			{board[1]}
		</div>
		<div on:click={() => place(2)} class="item flex justify-center items-center bg-[#383838]">
			{board[2]}
		</div>
		<div on:click={() => place(3)} class="item flex justify-center items-center bg-[#383838]">
			{board[3]}
		</div>
		<div on:click={() => place(4)} class="item flex justify-center items-center bg-[#383838]">
			{board[4]}
		</div>
		<div on:click={() => place(5)} class="item flex justify-center items-center bg-[#383838]">
			{board[5]}
		</div>
		<div on:click={() => place(6)} class="item flex justify-center items-center bg-[#383838]">
			{board[6]}
		</div>
		<div on:click={() => place(7)} class="item flex justify-center items-center bg-[#383838]">
			{board[7]}
		</div>
		<div on:click={() => place(8)} class="item flex justify-center items-center bg-[#383838]">
			{board[8]}
		</div>
	</div>
</div>

<style>
	.chart {
		grid-template-columns: 150px 150px 150px;
		grid-template-rows: 150px 150px 150px;
	}
	.item {
		cursor: pointer;
	}
</style>
