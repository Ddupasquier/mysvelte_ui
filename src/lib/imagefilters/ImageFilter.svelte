<script lang="ts">
    // Imports
    import { onMount } from "svelte";

    // Props
    export let image: string;
    export let alt: string;
    export let shape: "circ" | "rounded" | "square" = "square";
    export let filter:
        | "none"
        | "gray"
        | "sepia"
        | "invert"
        | "blur"
        | "contrast"
        | "hue-rotate"
        | "saturate"
        | "hue-rotate-saturate" = "none";
    export let width: string = "auto";
    export let height: string = "auto";
    export let aspectRatio: string = "auto";
    export let style: string = "";

    // Variables
    let classList = ["image-container"];
    let classString = "";

    // Lifecycle hooks
    onMount(() => {
        classList.push(shape);
        classList.push(filter);

        classString = classList.join(" ");
    });

    // Reactive statements
    $: classString = classList.join(" ");
</script>

<div
    class={classString}
    style={`width: ${width}; height: ${height}; ${style}`}
    {...$$restProps}
>
    <img src={image} {alt} style={`aspect-ratio: ${aspectRatio};`} />
</div>

<style lang="scss">
    .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        line-height: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    // Shapes
    .circ {
        border-radius: 50rem;
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

    .blur img {
        filter: blur(5px);
    }

    .contrast img {
        filter: contrast(150%);
    }

    .hue-rotate img {
        filter: hue-rotate(90deg);
    }

    .saturate img {
        filter: saturate(200%);
    }

    .hue-rotate-saturate img {
        filter: hue-rotate(90deg) saturate(200%);
    }
</style>
