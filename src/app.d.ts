type ComponentPropertyString = `${string}_${string}`;

// * BUTTON TYPES
interface ButtonDisplayData {
  id: string;
  header: string;
  description: string;
  type: 'gallery' | 'components' | 'nested';
  examples: ButtonExample[];
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
  type: 'gallery' | 'components' | 'nested';
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
  type: 'gallery' | 'components' | 'nested';
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
  slot?: unknown
  nested?: CardExample[];
}

interface CardImageProps extends CardProps {
  image: string;
}

// interface PropsTable {
//   [key: string]: string;
// }
