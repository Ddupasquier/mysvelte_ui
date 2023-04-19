<script lang="ts">
    // Imports
    import { onMount } from "svelte";

    // Props
    export let image: string;
    export let alt: string;
    export let size: "small" | "medium" | "large" = "medium";
    export let shape: "circ" | "rounded" | "square" = "rounded";
    export let filter: "none" | "gray" | "sepia" | "invert" = "none";

    // Variables
    let classList = ["avatar"];
    let classString = "";

    // Lifecycle hooks
    onMount(() => {
        classList.push(size);
        classList.push(shape);
        classList.push(filter);

        classString = classList.join(" ");
    });

    // Reactive statements
    $: classString = classList.join(" ");
</script>

<div class={classString}>
    <img src={image} {alt} />
</div>

<style lang="scss">
    .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        line-height: 0;

        img {
            width: 100%;
            object-fit: cover;
        }
    }

    // Sizes
    .small {
        width: 40px;
        height: 40px;
    }

    .medium {
        width: 80px;
        height: 80px;
    }

    .large {
        width: 120px;
        height: 120px;
    }

    // Shapes
    .circ {
        border-radius: 50%;
    }

    .rounded {
        border-radius: 13%;
    }

    .square {
        border-radius: 0;
    }

    // Filters
    .none img {
        filter: none;
    }

    .gray img {
        filter: grayscale(100%);
    }

    .sepia img {
        filter: sepia(100%);
    }

    .invert img {
        filter: invert(100%);
    }
</style>
