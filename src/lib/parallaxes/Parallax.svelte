<script lang="ts">
    export let image: string = "";
    export let alt: string = "";
    export let height: string = "300px";
    export let width: string = "100%";
    export let speed: number = 0.5;
    export let position: [number, number] = [0, 0];

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
        style:transform={`translate(${position[0] - 50}%, ${
            position[1] - 50
        }%) translateY(${scroll * speed}px)`}
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
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>
