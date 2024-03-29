// * MISC
export { default as Spacer } from './Spacer.svelte';

// * BUTTONS
import ButtonDefault from './buttons/Button.svelte';
import ButtonIcon from './buttons/ButtonIcon.svelte';

export const Button = Object.assign(ButtonDefault, {
  Icon: ButtonIcon,
});

// * INPUTS
import DefaultInput from './inputs/Input.svelte';
import Prefix from './inputs/InputPrefix.svelte';
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
import Elips from './loaders/LoaderElips.svelte';
import BounceIcon from './loaders/LoaderBounceIcon.svelte';
import Progress from './loaders/LoaderProgress.svelte';
import Pie from './loaders/LoaderPie.svelte';

export const Loader = Object.assign(LoaderDefault, {
  Elips,
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

// * TEXTAREAS
import TextareaDefault from './textareas/Textarea.svelte';
export const Textarea = Object.assign(TextareaDefault, {});

// * MODALS
import ModalDefault from './modals/Modal.svelte';
export const Modal = Object.assign(ModalDefault, {});

// * RADIOS
import RadioDefault from './radios/Radio.svelte';
export const Radio = Object.assign(RadioDefault, {});

// * TABLES
import TableDefault from './tables/Table.svelte';
import TableHead from './tables/TableHead.svelte';
import TableBody from './tables/TableBody.svelte';
import TableRow from './tables/TableRow.svelte';
import TableCell from './tables/TableCell.svelte';
import TablePagination from './tables/TablePagination.svelte';
import TableFilter from './tables/TableFilter.svelte';
import TableSort from './tables/TableSort.svelte';

export const Table = Object.assign(TableDefault, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  Pagination: TablePagination,
  Filter: TableFilter,
  Sort: TableSort,
});
