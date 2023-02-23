export { default as Button } from './buttons/Button.svelte';
export { default as BubbleButton } from './buttons/BubbleButton.svelte';
export { default as Spacer } from './Spacer.svelte';

import DefaultInput from './inputs/Input.svelte';
import Prefix from './inputs/Prefix.svelte';

export const Input = Object.assign(DefaultInput, {
  Prefix,
});
