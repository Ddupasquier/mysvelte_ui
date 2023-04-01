<script lang="ts">
    // Props
    export let color: string = "#c50eff";
    export let background: string = "white";
    export let size: "small" | "medium" | "large" = "medium";
    export let style: string = "";
    export let speed: "fast" | "medium" | "slow" = "medium";

    // Local state
    let containerStyle = "";
    let loaderStyle = "";
    let loaderSpeed = "5s";
    let loaderRef: HTMLDivElement;

    // Size values
    const widthValues: Record<typeof size, number> = {
        small: 100,
        medium: 200,
        large: 300,
    };

    // Speed Values
    const speedToDuration = {
        fast: "2s",
        medium: "5s",
        slow: "10s",
    };

    // Update styles on prop changes
    $: {
        loaderStyle = `background: ${color}; color: ${color};`;

        loaderSpeed = speedToDuration[speed];

        containerStyle = `width: ${widthValues[size]}px; background-color: ${background}; height: 30px; ${style}`;

        if (loaderRef) {
            loaderRef.style.setProperty("--animation-duration", loaderSpeed);
        }
    }
</script>

<div class="loader-container" style={containerStyle}>
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
        background: white;
        overflow: hidden;
    }
    .loader {
        height: 100%;
        min-width: 1px;
        background: #c50eff;
        outline: 5px solid currentColor;
        outline-offset: 5px;
        animation: progress var(--animation-duration) infinite ease-in-out;
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
