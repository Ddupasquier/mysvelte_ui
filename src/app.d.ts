type ComponentPropertyString = `${string}_${string}`;

type PropsTable = {
  tableName: string;
  rows: Record<string, TableRow>
}

type tableRow = {
  name: string;
  description: string;
  default: string;
  nav: boolean;
}

interface BaseDisplayData {
  id: string;
  header: string;
  description?: string;
  type: 'gallery' | 'components' | 'nested' | 'table' | 'tableComp';
  table?: PropsTable;
}

// * BUTTON TYPES
export interface ButtonDisplayData extends BaseDisplayData {
  examples: ButtonExample[] | null;
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
  rounded?: boolean;
  text?: string;
  isLoading?: boolean;
  isError?: boolean;
  style?: string;
   type?: 'button' | 'submit' | 'reset';
   'aria-label'?: string;
  'on:click'?: () => void;
  animated?: boolean;
}

interface ButtonIconProps extends ButtonProps {
  icon: string;
}

// * INPUT TYPES
export interface InputDisplayData extends BaseDisplayData {
  examples: InputExample[] | null;
}

interface InputExample {
  component: SvelteComponentTyped;
  props: InputProps | PrefixProps;
  code?: string[] | string;
}

interface CommonInputProps {
  id?: string;
  variant?: 'default' | 'line' | 'outline';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  background?: string;
  color?: string;
  placeholder?: string;
  style?: string;
  label?: boolean;
  labelText?: string;
  labelColor?: string;
  'aria-label'?: string;
  disabled?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  value?: string | number;
}

interface InputProps extends CommonInputProps {
  type?: 'text' | 'password';
  clearable?: boolean;
  labelIn?: boolean;
}

interface PrefixProps extends InputProps {
  prefix: string;
}

interface NumberProps extends CommonInputProps {
  min?: number;
  max?: number;
  step?: number;
}

interface DateTimeProps extends CommonInputProps {
  min?: number;
  max?: number;
  format?: string;
}

interface InputColorProps {
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  value?: string;
  style?: string;
  label?: boolean;
  labelColor?: string;
  disabled?: boolean;
}

// * CARD TYPES
interface CardDisplayData extends BaseDisplayData {
  examples: CardExample[] | null;
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
  hover?: boolean;
  nested?: CardExample[];
}

interface CardImageProps extends CardProps {
  image: string;
}

// * Popover TYPES
export interface PopoverDisplayData extends BaseDisplayData {
  examples: PopoverExample[] | null;
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
  text?: string;
}

// * Radio TYPES
export interface RadioDisplayData extends BaseDisplayData {
  examples: RadioExample[] | null;
}

interface RadioExample {
  component: SvelteComponentTyped;
  props: RadioProps;
  code?: string[];
}

type OptionType = string | { label: string;[key: string]: any };

interface RadioProps {
  options: OptionType[];
  selected?: OptionType[];
  labelColor?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  groupId: string;
  use?: 'one' | 'many';
  checkbox?: boolean;
}

// * Dropdown TYPES
export interface DropdownDisplayData extends BaseDisplayData {
  examples: DropdownExample[] | null;
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
  options: DropdownOption[];
  variant?: "default" | "line" | "outline";
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
}

interface DropdownOption {
  value: string;
  label: string;
}

// * Loader TYPES
export interface LoaderDisplayData extends BaseDisplayData {
  examples: LoaderExample[] | null;
}

interface LoaderExample {
  component: SvelteComponentTyped;
  props: LoaderProps;
  code?: string[];
}

interface LoaderProps {
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  color?: string;
  style?: string;
  speed?: 'slow' | 'medium' | 'fast';
}

interface BounceLoaderProps extends LoaderProps {
  icon?: string;
}

