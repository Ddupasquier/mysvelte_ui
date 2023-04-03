type ComponentPropertyString = `${string}_${string}`;

type PropsTable = {
  tableName: string;
  rows: Record<string, TableRow>
};

type tableRow = {
  name: string;
  description: string;
  default: string;
  nav: boolean;
};

interface BaseDisplayData {
  id: string;
  header: string;
  description: string;
  type: 'gallery' | 'components' | 'nested' | 'table';
  table?: PropsTable;
}

// * BUTTON TYPES
interface ButtonDisplayData extends BaseDisplayData {
  examples: ButtonExample[];
}

interface ButtonExample {
  component?: SvelteComponentTyped;
  props?: ButtonProps;
  code?: string[] | string;
}

interface ButtonProps {
  disabled?: boolean;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  background?: string;
  color?: string;
  text?: string;
  isLoading?: boolean;
  isError?: boolean;
  style?: string;
  'on:click'?: () => void;
  animated?: boolean;
}

interface ButtonIconProps extends ButtonProps {
  icon: string;
}

// * INPUT TYPES
interface InputDisplayData extends BaseDisplayData {
  examples: InputExample[];
}

interface InputExample {
  component: SvelteComponentTyped;
  props: InputProps | PrefixProps;
  code?: string[] | string;
}

interface InputProps {
  id?: string;
  variant?: 'default' | 'line' | 'outline';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  type?: 'text' | 'email' | 'password' | 'number';
  background?: string;
  color?: string;
  placeholder?: string;
  value?: string;
  style?: string;
  label?: boolean;
  labelIn?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  isError?: boolean;
  isLoading?: boolean;
}

interface PrefixProps extends InputProps {
  prefix: string;
}

// * CARD TYPES
interface CardDisplayData extends BaseDisplayData {
  examples: CardExample[];
}

interface CardNested {
  component: SvelteComponentTyped;
  props: CardProps;
}

interface CardExample {
  component: SvelteComponentTyped;
  props: CardProps | CardImageProps;
  nested?: CardNested[];
  code?: string[];
}

interface CardProps {
  background?: string;
  color?: string;
  style?: string;
  slot?: unknown;
  nested?: CardExample[];
}

interface CardImageProps extends CardProps {
  image: string;
}

// * Popover TYPES
interface PopoverDisplayData extends BaseDisplayData {
  examples: PopoverExample[];
}

interface PopoverExample {
  component: SvelteComponentTyped;
  props: PopoverProps;
  code?: string[];
}

interface PopoverProps {
  direction: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'click' | 'hover';
  style?: string;
  flyIn?: boolean;
  content?: string;
}

// * Radio TYPES
interface RadioDisplayData extends BaseDisplayData {
  examples: RadioExample[];
}

interface RadioExample {
  component: SvelteComponentTyped;
  props: RadioProps;
  code?: string[];
}

interface RadioProps {
  options: string[];
  selected?: string[];
  labelColor?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  groupId: string;
  use?: 'one' | 'many';
}

// * Dropdown TYPES
interface DropdownDisplayData extends BaseDisplayData {
  examples: DropdownExample[];
}

interface DropdownExample {
  component: SvelteComponentTyped;
  props: DropdownProps;
  code?: string[];
}

interface DropdownProps {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  disabled?: boolean;
  style?: string;
}

// * Loader TYPES
interface LoaderDisplayData extends BaseDisplayData {
  examples: LoaderExample[];
}

interface LoaderExample {
  component: SvelteComponentTyped;
  props: LoaderProps;
  code?: string[];
}

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  style?: string;
  speed?: 'slow' | 'medium' | 'fast';
}

interface BounceLoaderProps extends LoaderProps {
  icon?: string;
}

// * Checkbox TYPES
interface CheckboxDisplayData extends BaseDisplayData {
  examples: CheckboxExample[];
}

interface CheckboxExample {
  component: SvelteComponentTyped;
  props: CheckboxProps;
  code?: string[];
}

interface CheckboxProps {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  labelColor?: string;
  disabled?: boolean;
  checked?: boolean;
  style?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

// * Parallax TYPES
interface ParallaxDisplayData extends BaseDisplayData {
  examples: ParallaxExample[];
}

interface ParallaxExample {
  component: SvelteComponentTyped;
  props: ParallaxProps | VideoParallaxProps;
  code?: string[];
}

interface ParallaxProps {
  image: string;
  height?: string;
  width?: string;
  alt: string;
  speed?: number;
}

interface ParallaxProps {
  image: string;
  height?: string;
  width?: string;
  alt: string;
  speed?: number;
  position?: [number, number];
}

interface VideoParallaxProps {
  video: string;
  height?: string;
  width?: string;
  speed?: number;
  position?: [number, number];
}
