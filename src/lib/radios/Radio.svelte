<script lang="ts">
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

    // Props
    /**
     * @component Radio
     *
     * @prop options!
     * @description Options for the radio group (string or object with label).
     * @type {(string | { label: string; [key: string]: any })[]}
     * @default []
     *
     * @prop selected
     * @description Currently selected option.
     * @type {string | { label: string; [key: string]: any } | null}
     * @default null
     *
     * @prop labelColor
     * @description Text color for labels.
     * @type {string}
     * @default "#000"
     *
     * @prop color
     * @description Border color for the indicator.
     * @type {string}
     * @default "#000"
     *
     * @prop size
     * @description Indicator size preset.
     * @type {"small" | "medium" | "large"}
     * @default "medium"
     *
     * @prop disabled
     * @description Disable the radio group.
     * @type {boolean}
     * @default false
     *
     * @prop groupId
     * @description Name/id for grouping the radios.
     * @type {string}
     * @default "radio-group"
     *
     * @prop ariaLabel
     * @description Accessible label for the radiogroup container.
     * @type {string}
     * @default "Radio group"
     *
     * @event updateSelected
     * @description Fired when selection changes; detail contains the new value.
     */

    export let labelColor: string = "#000";
    export let color: string = "#000";
    export let size: "small" | "medium" | "large" = "medium";
    export let disabled: boolean = false;
    export let groupId: string = "radio-group";
    export let options: OptionType[] = [];
    export let selected: OptionType | null = null;
    export let ariaLabel: string = "Radio group";

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

<div class={classString} role="radiogroup" aria-label={ariaLabel} {...$$restProps}>
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
