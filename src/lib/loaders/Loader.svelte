<script lang="ts">
    // Props
    export let color: string = "#c50eff";
    export let size: "small" | "medium" | "large" = "medium";
    export let style: string = "";
    export let speed: "fast" | "medium" | "slow" = "medium";

    // Local state
    let containerStyle = "";
    let loaderStyle = "";
    let loaderRef: HTMLDivElement;

    // Size values
    const sizeValues: Record<typeof size, number> = {
        small: 20,
        medium: 40,
        large: 60,
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
