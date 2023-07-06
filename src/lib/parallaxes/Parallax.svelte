<script lang="ts">
    import { Loader } from "$lib";
    import { createLoadObserver } from "$lib/utilities";

    /**
     * @component Parallax
     *
     * @prop image!
     * @description The URL of the image you want to use for the parallax effect.
     * @type {string}
     * @default ""
     *
     * @prop alt!
     * @description Alternative text for the parallax image for better accessibility and SEO.
     * @type {string}
     * @default ""
     *
     * @prop height
     * @description The height of the parallax area on your page.
     * @type {string}
     * @default "300px"
     *
     * @prop width
     * @description The width of the parallax area. It defaults to full width.
     * @type {string}
     * @default "100%"
     *
     * @prop speed
     * @description Controls the rate at which the parallax effect takes place. Adjust this to get the right feel for your design.
     * @type {number}
     * @default 0.5
     *
     * @prop position
     * @description Sets the starting position of the parallax image. Useful for making sure the focus of the image is visible.
     * @type {[number, number]}
     * @default [0, 0]
     *
     * @prop loadObserver
     * @description Option to use a load observer for the parallax image. This allows you to display a custom loader while the image is being loaded. If enabled, the default loader will be used unless you provide a custom loader in the "loader" slot.
     * @type {boolean}
     * @default false
     */

    export let image: string = "";
    export let alt: string = "";
    export let height: string = "300px";
    export let width: string = "100%";
    export let speed: number = 0.5;
    export let position: [number, number] = [0, 0];
    export let loadObserver: boolean = true;

    let scroll: number;
    let loading = true;

    const onLoad = createLoadObserver(() => {
        loading = false;
    });

    $: {
        if (speed < -2) {
            speed = -2;
        } else if (speed > 2) {
            speed = 2;
        }
    }
</script>

<svelte:window bind:scrollY={scroll} />

<div class="parallax-wrapper" style="height: {height}; width: {width};">
    <img
        src={image}
        class="parallax"
        {alt}
        {...$$restProps}
        on:load={loadObserver ? onLoad : null}
        style:transform={`translate(${position[0] - 50}%, ${
            position[1] - 50
        }%) translateY(${scroll * speed}px)`}
    />
    {#if loading && loadObserver}
        <div class="loader">
            <slot name="loader"><Loader size="xsmall" speed="fast" /></slot>
        </div>
    {/if}
</div>

<style lang="scss">
    .parallax-wrapper {
        overflow: hidden;
        position: relative;
    }

    .parallax {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
