<script lang="ts">
    // Props
    /**
     * @component Loader
     *
     * @prop color
     * @description Color of the loader (any valid CSS color).
     * @type {string}
     *  @default "#C50EFF"
     *
     * @prop size
     * @description Size preset: xsmall, small, medium, large, or xlarge.
     * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
     * @default "medium"
     *
     * @prop style
     * @description Apply additional inline CSS styles to the loader.
     * @type {string}
     * @default ""
     *
     * @prop speed
     * @description Animation speed preset: fast, medium, or slow.
     * @type {"fast" | "medium" | "slow"}
     * @default "medium"
     *
     * @prop ariaLabel
     * @description Accessible label announced by screen readers.
     * @type {string}
     * @default "Loading"
     */
    export let color: string = "#C50EFF";
    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
        "medium";
    export let style: string = "";
    export let speed: "fast" | "medium" | "slow" = "medium";
    export let ariaLabel: string = "Loading";

    // Local state
    let containerStyle = "";
    let loaderStyle = "";
    let loaderRef: HTMLDivElement;

    // Size values
    const sizeValues: Record<typeof size, number> = {
        xsmall: 10,
        small: 20,
        medium: 40,
        large: 60,
        xlarge: 80,
    };

    // Speed Values
    const speedToDuration: Record<typeof speed, string> = {
        fast: ".5s",
        medium: "1s",
        slow: "2s",
    };

    // Update styles on prop changes
    $: {
        if (loaderRef) {
            loaderRef.style.setProperty(
                "--animation-duration",
                speedToDuration[speed]
            );
        }

        const borderWidth = Math.max(2, sizeValues[size] / 6);

        loaderStyle = `
          border-top-color: ${color};
          border-left-color: ${color};
          width: ${sizeValues[size]}px;
          height: ${sizeValues[size]}px;
          border-width: ${borderWidth}px;
        `;

        containerStyle = `display: flex; align-items: center; justify-content: center; ${style}`;
    }
</script>

<div class="loader-container" style={containerStyle} role="status" aria-live="polite" aria-label={ariaLabel}>
    <div class="loader" style={loaderStyle} bind:this={loaderRef} />
</div>

<style>
    .loader-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loader {
        position: relative;
        border-style: solid;
        border-radius: 50%;
        border-right-color: transparent;
        border-bottom-color: transparent;
        animation: rotate var(--animation-duration) linear infinite;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
