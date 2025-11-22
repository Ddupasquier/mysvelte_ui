<script lang="ts">
    import { Loader } from "$lib";
    import { createLoadObserver } from "$lib/utilities";

    /**
     * @component Parallax
     *
     * @prop image!
     * @description URL of the image used for the parallax effect.
     * @type {string}
     * @default ""
     *
     * @prop alt!
     * @description Alt text for the image.
     * @type {string}
     * @default ""
     *
     * @prop height
     * @description Height of the parallax viewport.
     * @type {string}
     * @default "300px"
     *
     * @prop width
     * @description Width of the parallax viewport.
     * @type {string}
     * @default "100%"
     *
     * @prop speed
     * @description Parallax speed multiplier (clamped between -2 and 2).
     * @type {number}
     * @default 0.5
     *
     * @prop position
     * @description Starting position of the image as [x%, y%].
     * @type {[number, number]}
     * @default [0, 0]
     *
     * @prop loadObserver
     * @description Show loader slot until image load completes.
     * @type {boolean}
     * @default true
     *
     * @prop ariaLabel
     * @description Accessible label for the image.
     * @type {string}
     * @default "Parallax image"
     */

    export let image: string = "";
    export let alt: string = "";
    export let height: string = "300px";
    export let width: string = "100%";
    export let speed: number = 0.5;
    export let position: [number, number] = [0, 0];
    export let loadObserver: boolean = true;
    export let ariaLabel: string = "Parallax image";

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
        aria-label={ariaLabel}
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
