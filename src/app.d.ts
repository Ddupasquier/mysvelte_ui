type ComponentPropertyString = `${string}_${string}`;

interface ButtonProps {
  background?: string;
  color?: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  disabled?: boolean;
  text?: string;
  isLoading?: boolean;
}