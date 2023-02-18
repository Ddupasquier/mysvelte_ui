import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        color?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MoonIconProps = typeof __propDef.props;
export type MoonIconEvents = typeof __propDef.events;
export type MoonIconSlots = typeof __propDef.slots;
export default class MoonIcon extends SvelteComponentTyped<MoonIconProps, MoonIconEvents, MoonIconSlots> {
}
export {};
