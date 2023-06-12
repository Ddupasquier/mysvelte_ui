<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";

    // Props
    /**
     * @component Input.Date, Input.DateTime, Input.Time
     *
     * @prop variant
     * @description Choose the appearance of the input field. Pick from "default", "line", or "outline" to fit your design needs.
     * @type {"default" | "line" | "outline"}
     * @default "default"
     *
     * @prop size
     * @description Select the size of the input field. It can be as small as "xsmall" or as large as "xlarge", with "small", "medium", and "large" options available.
     * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
     * @default "medium"
     *
     * @prop background
     * @description Define the background color of the input field, suiting your UI theme.
     * @type {string}
     * @default "white"
     *
     * @prop color
     * @description Define the text color inside the input field.
     * @type {string}
     * @default "#000"
     *
     * @prop value
     * @description Specify the default value of the input field. For date and time components, this should be in a recognized date or time format.
     * @type {string}
     * @default ""
     *
     * @prop style
     * @description Apply additional inline CSS styles to the input field.
     * @type {string}
     * @default ""
     *
     * @prop label
     * @description Decide whether or not to display a label along with the input field. If set to true, you must also provide an associated 'id' for accessibility.
     * @type {boolean}
     * @default false
     *
     * @prop labelColor
     * @description Specify the color of the label text, if a label is used.
     * @type {string}
     * @default "#000"
     *
     * @prop disabled
     * @description Enable or disable the input field. When set to true, the field becomes read-only and cannot be interacted with.
     * @type {boolean}
     * @default false
     *
     * @prop isError
     * @description Set this to true to show the input field in an error state, such as when validation fails.
     * @type {boolean}
     * @default false
     *
     * @prop isLoading
     * @description Set this to true to show a loading state in the input field, useful when waiting for an action to complete.
     * @type {boolean}
     * @default false
     *
     * @prop min
     * @description Specify the minimum value that can be inputted for numeric inputs. For date and time components, this should be in a recognized date or time format.
     * @type {string}
     * @default ""
     *
     * @prop max
     * @description Specify the maximum value that can be inputted for numeric inputs. For date and time components, this should be in a recognized date or time format.
     * @type {string}
     * @default ""
     */

    export let variant: "default" | "line" | "outline" = "default";
    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
        "medium";
    export let background: string = "white";
    export let color: string = "#000";
    export let value: string = "";
    export let style: string = "";
    export let label: boolean = false;
    export let labelColor: string = "#000";
    export let disabled: boolean = false;
    export let isError: boolean = false;
    export let isLoading: boolean = false;
    export let min: string = "";
    export let max: string = "";

    // Event dispatcher
    const dispatch = createEventDispatcher();

    // Variables
    let containerClassList = ["input"];
    let containerClassString = "";
    let readOnly: boolean = false;

    // Lifecycle Hooks
    onMount(() => {
        containerClassList.push(size);
        containerClassList.push(variant);
        if (isLoading) {
            containerClassList.push("loading");
        } else if (isError) {
            containerClassList.push("error");
        }
        containerClassString = containerClassList.join(" ");
    });

    // Reactive Statements
    $: {
        containerClassList = ["input", size, variant];
        if (isLoading) {
            containerClassList.push("loading");
        } else if (isError) {
            containerClassList.push("error");
        }
        containerClassString = containerClassList.join(" ");

        readOnly = disabled || isLoading || isError;
    }

    $: inputStyle = `
  background: ${disabled || isError || isLoading ? "#ccc" : background};
  --color: ${color};
  color: ${color};
  ${style}
`;

    // Handle input event
    const handleInput = (e: Event) => {
        if (e.target instanceof HTMLInputElement) {
            value = e.target.value;
            dispatch("input", e);
        }
    };
</script>

<div class={containerClassString} role="form">
    {#if label}
        <label class="label" for={$$restProps.id} style="color: {labelColor}"
            >{$$restProps.id}</label
        >
    {/if}

    <input
        {color}
        {value}
        {disabled}
        aria-disabled={disabled}
        aria-invalid={isError}
        aria-readonly={readOnly}
        readonly={readOnly}
        {...$$restProps}
        id={label ? $$restProps.id : undefined}
        type="date"
        style={inputStyle}
        on:input={handleInput}
        on:focus
        on:blur
        on:change
        on:click
        on:keydown
        on:keyup
        {min}
        {max}
    />
</div>

<style lang="scss">
    .input {
        position: relative;
        display: inline-flex;
        flex-direction: column;
        padding: 0;
    }

    input {
        border-radius: 50rem;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        outline: none;
        border: none;
        background: inherit;
        color: inherit;
        transition: all 0.1s ease-in-out;
        &:focus {
            outline: 3px solid currentColor;
        }
    }

    .line input {
        border-radius: 0;
        border-bottom: 3px solid rgba(131, 131, 131, 0.5);
        transition: border-color 0.3s ease-in-out;

        &:focus {
            outline: none;
            border-bottom-color: currentColor;
        }
    }

    .outline input {
        border-radius: 50rem;
        border: 3px solid rgba(131, 131, 131, 0.5);
        transition: all 0.1s ease-in-out;
        &:focus {
            border: 3px solid currentColor;
            background: rgba(255, 255, 255, 0.5);
        }
    }

    // Sizes
    .xsmall input {
        padding: 0.125rem 0.25rem;
    }

    .small input {
        padding: 0.25rem 0.5rem;
    }

    .medium input {
        padding: 0.5rem 1rem;
    }

    .large input {
        padding: 0.75rem 1.5rem;
    }

    .xlarge input {
        padding: 1rem 2rem;
    }

    // Loading and error styles
    .loading input,
    .error input {
        color: #fff;
    }

    .loading input {
        outline: 3px solid var(--color);
        outline-offset: -3px;
        animation: double-pulse-gray 1.5s infinite ease-in-out;
    }

    .error input {
        animation: double-pulse-red 1.5s infinite ease-in-out;
    }

    @keyframes double-pulse-gray {
        0% {
            box-shadow: 0 0 5rem 1rem rgba(0, 0, 0, 0) inset;
        }
        100% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2) inset;
        }
    }

    @keyframes double-pulse-red {
        0% {
            box-shadow: 0 0 5rem 1rem rgba(0, 0, 0, 0) inset;
        }
        100% {
            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.5) inset;
        }
    }

    .label {
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 0.25rem 0.5rem;
        color: red;
    }
</style>
