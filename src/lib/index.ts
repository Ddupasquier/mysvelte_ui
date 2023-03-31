import ButtonDefault from './buttons/Button.svelte';
import ButtonBubble from './buttons/BubbleButton.svelte';
import ButtonIcon from './buttons/ButtonIcon.svelte';

export const Button = Object.assign(ButtonDefault, {
  Bubble: ButtonBubble,
  Icon: ButtonIcon,
});

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

import CheckboxDefault from './checkboxes/Checkbox.svelte';
import CheckboxAnimated from './checkboxes/CheckboxAnimated.svelte';

export const Checkbox = Object.assign(CheckboxDefault, {
  Animated: CheckboxAnimated,
});

import LoaderDefault from './loaders/Loader.svelte';
import Elips from './loaders/Elips.svelte';
import Roll from './loaders/Roll.svelte';
import BounceIcon from './loaders/BounceIcon.svelte';
import Progress from './loaders/Progress.svelte';
import Pie from './loaders/Pie.svelte';

export const Loader = Object.assign(LoaderDefault, {
  Elips,
  Roll,
  BounceIcon,
  Progress,
  Pie
});

export { default as Popover } from './popovers/Popover.svelte';
