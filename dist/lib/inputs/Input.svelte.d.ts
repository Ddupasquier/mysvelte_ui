import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        disabled?: boolean | undefined;
        background?: string | undefined;
        color?: string | undefined;
        size?: string | undefined;
        placeholder?: string | undefined;
        isLoading?: boolean | undefined;
        isError?: boolean | undefined;
        style?: string | undefined;
        value?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
}
export {};
