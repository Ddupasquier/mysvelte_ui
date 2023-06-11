<script lang="ts">
    // Imports
    import { onMount } from "svelte";

    // Props
    /**
     * @component Avatar
     *
     * @prop image
     * @description NEW The URL of the avatar image. Provide the path to the image you want to display as the avatar.
     * @type {string}
     * @default: ""
     *
     * @prop alt
     * @description The alternative text for the avatar image. This text is displayed when the image cannot be loaded or accessed by screen readers.
     * @type {string}
     * @default: ""
     *
     * @prop size
     * @description The size of the avatar. Choose from "xsmall", "small", "medium", "large", or "xlarge" to control the dimensions of the avatar.
     * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
     * @default: "medium"
     *
     * @prop shape
     * @description The shape of the avatar. Select either "circ", "rounded", or "square" to define the border shape of the avatar.
     * @type {"circ" | "rounded" | "square"}
     * @default: "rounded"
     *
     * @prop filter
     * @description The filter applied to the avatar image. Apply visual effects such as "gray" for grayscale, "sepia" for a vintage look, or "invert" for an inverted color scheme.
     * @type {"none" | "gray" | "sepia" | "invert"}
     * @default: "none"
     */
    export let image: string;
    export let alt: string;
    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
        "medium";
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
    .xsmall {
        width: 24px;
        height: 24px;
    }

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

    .xlarge {
        width: 160px;
        height: 160px;
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
