export declare const copyToClipboard: (text: string | undefined) => void;
export type ComponentPropertyString = `${string}_${string}`;
export declare const splitSearchResult: (result: ComponentPropertyString) => {
    id: string;
    component: string;
};
