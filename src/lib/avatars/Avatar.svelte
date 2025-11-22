<script lang="ts">
    // Imports
    import { onMount } from "svelte";
    import { Loader } from "$lib";
    import { createLoadObserver } from "$lib/utilities";

    /**
     * @component Avatar
     *
     * @prop image!
     * @description URL of the avatar image.
     * @type {string}
     * @default ""
     *
     * @prop alt!
     * @description Alt text for the image.
     * @type {string}
     * @default ""
     *
     * @prop ariaLabel
     * @description Accessible label announced to screen readers.
     * @type {string}
     * @default ""
     *
     * @prop size
     * @description Size preset: xsmall, small, medium, large, or xlarge.
     * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
     * @default "medium"
     *
     * @prop shape
     * @description Border shape: circ, rounded, or square.
     * @type {"circ" | "rounded" | "square"}
     * @default "rounded"
     *
     * @prop filter
     * @description Optional image filter: none, gray, sepia, or invert.
     * @type {"none" | "gray" | "sepia" | "invert"}
     * @default "none"
     *
     * @prop loadObserver
     * @description Show loader slot until the image finishes loading.
     * @type {boolean}
     * @default false
     */
    export let image: string;
    export let alt: string;
    export let ariaLabel: string = "";
    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
        "medium";
    export let shape: "circ" | "rounded" | "square" = "rounded";
    export let filter: "none" | "gray" | "sepia" | "invert" = "none";
    export let loadObserver: boolean = false;

    // Variables
    let loading = true;

    const onLoad = createLoadObserver(() => {
        loading = false;
    });

    // Derived classes
    $: classString = ["avatar", size, shape, filter].join(" ");
</script>

<div class={classString}>
    <img
        src={image}
        {alt}
        aria-label={ariaLabel || alt}
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
