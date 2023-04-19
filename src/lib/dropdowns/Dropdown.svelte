<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    // Props
    export let variant: "default" | "line" | "outline" = "default";
    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
        "medium";
    export let background: string = "white";
    export let color: string = "#000";
    export let placeholder: string = "Select";
    export let value: string = "";
    export let style: string = "";
    export let label: boolean = false;
    export let labelIn: boolean = false;
    export let disabled: boolean = false;
    export let isError: boolean = false;
    export let isLoading: boolean = false;
    export let options: Array<{ value: string; label: string }> = [];

    // Local state
    let dropdownOpen: boolean = false;
    let inputStyle = "";

    // Size values
    const sizeValues: Record<typeof size, string> = {
        xsmall: "0.125rem 0.25rem",
        small: "0.25rem 0.5rem",
        medium: "0.5rem 1rem",
        large: "0.75rem 1.5rem",
        xlarge: "1rem 2rem",
    };

    // Utility functions
    const removeBackgroundStyle = (styleString: string): string => {
        return styleString.replace(/background:\s*[^;]+;?/, "");
    };

    const updateInputStyle = () => {
        let baseStyle = `background: ${background}; color: ${color}; padding: ${sizeValues[size]}; ${style};`;
        let additionalStyle = "";

        if (disabled) {
            additionalStyle = `background: #eee; pointer-events: none; padding: ${
                sizeValues[size]
            }; ${removeBackgroundStyle(style)};`;
        } else if (isLoading) {
            additionalStyle = `background: #ccc; pointer-events: none; color: ${color}; border: 2px solid ${background}; padding: ${sizeValues[size]}; ${style};`;
        } else if (isError) {
            additionalStyle = `background: #ccc; pointer-events: none; color: ${color}; border: 2px solid red; padding: ${sizeValues[size]}; ${style};`;
        }

        inputStyle = `${baseStyle} ${additionalStyle}`.trim();
    };

    // Lifecycle hooks
    onMount(() => {
        document.addEventListener("click", (event: MouseEvent) => {
            if (!event.composedPath().includes(event.currentTarget as Node)) {
                dropdownOpen = false;
            }
        });
    });

    // Reactive statements
    $: {
        updateInputStyle();
        labelIn && (placeholder = "");
    }

    $: if (variant === "line") {
        background = "transparent";
    } else if (variant === "outline") {
        background = "rgba(255, 255, 255, 0.5)";
    }

    // Event handlers
    const handleDropdownClick = () => {
        if (!disabled) dropdownOpen = !dropdownOpen;
    };

    const handleOptionClick = (optionValue: string) => {
        value = optionValue;
        dropdownOpen = false;
    };
</script>

<div
    class="dropdown {variant} {size} {background} {color} {label
        ? 'with-label'
        : ''}"
    style={inputStyle}
>
    {#if label && !labelIn}
        <label for="dropdown">{placeholder}</label>
    {/if}
    <button
        class="dropdown-placeholder"
        on:click={handleDropdownClick}
        {disabled}
    >
        {value || placeholder}
    </button>
    <div class="dropdown-icon">&#x25BC;</div>

    {#if dropdownOpen}
        <div class="dropdown-options" in:fade={{ duration: 200 }}>
            {#each options as option (option.value)}
                <button
                    class="dropdown-option {option.value === value
                        ? 'selected'
                        : ''}"
                    on:click|stopPropagation={() =>
                        handleOptionClick(option.value)}
                    {disabled}
                >
                    {option.label}
                </button>
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    .dropdown {
        position: relative;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        border: none;
        border-radius: 0.25rem;
        outline: none;
        font-size: 1rem;

        &.line {
            border-bottom: 2px solid currentColor;
            background: transparent;
        }

        &.outline {
            border: 1px solid currentColor;
            background: rgba(255, 255, 255, 0.5);
        }

        &.with-label {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    .dropdown-placeholder {
        flex: 1;
        margin-right: 0.5rem;
    }

    .dropdown-icon {
        font-size: 0.75rem;
        opacity: 0.5;
    }

    .dropdown-options {
        position: absolute;
        top: 100%;
        left: 0;
        display: flex;
        flex-direction: column;
        background: white;
        border-radius: 0.25rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        min-width: 100%;
        z-index: 10;
    }

    .dropdown-option {
        padding: 0.25rem 0.5rem;
        cursor: pointer;
        white-space: nowrap;

        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }

        &.selected {
            font-weight: bold;
            background: rgba(0, 0, 0, 0.05);
        }
    }

    label {
        font-size: 0.75rem;
        margin-bottom: 0.25rem;
    }
</style>
