import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        disabled?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            disabled: boolean;
        };
    };
};
export type FireButtonProps = typeof __propDef.props;
export type FireButtonEvents = typeof __propDef.events;
export type FireButtonSlots = typeof __propDef.slots;
export default class FireButton extends SvelteComponentTyped<FireButtonProps, FireButtonEvents, FireButtonSlots> {
}
export {};
