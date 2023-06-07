// * BUTTONS
import ButtonDefault from './buttons/Button.svelte';
import ButtonIcon from './buttons/ButtonIcon.svelte';

export const Button = Object.assign(ButtonDefault, {
  Icon: ButtonIcon,
});

// * MISC
export { default as Spacer } from './Spacer.svelte';

// * INPUTS
import DefaultInput from './inputs/Input.svelte';
import Prefix from './inputs/Prefix.svelte';
import InputColor from './inputs/InputColor.svelte';
import InputNumber from './inputs/InputNumber.svelte';
import InputDateTime from './inputs/InputDateTime.svelte';
import InputTime from './inputs/InputTime.svelte';
import InputDate from './inputs/InputDate.svelte';

export const Input = Object.assign(DefaultInput, {
  Prefix,
  Color: InputColor,
  Number: InputNumber,
  DateTime: InputDateTime,
  Time: InputTime,
  Date: InputDate,
});

// // * DROPDOWNS
// import Dropdown from './dropdowns/Dropdown.svelte';

// export { Dropdown };

// * CARDS
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

// * CHECKBOXES
import CheckboxDefault from './checkboxes/Checkbox.svelte';
import CheckboxAnimated from './checkboxes/CheckboxAnimated.svelte';

export const Checkbox = Object.assign(CheckboxDefault, {
  Animated: CheckboxAnimated,
});

// * LOADERS
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

// * POPOVERS
export { default as Popover } from './popovers/Popover.svelte';

// * PARALLAXES
import ParallaxDefault from './parallaxes/Parallax.svelte';
import ParallaxVideo from './parallaxes/ParallaxVideo.svelte';

export const Parallax = Object.assign(ParallaxDefault, {
  Video: ParallaxVideo,
});

// * AVATARS
import AvatarDefault from './avatars/Avatar.svelte';

export const Avatar = Object.assign(AvatarDefault, {});

// * IMAGE-FILTERS
import ImageFilterDefault from './imagefilters/ImageFilter.svelte';

export const ImageFilter = Object.assign(ImageFilterDefault, {});

// * ACCORDIONS
import DefaultAccordion from './accordions/Accordion.svelte';

export const Accordion = Object.assign(DefaultAccordion, {});

// * TOGGLES
import ToggleDefault from './toggles/Toggle.svelte';
// import ToggleAnimated from './toggles/ToggleAnimated.svelte';

export const Toggle = Object.assign(ToggleDefault, {
  // Animated: ToggleAnimated,
});