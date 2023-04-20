<script lang="ts">
    import { createAndAnimateCircle } from "$lib/animations/buttonAnimations";
    import { onMount, afterUpdate } from "svelte";

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
    export let icon: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107 128"><title>svelte-logo</title><path d="M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157"/><path d="M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287" style="fill:#fff"/></svg>`;

    let classList = ["button"];
    let classString = "";

    let iconSizeMap = {
        xsmall: "0.75rem",
        small: "1rem",
        medium: "1.5rem",
        large: "2rem",
        xlarge: "2.5rem",
    };

    let iconSize = iconSizeMap[size];

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
