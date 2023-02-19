import Input from '../../../inputs/Input.svelte';
export declare const inputs: ({
    id: string;
    header: string;
    description: string;
    examples: {
        component: typeof Input;
        props: {
            value: string;
            size: string;
            placeholder: string;
            style: string;
        };
        code: string[];
    }[];
} | {
    id: string;
    header: string;
    description: string;
    examples: ({
        component: typeof Input;
        props: {
            background?: undefined;
        };
        code: string;
    } | {
        component: typeof Input;
        props: {
            background: string;
        };
        code: string;
    })[];
})[];
