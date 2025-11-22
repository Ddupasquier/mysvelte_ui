<script lang="ts">
    // Props
    /**
     * @component Loader.Progress
     *
     * @prop color
     * @description Fill color of the progress bar.
     * @type {string}
     * @default "#C50EFF"
     *
     * @prop background
     * @description Background color of the track.
     * @type {string}
     * @default "#fff"
     *
     * @prop size
     * @description Width preset of the bar.
     * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
     * @default "medium"
     *
     * @prop style
     * @description Additional inline styles for the track container.
     * @type {string}
     * @default ""
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
    export let background: string = "#fff";
    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
        "medium";
    export let style: string = "";
    export let speed: "fast" | "medium" | "slow" = "medium";
    export let ariaLabel: string = "Loading";

    // Local state
    let containerStyle = "";
    let loaderStyle = "";
    let loaderSpeed = "5s";
    let loaderRef: HTMLDivElement;

    // Size values
    const widthValues: Record<typeof size, number> = {
        xsmall: 50,
        small: 100,
        medium: 200,
        large: 300,
        xlarge: 400,
    };

    // Speed Values
    const speedToDuration = {
        fast: "2s",
        medium: "5s",
        slow: "10s",
    };

    // Utils
    const randomCubicBezier = () => {
        const x1 = Math.random();
        const y1 = Math.random();
        const x2 = Math.random();
        const y2 = Math.random();
        return `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;
    };

    // Update styles on prop changes
    $: {
        loaderStyle = `background: ${color}; color: ${color};`;

        loaderSpeed = speedToDuration[speed];

        containerStyle = `width: ${widthValues[size]}px; background-color: ${background}; height: 30px; ${style}`;

        if (loaderRef) {
            loaderRef.style.setProperty("--animation-duration", loaderSpeed);
            loaderRef.style.setProperty(
                "--animation-timing-function",
                randomCubicBezier()
            );
        }
    }
</script>

<div class="loader-container" style={containerStyle} role="status" aria-live="polite" aria-label={ariaLabel}>
    <div class="loader" style={loaderStyle} bind:this={loaderRef} />
</div>

<style>
    .loader-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 300px;
        height: 30px;
        border-radius: 8px;
        background: #fff;
        overflow: hidden;
    }
    .loader {
        height: 100%;
        min-width: 1px;
        background: #c50eff;
        outline: 5px double currentColor;
        outline-offset: 2px;
        animation: progress var(--animation-duration)
            var(--animation-timing-function) infinite;
        transform: skew(10deg);
        transform-origin: bottom left;
    }
    @keyframes progress {
        0% {
            width: 0.1%;
        }
        100% {
            width: 100%;
        }
    }
</style>
