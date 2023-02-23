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
}

interface InputProps {
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
}

interface PropsTable {
  [key: string]: string;
}