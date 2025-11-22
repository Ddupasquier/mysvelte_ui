<script lang="ts">
    // Imports
    import { createAndAnimateCircle } from "$lib/animations/buttonAnimations";
    import { onMount, afterUpdate } from "svelte";
    import svelteIcon from "../assets/svelte.svg";

    /**
     * @component Button.Icon
     *
     * @prop size
     * @description Sets the size of the button. Choose from 'xsmall', 'small', 'medium', 'large', or 'xlarge'.
     * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
     * @default "medium"
     *
     * @prop background
     * @description Background color for the icon wrapper.
     * @type {string}
     * @default "#C50EFF"
     *
     * @prop color
     * @description Text/icon color.
     * @type {string}
     * @default "#fff"
     *
     * @prop text
     * @description Visible label for the button (also used as the aria-label when provided).
     * @type {string}
     * @default ""
     *
     * @prop icon
     * @description HTML/SVG string to render as the icon. You can also pass an element via the `icon` slot.
     * @type {string}
     * @default svelteIcon
     *
     * @prop disabled
     * @description Disables the button.
     * @type {boolean}
     * @default false
     *
     * @prop isLoading
     * @description Shows loading state and disables interaction.
     * @type {boolean}
     * @default false
     *
     * @prop isError
     * @description Shows error state and disables interaction.
     * @type {boolean}
     * @default false
     *
     * @prop animated
     * @description Enables click ripple animation.
     * @type {boolean}
     * @default false
     *
     * @prop type
     * @description Native button type.
     * @type {"button" | "submit" | "reset"}
     * @default "button"
     *
     * @prop style
     * @description Inline CSS for the button.
     * @type {string}
     * @default ""
     */
    export let disabled: boolean = false;
    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
        "medium";
    export let background: string = "#C50EFF";
    export let animated: boolean = false;
    export let color: string = "#fff";
    export let text: string = "";
    export let isLoading: boolean = false;
    export let isError: boolean = false;
    export let style: string = "";
    export let icon: string = svelteIcon;
    export let type: "button" | "submit" | "reset" = "button";

    // Variables
    let classList = ["button"];
    let classString = "";
    const baseClass = ["button"];

    // Sizing Calc
    let iconSizeMap = {
        xsmall: "0.75rem",
        small: "1rem",
        medium: "1.5rem",
        large: "2rem",
        xlarge: "2.5rem",
    };

    let iconSize = iconSizeMap[size];

    // Lifecycle hooks
    onMount(() => {
        classList = [...baseClass, size];
        if (isLoading) {
            classList.push("loading");
        } else if (isError) {
            classList.push("error");
        }
        classString = classList.join(" ");
        updateIconColor();
    });

    afterUpdate(() => {
        updateIconColor();
    });

    // Reactive statements
    $: {
        classList = [...baseClass, size];
        if (isLoading) {
            classList.push("loading");
        } else if (isError) {
            classList.push("error");
        }
        classString = classList.join(" ");
    }

    $: isDisabled = disabled || isLoading || isError;

    $: buttonStyle = `
    color: ${color};
    ${style}
  `;

    $: wrapperStyle = `
    background: ${isDisabled ? "#ccc" : background};
    --bg-color: ${background};
  `;

    // Functions
    const updateIconColor = () => {
        if (buttonRef && icon !== "") {
            let iconSvg = iconRef.querySelector("svg");

            if (iconSvg) {
                let paths = iconSvg.querySelectorAll("path");
                paths.forEach((path) => {
                    if (
                        !path.hasAttribute("fill") ||
                        path.getAttribute("fill") === ""
                    ) {
                        path.setAttribute("fill", color);
                    }
                });
            }
        }
    };

    // Refs
    let buttonRef: HTMLButtonElement;
    let iconRef: HTMLDivElement;
</script>

<div class="wrapper" style={wrapperStyle}>
    {#if icon !== ""}
        <div
            class="icon-div"
            bind:this={iconRef}
            style={`width: ${iconSize}; height: ${iconSize};`}
        >
            <slot name="icon">{@html icon}</slot>
        </div>
    {/if}
    <button
        type={type}
        disabled={isDisabled}
        {...$$restProps}
        style={buttonStyle}
        class={classString}
        aria-busy={isLoading}
        aria-disabled={isDisabled}
        aria-label={text || undefined}
        data-state={isError ? "error" : isLoading ? "loading" : "default"}
        on:click={(e) =>
            createAndAnimateCircle(buttonRef, animated && !isDisabled, e)}
        bind:this={buttonRef}
    >
        <slot name="text">{text}</slot>
    </button>
</div>

<style lang="scss">
    .wrapper {
        display: inline-flex;
        align-items: center;
        border-radius: 0.3rem;
        overflow: hidden;
    }

    .button {
        position: relative;
        border: none;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        height: fit-content;
        width: fit-content;
        padding: 0;
        background: transparent;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
    }

    .icon-div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0.25rem;
    }

    // Sizes
    .xsmall {
        padding: 0.125rem 0.25rem;
    }

    .small {
        padding: 0.25rem 0.5rem;
    }

    .medium {
        padding: 0.5rem 1rem;
    }

    .large {
        padding: 0.75rem 1.5rem;
    }

    .xlarge {
        padding: 1rem 2rem;
    }

    .button:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 3px;
    }

    // Loading and error styles
    .loading,
    .error {
        color: #fff;
    }

    .loading {
        outline: 3px solid var(--bg-color);
        outline-offset: -3px;
        animation: double-pulse-gray 1.5s infinite ease-in-out;
    }

    .error {
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

    :global(.btn-circle) {
        position: absolute;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        transform: scale(0);
        transition: 0.5s;
        z-index: 1;
        animation: circle 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
    }

    @keyframes circle {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(10);
        }
    }
</style>