// * Checkbox TYPES
export interface CheckboxDisplayData extends BaseDisplayData {
  examples: CheckboxExample[] | null;
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
export interface ParallaxDisplayData extends BaseDisplayData {
  examples: ParallaxExample[] | null;
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
  position?: [number, number];
}

interface VideoParallaxProps {
  video: string;
  height?: string;
  width?: string;
  speed?: number;
  position?: [number, number];
}

// * Avatar TYPES
export interface AvatarDisplayData extends BaseDisplayData {
  examples: AvatarExample[] | null;
}

interface AvatarExample {
  component: SvelteComponentTyped;
  props: AvatarProps;
  code?: string[];
}

interface AvatarProps {
  image: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  alt: string;
  style?: string;
  filter?: "none" | "gray" | "sepia" | "invert";
  shape?: "circ" | "square" | "rounded";
  loadObserver?: boolean;
}

// * Accordion TYPES
export interface AccordionDisplayData extends BaseDisplayData {
  examples: AccordionExample[] | null;
}

interface AccordionExample {
  component: SvelteComponentTyped;
  props: AccordionProps;
  code?: string[];
}

interface AccordionProps {
  data: AccordionData[];
  collapse?: boolean;
  animated?: boolean;
  headerStyle?: string;
  contentStyle?: string;
  tabBg?: string;
  tabColor?: string;
  background?: string;
  color?: string;
  disabled?: boolean;
  divider?: boolean;
}

export interface AccordionData {
  title: string;
  details?: string;
  content: string;
}

// * Toggle TYPES
export interface ToggleDisplayData extends BaseDisplayData {
  examples: ToggleExample[] | null;
}

interface ToggleExample {
  component: SvelteComponentTyped;
  props: ToggleProps;
  code?: string[];
}

interface ToggleProps {
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  disabled?: boolean;
  isChecked?: boolean;
  color?: string;
  id?: string;
  style?: string;
}

// * ImageFilter TYPES
export interface ImageFilterDisplayData extends BaseDisplayData {
  examples: ImageFilterExample[] | null;
}

interface ImageFilterExample {
  component: SvelteComponentTyped;
  props: ImageFilterProps;
  code?: string[];
}

interface ImageFilterProps {
  alt: string;
  image: string;
  filter?: "none" | "gray" | "sepia" | "invert" | "blur" | "brightness" | "contrast" | "hue-rotate" | "saturate" | "opacity" | "drop-shadow" | "brightness-contrast" | "hue-rotate-saturate";
  shape?: "circ" | "square" | "rounded";
  style?: string;
  width?: string;
  height?: string;
  aspectRatio?: string;
  title?: string;
}

// * Textarea TYPES
export interface TextareaDisplayData extends BaseDisplayData {
  examples: TextareaExample[] | null;
}

interface TextareaExample {
  component: SvelteComponentTyped;
  props: TextareaProps;
  code?: string[];
}

interface TextareaProps {
  id?: string;
  variant?: "default" | "line" | "outline";
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  background?: string;
  color?: string;
  placeholder?: string;
  value?: string;
  style?: string;
  label?: boolean;
  labelIn?: boolean;
  labelColor?: string;
  disabled?: boolean;
  clearable?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  autoFocus?: boolean;
}

// * Modal TYPES
export interface ModalDisplayData extends BaseDisplayData {
  examples: ModalExample[] | null;
}

interface ModalExample {
  component: SvelteComponentTyped;
  props: ModalProps;
  code?: string[];
}

interface ModalProps {
  open?: boolean;
  size?: "small" | "medium" | "large" | "auto";
  position?:
  | "center"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";
  background?: string;
  color?: string;
  title?: string;
  outsideClick?: boolean;
  animated?: boolean;
  overlayColor?: string;
  btnText?: string;
  modalText?: string;
  btnColor?: string;
}

// * Table TYPES
export interface TableDisplayData extends BaseDisplayData {
  columns?: string[] = [];
  rows?: any[] = [];
}

interface TableExample {
  component: SvelteComponentTyped;
  props: TableProps;
  code?: string[];
}

interface TableProps {
  columns?: TableColumn[];
  rows: TableRow[];
  nested?: TableNested[];
  align?: "left" | "center" | "right";
  background?: string;
  color?: string;
  style?: string;
  hover?: boolean;
  highlight?: boolean;
}

// * Spacer TYPES
export interface SpacerDisplayData extends BaseDisplayData {
  examples: SpacerExample[] | null;
}

interface SpacerExample {
  component: SvelteComponentTyped;
  props: Record<string, any>;
  code?: string | string[];
}

export {};
