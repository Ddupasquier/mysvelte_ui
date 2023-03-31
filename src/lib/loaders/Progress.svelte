<script lang="ts">
    import { onMount } from 'svelte';

    export let color: string = "#c50eff";
    export let background: string = "transparent";
    export let size: "small" | "medium" | "large" = "medium";
    export let style: string = "";
    export let speed: "short" | "medium" | "long" = "medium";

    let loaderStyle = "";
    let loaderSpeed = "5";
    let loaderRef: HTMLDivElement;

    const widthValues: Record<typeof size, number> = {
        small: 100,
        medium: 200,
        large: 300,
    };

    $: {
        loaderStyle = `background: ${color};`;

        const speedToDuration = {
            short: "2s",
            medium: "5s",
            long: "10s",
        };
        loaderSpeed = speedToDuration[speed];

        if (loaderRef) {
            loaderRef.style.setProperty("--animation-duration", loaderSpeed);
        }
    }

    $: containerStyle = `width: ${widthValues[size]}px; background-color: ${background}; height: 30px; ${style}`;

    onMount(() => {});

</script>

<div class="loader-container" style={containerStyle}>
    <div 
        class="loader" 
        style={loaderStyle} 
        bind:this={loaderRef}
    />
</div>

<style>
    .loader-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 300px;
        background-color: white;
        height: 30px;
    }
    .loader {
        height: 100%;
        min-width: 1px;
        background: #c50eff;
        animation: progress var(--animation-duration) infinite ease-in-out;
        transform-origin: top-left;
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