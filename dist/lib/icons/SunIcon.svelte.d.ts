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
export type SunIconProps = typeof __propDef.props;
export type SunIconEvents = typeof __propDef.events;
export type SunIconSlots = typeof __propDef.slots;
export default class SunIcon extends SvelteComponentTyped<SunIconProps, SunIconEvents, SunIconSlots> {
}
export {};
