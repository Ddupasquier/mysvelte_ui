import Button from '../../../buttons/Button.svelte';
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
