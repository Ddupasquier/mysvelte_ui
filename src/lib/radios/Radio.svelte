<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import RadioGroupSingle from "./RadioGroupSingle.svelte";
    import RadioGroupMultiple from "./RadioGroupMultiple.svelte";

    /**
     * @component Radio
     *
     * A flexible component to display a group of radio buttons or checkboxes.
     *
     * @prop options!
     * @description An array of options where each option can be a string or an object with a `label` property.
     *              The string value or the `label` property of the object is used as the display text for each radio button or checkbox.
     *              Objects can also contain any other properties needed for additional logic or rendering.
     * @type {OptionType[]}
     * @default []
     *
     * @prop labelColor
     * @description The color of the text label for each radio button or checkbox.
     * @type {string}
     * @default "#000"
     *
     * @prop color
     * @description The color for the border of the radio or checkbox indicator.
     * @type {string}
     * @default "#000"
     *
     * @prop size
     * @description Determines the size of the radio or checkbox indicator. Can take on values "small", "medium", or "large".
     * @type {"small" | "medium" | "large"}
     * @default "medium"
     *
     * @prop disabled
     * @description If set to true, all the radio buttons or checkboxes will be disabled.
     * @type {boolean}
     * @default false
     *
     * @prop selected
     * @description An array of currently selected options. For "one" use, this will contain zero or one option. For "many" use, this can contain multiple options.
     *              If options are objects, each selected option will be the object itself.
     * @type {OptionType[]}
     * @default []
     *
     * @prop groupId
     * @description A unique identifier for the group of radio buttons or checkboxes.
     * @type {string}
     * @default "radio-group"
     *
     * @prop use
     * @description Determines if the component should behave as a group of radio buttons ("one") or checkboxes ("many").
     * @type {"one" | "many"}
     * @default "one"
     *
     * @prop checkbox
     * @description Determines if the visual representation of the selection is a checkbox (true) or radio (false) when in "many" mode.
     *              This property only affects visual styling and does not change functionality.
     * @type {boolean}
     * @default false
     *
     * Events:
     * @event updateSelected
     * This event is dispatched whenever the selected options change.
     * It sends out an array of currently selected options.
     */

    export let labelColor: string = "#000";
    export let color: string = "#000";
    export let size: "small" | "medium" | "large" = "medium";
    export let disabled: boolean = false;
    export let groupId: string = "radio-group";
    export let use: "one" | "many" = "one";
    export let checkbox: boolean = false;
    export let options: OptionType[] = [];
    export let selected: SelectedType = [];

    type OptionType = string | { label: string; [key: string]: any };
    type SelectedType = OptionType[];

    let classList = ["radio-container"];
    let classString = "";

    onMount(() => {
        classString = classList.join(" ");
    });

    $: classString = classList.join(" ");

    const dispatch = createEventDispatcher();

    const handleSelectionChange = (event: {
        detail: {
            selected: (string | { [key: string]: any; label: string })[];
        };
    }) => {
        selected = event.detail.selected;
        console.log("Radio component selection changed:", selected);
        dispatch("updateSelected", selected);
    };
</script>

<div class={classString} role="radiogroup" aria-labelledby={`label-${groupId}`}>
    {#if use === "one"}
        <RadioGroupSingle
            {options}
            selectedOption={selected.length > 0 ? selected[0] : null}
            {labelColor}
            {color}
            {size}
            {disabled}
            {groupId}
            on:selectionChange={handleSelectionChange}
        />
    {:else}
        <RadioGroupMultiple
            {options}
            selectedOptions={selected}
            {labelColor}
            {color}
            {size}
            {disabled}
            {groupId}
            {checkbox}
            on:selectionChange={handleSelectionChange}
        />
    {/if}
</div>

<style lang="scss">
    .radio-container {
        display: flex;
        flex-direction: column;
        width: fit-content;
    }
</style>
