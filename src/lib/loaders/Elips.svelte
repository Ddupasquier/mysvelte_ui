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
        small: 5,
        medium: 10,
        large: 15,
    };

    // Update styles on prop changes
    $: containerStyle = `display: flex; align-items: center; justify-content: center; ${style}`;
    $: loaderStyle = `width: ${sizeValues[size]}px; height: ${sizeValues[size]}px; background-color: ${color};`;
</script>

<div class="loader-container">
    <div class="dot" style={loaderStyle} />
    <div class="dot" style={loaderStyle} />
    <div class="dot" style={loaderStyle} />
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

    .dot:nth-child(2) {
        animation-delay: 0.2s;
    }

    .dot:nth-child(3) {
        animation-delay: 0.4s;
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
