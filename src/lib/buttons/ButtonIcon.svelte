<script lang="ts">
    import { createAndAnimateCircle } from "$lib/animations/buttonAnimations";
    import { afterUpdate, onMount } from "svelte";

    export let disabled: boolean = false;
    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
        "medium";
    export let background: string = "#c50eff";
    export let animated: boolean = false;
    export let color: string = "#fff";
    export let text: string = "";
    export let isLoading: boolean = false;
    export let isError: boolean = false;
    export let style: string = "";
    export let icon: string = "icon";

    const sizeValues: Record<typeof size, string> = {
        xsmall: "0.125rem 0.25rem",
        small: "0.25rem 0.5rem",
        medium: "0.5rem 1rem",
        large: "0.75rem 1.5rem",
        xlarge: "1rem 2rem",
    };

    const iconSizes: Record<typeof size, string> = {
        xsmall: "1.5rem",
        small: "1.75rem",
        medium: "2rem",
        large: "2.5rem",
        xlarge: "3rem",
    };

    $: iconSize = "2rem";

    let buttonStyle = `padding: ${sizeValues[size]}; color: ${color};`;
    let wrapperStyle = "";

    let buttonRef: HTMLButtonElement;
    let iconRef: HTMLDivElement;

    const removeBackgroundStyle = (styleString: string) => {
        return styleString.replace(/background:\s*[^;]+;?/, "");
    };

    const updateWrapperStyle = () => {
        let baseStyle = `background: ${background}; color: ${color}; padding: 0; ${style};`;

        let additionalStyle = "";

        if (disabled) {
            additionalStyle = `background: #ccc; ${removeBackgroundStyle(
                style
            )};`;
        } else if (isLoading) {
            additionalStyle = `background: #ccc; pointer-events: none; color: ${color}; border: 2px solid ${background};${style};`;
        } else if (isError) {
            additionalStyle = `background: #ccc; pointer-events: none; color: ${color}; border: 2px solid red;${style};`;
        }

        wrapperStyle = `${baseStyle} ${additionalStyle}`.trim();
    };

    const updateIconColor = () => {
        if (buttonRef && icon !== "") {
            let iconSvg = iconRef.querySelector("svg");

            if (iconSvg) {
                let paths = iconSvg.querySelectorAll("path");
                paths.forEach((path) => {
                    path.setAttribute("fill", color);
                });
            }
        }
    };

    onMount(() => {
        iconSize = iconSizes[size];
        updateWrapperStyle();
        updateIconColor();
    });

    $: {
        updateWrapperStyle();
        updateIconColor();
    }

    afterUpdate(() => {
        updateWrapperStyle();
        updateIconColor();
    });
</script>

<div class="wrapper" style={wrapperStyle}>
    {#if icon !== ""}
        <div class="icon-div" bind:this={iconRef} style="height: {iconSize}; width: {iconSize}">
            <slot name="icon">{@html icon}</slot>
        </div>
    {/if}
    <button
        {disabled}
        {...$$restProps}
        style={buttonStyle}
        class={isLoading ? "loading" : isError ? "error" : ""}
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
        display: grid;
        grid-template-columns: 1fr auto;
        border-radius: 0.3rem;
        width: fit-content;
    }

    button {
        position: relative;
        border: none;
        outline: none;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
        overflow: hidden;
        border-radius: 0 0.3rem 0.3rem 0;
        background: transparent;
    }

    .icon-div {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.3rem 0 0 0.3rem;
        backdrop-filter: brightness(0.87);
        padding: 5%;
    }

    .icon-div:first-child {
        transition: all 0.5s;
    }

    .loading {
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
