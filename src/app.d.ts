type ComponentPropertyString = `${string}_${string}`;

type PropsTable = {
  [key: string]: string;
};

// * BUTTON TYPES
interface ButtonDisplayData {
  id: string;
  header: string;
  description: string;
  type: 'gallery' | 'components' | 'nested' | 'table';
  examples: ButtonExample[];
  table?: PropsTable;
}

interface ButtonExample {
  component?: SvelteComponentTyped;
  props?: ButtonProps;
  code?: string;
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
  className?: string;
}

// * INPUT TYPES
interface InputDisplayData {
  id: string;
  header: string;
  description: string;
  type: 'gallery' | 'components' | 'nested' | 'table';
  examples: InputExample[];
  table?: PropsTable;
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
  className?: string;
}

interface PrefixProps extends InputProps {
  prefix: string;
}

// * CARD TYPES
interface CardDisplayData {
  id: string;
  header: string;
  description: string;
  type: 'gallery' | 'components' | 'nested' | 'table';
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
interface PopoverDisplayData {
  id: string;
  header: string;
  description: string;
  type: 'gallery' | 'components' | 'nested' | 'table';
  examples: PopoverExample[];
  table?: PropsTable;
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
interface RadioDisplayData {
  id: string;
  header: string;
  description: string;
  type: 'gallery' | 'components' | 'nested' | 'table';
  examples: RadioExample[];
  table?: PropsTable;
}

interface RadioExample {
  component: SvelteComponentTyped;
  props: RadioProps;
  code?: string[];
}

interface RadioProps {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  style?: string;
}

// * Dropdown TYPES
interface DropdownDisplayData {
  id: string;
  header: string;
  description: string;
  type: 'gallery' | 'components' | 'nested' | 'table';
  examples: DropdownExample[];
  table?: PropsTable;
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
interface LoaderDisplayData {
  id: string;
  header: string;
  description: string;
  type: 'gallery' | 'components' | 'nested' | 'table';
  examples: LoaderExample[];
  table?: PropsTable;
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
}


// * Checkbox TYPES
interface CheckboxDisplayData {
  id: string;
  header: string;
  description: string;
  type: 'gallery' | 'components' | 'nested' | 'table';
  examples: CheckboxExample[];
  table?: PropsTable;
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
  disabled?: boolean;
  checked?: boolean;
  style?: string;
}


