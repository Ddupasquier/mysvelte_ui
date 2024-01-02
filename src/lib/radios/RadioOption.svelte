<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let option: OptionType;
    export let selected: boolean;
    export let disabled: boolean = false;
    export let type: "radio" | "checkbox";
    export let labelColor: string = "#000";
    export let color: string = "#000";
    export let size: "small" | "medium" | "large";
    export let groupId: string;

    type OptionType = string | { label: string; [key: string]: any };

    let classList = ["radio-option"];
    let classString = classList.join(" ");

    $: sizeStyle = `transform: scale(${sizeValues[size]});`;

    // Size values
    const sizeValues: Record<typeof size, string> = {
        small: "0.7",
        medium: "1",
        large: "1.15",
    };

    const dispatch = createEventDispatcher();

    const handleSelectionChange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        dispatch("change", { option, selected: input.checked });
    };
</script>

<div class="radio-option">
    <label class="label" style="color: {labelColor}" id={`label-${option}`}>
        <input
            {type}
            role={type}
            name={groupId}
            aria-checked={selected}
            aria-labelledby={`label-${option}`}
            {disabled}
            checked={selected}
            on:change={handleSelectionChange}
        />
        <span
            class={type === "checkbox" ? "checkmark" : "radio-mark"}
            style="border-color: {color}; {sizeStyle}"
        >
        </span>
        {typeof option === "string" ? option : option.label}
    </label>
</div>

<style lang="scss">
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
