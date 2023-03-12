<script lang="ts">
    // Props
    export let color: string = "#c50eff";
    export let size: "small" | "medium" | "large" = "medium";
    export let style: string = "";

    // Local state
    let containerStyle = "";
    let loaderStyle = "";

    // Size values
    const sizeValues: Record<typeof size, number> = {
        small: 20,
        medium: 40,
        large: 60,
    };

    // Update styles on prop changes
    $: containerStyle = `display: flex; align-items: center; justify-content: center; ${style}`;
    $: loaderStyle = `border-top-color: ${color}; border-left-color: ${color}; width: ${sizeValues[size]}px; height: ${sizeValues[size]}px;`;
</script>

<div class="loader-container" style={containerStyle}>
    <div class="loader" style={loaderStyle} />
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
        animation: rotate 0.8s linear infinite;
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
