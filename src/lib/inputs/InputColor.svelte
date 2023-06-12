<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";

    // Props
    /**
     * @component Input.Color
     * 
     * @prop size
     * @description Choose the size of the color input field. You have options from "xsmall" up to "xlarge", with "small", "medium", and "large" in between.
     * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
     * @default "medium"
     *
     * @prop value
     * @description Set the default color value for the color input field. This should be in a recognized color format, such as hex code.
     * @type {string}
     * @default "#000000"
     *
     * @prop style
     * @description Apply additional inline CSS styles to the color input field.
     * @type {string}
     * @default ""
     *
     * @prop label
     * @description Decide whether to display a label with the color input field. If set to true, you must also provide an associated 'id' for accessibility.
     * @type {boolean}
     * @default false
     *
     * @prop labelColor
     * @description Specify the color of the label text, if a label is used.
     * @type {string}
     * @default "#000"
     *
     * @prop disabled
     * @description Enable or disable the color input field. When set to true, the field becomes read-only and users can't interact with it.
     * @type {boolean}
     * @default false
     */

    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
        "medium";
    export let value: string = "#000000";
    export let style: string = "";
    export let label: boolean = false;
    export let labelColor: string = "#000";
    export let disabled: boolean = false;

    // Event dispatcher
    const dispatch = createEventDispatcher();

    // Variables
    let inputClassList = ["input", size];
    let inputClassString = "";

    // Lifecycle Hooks
    onMount(() => {
        inputClassString = inputClassList.join(" ");
    });

    // Reactive Statements
    $: {
        inputClassList = ["input", size];
        inputClassString = inputClassList.join(" ");
    }
    $: inputStyle = `
        filter: ${disabled ? "grayscale(100%)" : "none"};
        ${style}
    `;
</script>

<div class="container">
    {#if label}
        <label class="label" for={$$restProps.id} style="color: {labelColor}">
            {$$restProps.id}
        </label>
    {/if}

    <input
        {value}
        {disabled}
        readonly={disabled}
        {...$$restProps}
        id={label ? $$restProps.id : undefined}
        type="color"
        style={inputStyle}
        class={inputClassString}
        on:input={(e) => dispatch("input", e)}
        on:focus
        on:blur
        on:change
        on:click
        on:keydown
        on:keyup
    />
</div>

<style lang="scss">
    .container {
        position: relative;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0;
        background: transparent;
    }

    input[type="color"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
        border: none;
        cursor: pointer;

        // Sizes
        &.xsmall {
            height: 1rem;
            width: 1rem;
        }

        &.small {
            height: 1.25rem;
            width: 1.25rem;
        }

        &.medium {
            height: 1.5rem;
            width: 1.5rem;
        }

        &.large {
            height: 2rem;
            width: 2rem;
        }

        &.xlarge {
            height: 2.5rem;
            width: 2.5rem;
        }

        // Fix for white box
        &::-webkit-color-swatch-wrapper {
            padding: 0;
            border: none;
            outline: none;
        }

        &::-webkit-color-swatch {
            border: none;
            border-radius: 25%;
            outline: none;
        }

        &::-moz-color-swatch {
            border: none;
            border-radius: 25%;
            outline: none;
        }

        &::-moz-color-swatch-wrapper {
            padding: 0;
            border: none;
            outline: none;
        }

        &::-moz-focus-inner {
            border: 0;
            padding: 0;
            outline: none;
        }
    }

    .label {
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 0.25rem 0.5rem;
    }
</style>
