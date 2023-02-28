type ComponentPropertyString = `${string}_${string}`;

interface ButtonProps {
  disabled: boolean;
  size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  background: string;
  color: string;
  text: string;
  isLoading: boolean;
  isError: boolean;
  style: string;
  'on:click'?: () => void;
  className?: string;
}

interface InputProps {
  id: string;
  id?: never | string;
  variant: 'default' | 'line' | 'outline';
  size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  type: 'text' | 'email' | 'password' | 'number';
  background: string;
  color: string;
  placeholder: string;
  value: string;
  style: string;
  label: boolean;
  labelIn: boolean;
  disabled: boolean;
  clearable: boolean;
  isError: boolean;
  isLoading: boolean;
  className?: string;
}

interface PrefixProps extends InputProps {
  prefix: string;
}

interface CardsData {
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
  slot?: any
  nested?: CardExample[];
}

interface CardImageProps extends CardProps {
  image: string;
}

// interface PropsTable {
//   [key: string]: string;
// }
