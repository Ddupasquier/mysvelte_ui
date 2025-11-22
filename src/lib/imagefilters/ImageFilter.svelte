<script lang="ts">
    // Imports
    import { onMount } from "svelte";

    /**
     * @component ImageFilter
     *
     * @prop image!
     * @description Image source URL.
     * @type {string}
     * @default ""
     *
     * @prop alt!
     * @description Alt text for the image.
     * @type {string}
     * @default ""
     *
     * @prop ariaLabel
     * @description Accessible label for screen readers (falls back to alt).
     * @type {string}
     * @default ""
     *
     * @prop shape
     * @description Image shape: square, rounded, or circ.
     * @type {"circ" | "rounded" | "square"}
     * @default "square"
     *
     * @prop filter
     * @description Visual filter applied to the image.
     * @type {"none" | "gray" | "sepia" | "invert" | "blur" | "contrast" | "hue-rotate" | "saturate" | "hue-rotate-saturate"}
     * @default "none"
     *
     * @prop width
     * @description Image width (CSS length).
     * @type {string}
     * @default "auto"
     *
     * @prop height
     * @description Image height (CSS length).
     * @type {string}
     * @default "auto"
     *
     * @prop aspectRatio
     * @description Aspect ratio, e.g., "3/2".
     * @type {string}
     * @default "auto"
     *
     * @prop style
     * @description Inline styles for the container.
     * @type {string}
     * @default ""
     */

    export let image: string;
    export let alt: string;
    export let ariaLabel: string = "";
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

    // Reactive class list
    $: classString = ["image-container", shape, filter].join(" ");
</script>

<div
    class={classString}
    style={`width: ${width}; height: ${height}; ${style}`}
    {...$$restProps}
>
    <img
        src={image}
        {alt}
        aria-label={ariaLabel || alt}
        style={`aspect-ratio: ${aspectRatio};`}
    />
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
