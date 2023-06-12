<script lang="ts">
    export let video: string = "";
    export let height: string = "300px";
    export let width: string = "100%";
    export let speed: number = 0.5;
    export let position: [number, number] = [0, 0];

    let scroll: number;
    let videoElement: HTMLVideoElement;
    let metaLoaded: boolean = false;

    $: {
        if (speed < -2) {
            speed = -2;
        } else if (speed > 2) {
            speed = 2;
        }
    }

    function handleLoadedMetadata(e: Event) {
        const target = e.target as HTMLVideoElement;
        if (target) {
            metaLoaded = true;
        }
    }

    function handleClick() {
        if (videoElement) {
            if (videoElement.paused) {
                videoElement.play();
            } else {
                videoElement.pause();
            }
        }
    }
</script>

<svelte:window bind:scrollY={scroll} />

<div class="parallax-wrapper" style="height: {height}; width: {width};">
    <video
        bind:this={videoElement}
        class="parallax"
        {...$$restProps}
        style:transform={`translate(${position[0] - 50}%, ${
            position[1] - 50
        }%) translateY(${scroll * speed}px)`}
        loop
        muted
        playsinline
        on:loadedmetadata={handleLoadedMetadata}
    >
        <source src={video} type="video/mp4" />
        <source src={video} type="video/webm" />
        <source src={video} type="video/ogg" />

        Your browser does not support the video tag.
    </video>
    {#if metaLoaded}
        <svg
            class="play-button"
            viewBox="0 0 24 24"
            width="48"
            height="48"
            xmlns="http://www.w3.org/2000/svg"
            on:click={handleClick}
            on:keydown={handleClick}
        >
            <path d="M8 5v14l11-7z" />
            <path d="M0 0h24v24H0z" fill="none" />
        </svg>
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

    .play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        fill: #fff;
        opacity: 0.5;
        cursor: pointer;
        background: #000;
        border-radius: 50rem;
        transition: opacity 0.2s ease-in-out;
        &:hover {
            opacity: 1;
        }
    }
</style>
