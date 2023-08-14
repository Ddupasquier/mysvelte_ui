<script lang="ts">
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

    // Props
    /**
     * @component Radio
     *
     * A flexible component to display a group of radio buttons or checkboxes.
     *
     * @prop options!
     * @description An array of string values to be used as the labels for each radio button or checkbox.
     * @type {string[]}
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
     * @type {string[]}
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
     * @description Determines if the visual representation of the selection is a checkbox (true) or radio (false) when in "many" mode. This property only affects visual styling and does not change functionality.
     * @type {boolean}
     * @default false
     *
     * Events:
     * @event updateSelected
     * This event is dispatched whenever the selected options change.
     * It sends out an array of currently selected options.
     */

    export let options: string[] = [];
    export let labelColor: string = "#000";
    export let color: string = "#000";
    export let size: "small" | "medium" | "large" = "medium";
    export let disabled: boolean = false;
    export let selected: string[] = [];
    export let groupId: string = "radio-group";
    export let use: "one" | "many" = "one";
    export let checkbox: boolean = false;

    // Local state
    let classList = ["radio-container"];
    let classString = "";

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
    const handleInput = (event: Event, option: string) => {
        const target = event.target as HTMLInputElement;
        if (target.checked) {
            if (use === "one") {
                selected = [option];
            } else {
                selected.push(option);
            }
        } else {
            const index = selected.indexOf(option);
            if (index > -1) {
                selected.splice(index, 1);
            }
        }
        selected = [...selected];
        dispatch("updateSelected", selected);
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
                    type={use === "one" ? "radio" : "checkbox"}
                    role={use === "one" ? "radio" : "checkbox"}
                    name={groupId}
                    aria-checked={selected.includes(option)}
                    aria-labelledby={`label-${option}`}
                    {disabled}
                    checked={selected.includes(option)}
                    on:change={(e) => handleInput(e, option)}
                />
                <span
                    class={checkbox && use === "many"
                        ? "checkmark"
                        : "radio-mark"}
                    style="border-color: {color}; transform: scale({sizeValues[
                        size
                    ]})"
                />
                {option}
            </label>
        </div>
    {/each}
</div>

<style>
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

    .checkmark {
        position: relative;
        display: inline-block;
        width: 1.25em;
        height: 1.25em;
        margin-right: 0.5em;
        border: 2px solid #ccc;
        border-radius: 3px;
        background-color: transparent;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
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

    .checkmark::before {
        content: "";
        position: absolute;
        display: none;
        left: 0.25em;
        width: 1em;
        height: 0.5em;
        border: solid rgb(129, 129, 129);
        border-width: 0 0.3em 0.2em 0;
        transform: rotate(130deg) scaleY(-1);
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

    .label input:checked ~ .checkmark::before {
        display: block;
    }

    .label:hover input:not(:disabled) ~ .checkmark {
        border-color: #000;
    }

    .label:hover input:not(:disabled) ~ .checkmark::before {
        border-color: inherit;
        filter: brightness(0.5);
    }

    .label input:disabled ~ .checkmark {
        opacity: 0.5;
    }
</style>
