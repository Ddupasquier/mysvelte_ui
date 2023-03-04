import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const defaultModalShown: Writable<boolean> = writable(false);
export const defaultModalSlot: Writable<string> = writable('');