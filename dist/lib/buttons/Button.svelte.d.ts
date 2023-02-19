import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        disabled?: boolean | undefined;
        background?: string | undefined;
        color?: string | undefined;
        size?: "medium" | "xsmall" | "small" | "large" | "xlarge" | undefined;
        text?: string | undefined;
        isLoading?: boolean | undefined;
        isError?: boolean | undefined;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
