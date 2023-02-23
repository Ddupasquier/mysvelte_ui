export { default as Button } from './buttons/Button.svelte';

import DefaultInput from './inputs/Input.svelte';
import Prefix from './inputs/Prefix.svelte';

export const Input = Object.assign(DefaultInput, {
  Prefix,
});
