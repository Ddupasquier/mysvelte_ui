<script lang="ts">
    import { onMount } from "svelte";
    import svelteIcon from "../assets/svelte.svg";

    // Props
    /**
     * @component Loader
     *
     * @prop color
     * @description Choose the color of the loader. This should be in a recognized color format, such as hex code.
     * @type {string}
     *  @default "#C50EFF"
     *
     * @prop size
     * @description Choose the size of the loader. You have options from "xsmall" up to "xlarge", with "small", "medium" and "large" in between.
     * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
     * @default "medium"
     *
     * @prop style
     * @description Apply additional inline CSS styles to the loader.
     * @type {string}
     * @default ""
     *
     * @prop speed
     * @description Choose the speed of the loader. You have options from "fast" up to "slow", with "medium" in between.
     * @type {"fast" | "medium" | "slow"}
     * @default "medium"
     *
     * @prop icon
     * @description The icon of the loader can be changed to any SVG icon. You can use the <a href="https://www.flaticon.com/" target="_blank">Flaticon</a> website to find an icon you like, and then copy the SVG code into this prop.
     * @type {string}
     * @default "The Svelte logo"
     */
    export let color: string = "#C50EFF";
    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" = "medium";
    export let style: string = "";
    export let icon: string = svelteIcon;
    export let speed: "fast" | "medium" | "slow" = "medium";

    // Local state
    let containerStyle = "";
    let loaderStyle = "";
    let iconRef: HTMLElement;

    // Size values
    const sizeValues: Record<typeof size, number> = {
        xsmall: 15,
        small: 25,
        medium: 35,
        large: 55,
        xlarge: 75,
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

        if (iconRef) {
            iconRef.style.setProperty(
                "--animation-duration",
                speedToDuration[speed]
            );
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
            transform: translateY(0) scaleY(1) scaleX(1.2);
        }
        100% {
            transform: translateY(-20px) scaleY(1.3) scaleX(1);
        }
    }
</style>
