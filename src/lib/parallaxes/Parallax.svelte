<!--  parallax -->
<script lang="ts">
    export let image: string;
    export let height: number;
    export let width: number;
    export let alt: string;
    export let speed: number = 0.5;

    let scroll: number;

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
        style:transform={`translate(-50%, -50%) translateY(${
            scroll * speed
        }px)`}
    />
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
        transform: translate(-50%, -50%);
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>
