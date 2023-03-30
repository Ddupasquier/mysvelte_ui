<script lang="ts">
    // Props
    import { beforeUpdate, onMount } from 'svelte';

    export let color: string = "#c50eff";
    export let size: "small" | "medium" | "large" = "medium";
    export let style: string = "";
    export let speed: "short" | "medium" | "long" = "medium";

    // instead of using a keyframe animation, we can use JS to time the transition
    // interval to update the scale of the thing


    // Local state
    let containerStyle = "";
    let loaderStyle = "";
    let loaderSpeed = "5";
    let startingScale = 0.1;
    let endingScale = 1;

    // Plan:
    // start scale at 0%/0.1% or whatever

    // 0 - 100 over 5s
    // increase scale from 0% - 100% over 5s


    $: loaderStyle = `background: ${color};`;
    let loaderRef: HTMLDivElement;
    
    const growProgress = () => {
        loaderRef.style.transform = `scale(${endingScale})`;
    };

    onMount(() => {
        growProgress();
    });

    // beforeUpdate(() => {
    //     loaderStyle = `animation: progress ${loaderSpeed}s infinite ease-in-out`;
    // })

</script>

<div class="loader-container">
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
        width: 100px;
        background-color: white;
        height: 30px;
    }
    .loader {
        height: 100%;
        min-width: 1px;
        background: #c50eff;
        /* animation: progress 5s infinite ease-in-out; */
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

<!-- markup (zero or more items) goes here -->

