<script lang="ts">
    // Imports
    import { onMount } from "svelte";

    // Props
    /**
     * @component ImageFilter
     *
     * @prop image!
     * @description The image source for the ImageFilter.
     * @type {string}
     * @default ""
     *
     * @prop alt!
     * @description The alt text for the ImageFilter.
     * @type {string}
     * @default ""
     *
     * @prop shape
     * @description The shape of the image can be "square", "rounded", or "circ".
     * @type {"circ" | "rounded" | "square"}
     * @default "square"
     *
     * @prop filter
     * @description The filter prop determines the filter applied to the image. It can be one of the following values: "none", "gray", "sepia", "invert", "blur", "contrast", "hue-rotate", "saturate", "hue-rotate-saturate".
     * @type {"none" | "gray" | "sepia" | "invert" | "blur" | "contrast" | "hue-rotate" | "saturate" | "hue-rotate-saturate"}
     * @default "none"
     *
     * @prop width
     * @description The width of the image. You can specify any valid CSS length unit.
     * @type {string}
     * @default "auto"
     *
     * @prop height
     * @description The height of the image. You can specify any valid CSS length unit.
     * @type {string}
     * @default "auto"
     *
     * @prop aspectRatio
     * @description The aspect ratio of the image. This is specified as a string with a ratio of width to height.
     * @type {string}
     * @default "auto"
     *
     * @prop style
     * @description The CSS style for the image container.
     * @type {string}
     * @default ""
     */

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
