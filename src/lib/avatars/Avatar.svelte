<script lang="ts">
    // Imports
    import { onMount } from "svelte";
    import { Loader } from "$lib";
    import { createLoadObserver } from "$lib/utilities";

    // Props
    /**
     * @component Avatar
     *
     * @prop image!
     * @description The URL of the avatar image. Provide the path to the image you want to display as the avatar.
     * @type {string}
     * @default ""
     *
     * @prop alt!
     * @description The alternative text for the avatar image. This text is displayed when the image cannot be loaded or accessed by screen readers.
     * @type {string}
     * @default ""
     *
     * @prop size
     * @description The size of the avatar. Choose from "xsmall", "small", "medium", "large", or "xlarge" to control the dimensions of the avatar.
     * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
     * @default "medium"
     *
     * @prop shape
     * @description The shape of the avatar. Select either "circ", "rounded", or "square" to define the border shape of the avatar.
     * @type {"circ" | "rounded" | "square"}
     * @default "rounded"
     *
     * @prop filter
     * @description The filter applied to the avatar image. Apply visual effects such as "gray" for grayscale, "sepia" for a vintage look, or "invert" for an inverted color scheme.
     * @type {"none" | "gray" | "sepia" | "invert"}
     * @default "none"
     * *
     * @prop loadObserver
     * @description Enable or disable the load observer for the avatar image. When enabled, a load observer will track the loading state of the image, allowing you to add a custom loader. This loader defaults to one of our loaders, but you can override it by adding a custom loader to the "loader" slot. 
     * @type {boolean}
     * @default false
     */
    export let image: string;
    export let alt: string;
    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
        "medium";
    export let shape: "circ" | "rounded" | "square" = "rounded";
    export let filter: "none" | "gray" | "sepia" | "invert" = "none";
    export let loadObserver: boolean = false;

    // Variables
    let classList = ["avatar"];
    let classString = "";
    let loading = true;

    const onLoad = createLoadObserver(() => {
        loading = false;
    });

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
    <img
        src={image}
        {alt}
        on:load={loadObserver ? onLoad : null}
        loading="lazy"
        style="visibility: {loading && loadObserver ? 'hidden' : 'visible'}"
    />
    {#if loading && loadObserver}
        <div class="loader">
            <slot name="loader"><Loader size="xsmall" speed="fast"/></slot>
        </div>
    {/if}
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

        .loader {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
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
