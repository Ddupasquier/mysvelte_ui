<script lang="ts">
    // Props
    /**
     * @component Loader
     *
     * @prop color
     * @description Choose the color of the loader. This should be in a recognized color format, such as hex code.
     * @type {string}
     *  @default "#c50eff"
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
     */
    export let color: string = "#c50eff";
    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" = "medium";
    export let style: string = "";
    export let speed: "fast" | "medium" | "slow" = "medium";

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

        loaderStyle = `border-top-color: ${color}; border-left-color: ${color}; width: ${sizeValues[size]}px; height: ${sizeValues[size]}px;`;

        containerStyle = `display: flex; align-items: center; justify-content: center; ${style}`;
    }
</script>

<div class="loader-container" style={containerStyle}>
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
        width: 0;
        height: 0;
        border-style: solid;
        border-radius: 50%;
        border-width: 5px;
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