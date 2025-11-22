<script lang="ts">
    // Props
    /**
     * @component Loader.Elips
     *
     * @prop color
     * @description Color of the dots.
     * @type {string}
     * @default "#C50EFF"
     *
     * @prop size
     * @description Dot size preset.
     * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
     * @default "medium"
     *
     * @prop speed
     * @description Animation speed preset.
     * @type {"fast" | "medium" | "slow"}
     * @default "medium"
     *
     * @prop ariaLabel
     * @description Accessible label for screen readers.
     * @type {string}
     * @default "Loading"
     */
    export let color: string = "#C50EFF";
    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" = "medium";
    export let speed: "fast" | "medium" | "slow" = "medium";
    export let ariaLabel: string = "Loading";

    // Local state
    let loaderStyle = "";

    // Size values
    const sizeValues: Record<typeof size, number> = {
        xsmall: 2,
        small: 5,
        medium: 10,
        large: 15,
        xlarge: 20,
    };

    // Speed Values
    const speedToDuration = {
        fast: ".2s",
        medium: ".5s",
        slow: "1s",
    };

    // Update styles on prop changes
    $: {
        loaderStyle = `width: ${sizeValues[size]}px; height: ${sizeValues[size]}px; background-color: ${color};`;
    }

    // Update animation durations
    $: animationDuration = speedToDuration[speed];
</script>

<div class="loader-container" role="status" aria-live="polite" aria-label={ariaLabel}>
    <div
        class="dot"
        style={`${loaderStyle}; animation-duration: ${animationDuration}`}
    />
    <div
        class="dot"
        style={`${loaderStyle}; animation-duration: ${animationDuration}; animation-delay: ${
            parseFloat(animationDuration) / 3
        }s`}
    />
    <div
        class="dot"
        style={`${loaderStyle}; animation-duration: ${animationDuration}; animation-delay: ${
            (parseFloat(animationDuration) * 2) / 3
        }s`}
    />
</div>

<style>
    .loader-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #c50eff;
        margin: 0 5px;
        animation: bounce 0.6s infinite alternate;
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
