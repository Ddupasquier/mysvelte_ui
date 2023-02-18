import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id?: string | undefined;
        header?: string | undefined;
        examples?: any[] | undefined;
        description?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DisplayCardProps = typeof __propDef.props;
export type DisplayCardEvents = typeof __propDef.events;
export type DisplayCardSlots = typeof __propDef.slots;
export default class DisplayCard extends SvelteComponentTyped<DisplayCardProps, DisplayCardEvents, DisplayCardSlots> {
}
export {};
