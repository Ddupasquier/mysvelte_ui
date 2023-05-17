<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";

    // Props
    export let variant: "default" | "line" | "outline" = "default";
    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
        "medium";
    export let background: string = "white";
    export let color: string = "#000";
    export let value: number = 0;
    export let style: string = "";
    export let label: boolean = false;
    export let labelColor: string = "#000";
    export let disabled: boolean = false;
    export let isError: boolean = false;
    export let isLoading: boolean = false;
    export let min: number = -10000;
    export let max: number = 10000;
    export let step: number | "any" = 1;

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

        if (value < min) {
            value = min;
        } else if (value > max) {
            value = max;
        }
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
            let inputValue = parseInt(e.target.value);

            if (inputValue < min) {
                inputValue = min;
            } else if (inputValue > max) {
                inputValue = max;
            }

            value = inputValue;
            e.target.value = value.toString();
            dispatch("input", e);
        }
    };

    // Increment Value
    const incrementValue = () => {
        if (isLoading || isError || disabled) return;

        if (Number.isNaN(value)) {
            value = 0;
        }
        let newValue =
            value + (typeof step === "number" ? step : parseInt(step));
        if (newValue > max) {
            newValue = max;
        }
        value = newValue;
    };

    // Decrement Value
    const decrementValue = () => {
        if (isLoading || isError || disabled) return;

        if (Number.isNaN(value)) {
            value = 0;
        }
        let newValue =
            value - (typeof step === "number" ? step : parseInt(step));
        if (newValue < min) {
            newValue = min;
        }
        value = newValue;
    };

    // Handle Long Press
    let incrementTimeout: any;
    let decrementTimeout: any;
    let incrementInterval: any;
    let decrementInterval: any;

    const startIncrementing = () => {
        incrementTimeout = setTimeout(() => {
            incrementInterval = setInterval(incrementValue, 100);
        }, 500);
    };

    const stopIncrementing = () => {
        clearTimeout(incrementTimeout);
        clearInterval(incrementInterval);
    };

    const startDecrementing = () => {
        decrementTimeout = setTimeout(() => {
            decrementInterval = setInterval(decrementValue, 100);
        }, 500);
    };

    const stopDecrementing = () => {
        clearTimeout(decrementTimeout);
        clearInterval(decrementInterval);
    };
</script>

<div class={containerClassString}>
    {#if label}
        <label class="label" for={$$restProps.id} style="color: {labelColor}"
            >{$$restProps.id}</label
        >
    {/if}

    <input
        {color}
        {value}
        {disabled}
        {step}
        {min}
        {max}
        readonly={readOnly}
        {...$$restProps}
        id={label ? $$restProps.id : undefined}
        type="number"
        style={inputStyle}
        on:input={handleInput}
        on:input
        on:focus
        on:blur
        on:change
        on:click
        on:keydown
        on:keyup
    />
    <div class="controls">
        <button
            tabIndex={-1}
            class="control up"
            on:click={incrementValue}
            on:mousedown={startIncrementing}
            on:mouseup={stopIncrementing}
            on:mouseleave={stopIncrementing}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-up"
            >
                <polyline points="18 15 12 9 6 15" />
            </svg>
        </button>
        <button
            tabIndex={-1}
            class="control down"
            on:click={decrementValue}
            on:mousedown={startDecrementing}
            on:mouseup={stopDecrementing}
            on:mouseleave={stopDecrementing}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
            >
                <polyline points="6 9 12 15 18 9" />
            </svg>
        </button>
    </div>
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

    .controls {
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 2.5rem;

        .control {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50%;
            border: none;
            background: transparent;
            cursor: pointer;
            outline: none;
            svg {
                width: 1rem;
                height: 1rem;
            }
        }
        .up {
            &:hover {
                transform: translateY(-1px);
            }
            &:active {
                transform: translateY(1px);
            }
        }
        
        .down {
            &:hover {
                transform: translateY(1px);
            }
            &:active {
                transform: translateY(-1px);
            }
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

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
    }
</style>
