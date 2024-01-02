<script lang="ts">
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

    // Props
    /**
     * @component Radio
     *
     * A component designed to display a group of radio buttons, allowing the user to select a single option from the group.
     *
     * @prop options!
     * @description An array of options for the radio group. Each option can be a string or an object with a label property and any additional properties you might need.
     * @type {(string | { label: string; [key: string]: any })[]}
     * @default []
     *
     * @prop selected
     * @description The currently selected option. It can be either the string value of the selected option or an object representing the selected option from the options array.
     * @type {string | { label: string; [key: string]: any } | null}
     * @default null
     *
     * @prop labelColor
     * @description The color of the text label for each radio button.
     * @type {string}
     * @default "#000"
     *
     * @prop color
     * @description The color for the border of the radio indicator.
     * @type {string}
     * @default "#000"
     *
     * @prop size
     * @description Determines the size of the radio indicator. Can take on values "small", "medium", or "large".
     * @type {"small" | "medium" | "large"}
     * @default "medium"
     *
     * @prop disabled
     * @description If set to true, all the radio buttons will be disabled.
     * @type {boolean}
     * @default false
     *
     * @prop groupId
     * @description A unique identifier for the group of radio buttons. This is used for the name attribute of each radio button to link them as a group.
     * @type {string}
     * @default "radio-group"
     *
     * Events:
     * @event updateSelected
     * This event is dispatched whenever the selected option changes.
     * It sends out the value of the currently selected option, which can be a string or an object, depending on the type of options provided.
     */

    export let labelColor: string = "#000";
    export let color: string = "#000";
    export let size: "small" | "medium" | "large" = "medium";
    export let disabled: boolean = false;
    export let groupId: string = "radio-group";
    export let options: OptionType[] = [];
    export let selected: OptionType | null = null;

    type OptionType = string | { label: string; [key: string]: any };
    type SelectedType = OptionType[];

    // Local state
    let classList = ["radio-container"];
    let classString = "";

    // Reactive statement to determine if an option is checked
    $: checked = (option: OptionType) => option === selected;

    // Size values
    const sizeValues: Record<typeof size, string> = {
        small: ".65",
        medium: ".9",
        large: "1.15",
    };

    onMount(() => {
        classString = classList.join(" ");
    });

    $: classString = classList.join(" ");

    // Event dispatcher
    const dispatch = createEventDispatcher();

    // Event handlers
    const handleInput = (option: OptionType) => {
        dispatch("updateSelected", option);
    };
</script>

<div class={classString} role="radiogroup" {...$$restProps}>
    {#each options as option (option)}
        <div class="radio-option">
            <label
                class="label"
                style="color: {labelColor}"
                id={`label-${option}`}
            >
                <input
                    type="radio"
                    name={groupId}
                    bind:group={selected}
                    value={option}
                    aria-labelledby={`label-${option}`}
                    {disabled}
                    on:change={() =>
                        handleInput(
                            typeof option === "string" ? option : option.label,
                        )}
                />
                <span
                    class="radio-mark"
                    style="border-color: {color}; transform: scale({sizeValues[
                        size
                    ]})"
                />
                {#if typeof option === "object"}
                    {option.label}
                {:else}
                    {option}
                {/if}
            </label>
        </div>
    {/each}
</div>

<style lang="scss">
    .radio-container {
        display: flex;
        flex-direction: column;
        width: fit-content;
    }

    .radio-option {
        margin-bottom: 0.5rem;
    }

    .label {
        position: relative;
        display: inline-flex;
        align-items: center;
        margin-right: 1rem;
        font-size: 1rem;
        cursor: pointer;
    }

    .label input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .label input:disabled {
        visibility: hidden;
    }

    .radio-mark {
        position: relative;
        display: inline-block;
        width: 1.25em;
        height: 1.25em;
        margin-right: 0.5em;
        border: 2px solid #ccc;
        border-radius: 50%;
        background-color: transparent;
    }

    .radio-mark::before {
        content: "";
        position: absolute;
        display: none;
        left: 0.375em;
        top: 0.375em;
        width: 0.5em;
        height: 0.5em;
        border-radius: 50%;
        background-color: rgb(129, 129, 129);
    }

    .label input:checked ~ .radio-mark::before {
        display: block;
    }

    .label:hover input:not(:disabled) ~ .radio-mark {
        border-color: #000;
    }

    .label:hover input:not(:disabled) ~ .radio-mark::before {
        border-color: inherit;
        filter: brightness(0.5);
    }

    .label input:disabled ~ .radio-mark {
        opacity: 0.5;
    }
</style>
