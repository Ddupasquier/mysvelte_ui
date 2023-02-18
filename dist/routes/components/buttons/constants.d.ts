import Button from '../../../buttons/Button.svelte';
interface ButtonProps {
    background?: string;
    color?: string;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    disabled?: boolean;
    text?: string;
    isLoading?: boolean;
}
export declare const buttons: {
    id: string;
    header: string;
    description: string;
    examples: ({
        component: typeof Button;
        props: ButtonProps;
        code: string;
    } | {
        component: typeof Button;
        props: ButtonProps;
        code?: undefined;
    })[];
}[];
export {};
