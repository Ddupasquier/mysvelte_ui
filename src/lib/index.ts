export { default as Button } from './buttons/Button.svelte';
export { default as BubbleButton } from './buttons/BubbleButton.svelte';
export { default as Spacer } from './Spacer.svelte';

import DefaultInput from './inputs/Input.svelte';
import Prefix from './inputs/Prefix.svelte';

export const Input = Object.assign(DefaultInput, {
  Prefix,
});

import CardDefault from './cards/Card.svelte';
import Head from './cards/Head.svelte';
import Content from './cards/Content.svelte';
import Foot from './cards/Foot.svelte';
import Image from './cards/Image.svelte';

export const Card = Object.assign(CardDefault, {
  Head,
  Content,
  Foot,
  Image,
});

export { default as Popover } from './popovers/Popover.svelte';
