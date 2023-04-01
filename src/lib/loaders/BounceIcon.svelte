<script lang="ts">
    import { onMount } from "svelte";

    // Props
    export let color: string = "#c50eff";
    export let size: "small" | "medium" | "large" = "medium";
    export let style: string = "";
    export let icon: string = "icon";
    export let speed: "fast" | "medium" | "slow" = "medium";

    // Local state
    let containerStyle = "";
    let loaderStyle = "";
    let loaderSpeed = "5";
    let iconRef: HTMLElement;

    // Size values
    const sizeValues: Record<typeof size, number> = {
        small: 25,
        medium: 35,
        large: 55,
    };

    // Speed values
    const speedToDuration = {
        fast: "0.3s",
        medium: "0.6s",
        slow: "1.2s",
    };

    // Update styles on prop changes
    $: {
        containerStyle = `display: flex; align-items: center; justify-content: center; ${style}`;
        loaderStyle = `width: ${sizeValues[size]}px; height: ${sizeValues[size]}px;`;
        loaderSpeed = speedToDuration[speed];

        if (iconRef) {
            iconRef.style.setProperty("--animation-duration", speedToDuration[speed]);
        }
    }

    // Update animation durations

    const updateIconColor = () => {
        if (icon !== "") {
            let iconSvg = iconRef.querySelector("svg");

            if (iconSvg) {
                let paths = iconSvg.querySelectorAll("path");
                paths.forEach((path) => {
                    path.setAttribute("fill", color);
                });
            }
        }
    };

    // Lifecycle hooks
    onMount(() => {
        updateIconColor();
    });
</script>

<div class="loader-container" style={containerStyle}>
    <div bind:this={iconRef} style={loaderStyle} class="icon">
        <slot name="icon">{@html icon}</slot>
    </div>
</div>

<style>
    .loader-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon {
        transform-origin: center;
        animation: bounce var(--animation-duration) infinite alternate;
    }

    @keyframes bounce {
        0% {
            transform: translateY(0) scale(1);
        }
        100% {
            transform: translateY(-10px) scale(1.5);
        }
    }
</style>
