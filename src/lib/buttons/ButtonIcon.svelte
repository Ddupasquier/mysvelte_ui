<script lang="ts">
    // Imports
    import { createAndAnimateCircle } from "$lib/animations/buttonAnimations";
    import { onMount, afterUpdate } from "svelte";
    import svelteIcon from "../assets/svelte.svg";

    // Props
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

    // Variables
    let classList = ["button"];
    let classString = "";

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
        classList.push(size);
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
        classList = ["button", size];
        if (isLoading) {
            classList.push("loading");
        } else if (isError) {
            classList.push("error");
        }
        classString = classList.join(" ");
    }

    $: buttonStyle = `
    color: ${color};
    ${style}
  `;

    $: wrapperStyle = `
    background: ${disabled || isError || isLoading ? "#ccc" : background};
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
        {disabled}
        {...$$restProps}
        style={buttonStyle}
        class={classString}
        on:click
        on:click={(e) => createAndAnimateCircle(buttonRef, animated, e)}
        on:mouseover
        on:mouseenter
        on:mouseleave
        on:focus
        on:blur
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
