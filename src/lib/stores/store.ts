import { writable } from 'svelte/store';

export const darkmode = writable(true);
export const hasWon = writable(false);
export const p1Wins = writable(0);
export const p2Wins = writable(0);
