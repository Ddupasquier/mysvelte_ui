import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        isDarkMode: boolean;
        code: string | string[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SyntaxHighlightProps = typeof __propDef.props;
export type SyntaxHighlightEvents = typeof __propDef.events;
export type SyntaxHighlightSlots = typeof __propDef.slots;
export default class SyntaxHighlight extends SvelteComponentTyped<SyntaxHighlightProps, SyntaxHighlightEvents, SyntaxHighlightSlots> {
}
export {};
