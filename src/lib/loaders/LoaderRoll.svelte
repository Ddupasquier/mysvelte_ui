<script lang="ts">
    import { onMount } from "svelte";
    export let cats: any[] = [
        "https://i0.hippopx.com/photos/324/623/626/cat-black-and-white-animals-black-preview.jpg",
        "https://i0.hippopx.com/photos/405/86/365/cat-black-cat-thoughtful-pet-preview.jpg",

        "https://img.rawpixel.com/private/static/images/website/2022-05/upwk61856994-wikimedia-image-kowduagi.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2e3d9ade5e2b744c4b8c2f2a44c6294a",

        "https://i0.hippopx.com/photos/149/81/199/cat-black-cat-snow-black-color-preview.jpg",
        "https://images.pexels.com/photos/37337/cat-silhouette-cats-silhouette-cat-s-eyes.jpg",
    ];

    let currentDiv = 1;
    let rotation = 0;
    let container: HTMLDivElement;

    const animate = () => {
        const numItems = cats.length;
        if (numItems > 1) {
            rotation -= 360 / numItems;
            container.style.transform = `translateZ(-200px) rotateY(${rotation}deg)`;
            currentDiv = (currentDiv % numItems) + 1;
        }
    };

    onMount(() => {
        setInterval(animate, 1000);
    });
</script>

<div class="container" bind:this={container}>
    {#each cats as cat, i}
        <div
            class="box {i === currentDiv - 1 ? 'visible' : 'hidden'}"
            style="transform: rotateY({i *
                (360 / cats.length)}deg) translateZ(100px);"
        >
            <img src={cat} alt="cat"/>
        </div>
    {/each}
</div>

<style lang="scss">
    .container {
        width: 140px;
        height: 200px;
        position: relative;
        transform-style: preserve-3d;
        transform-origin: center;
        transition: 0.5s ease;
    }

    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 140px;
        height: 200px;
        // background-color: #c50eff;
        opacity: 0;
        transition: opacity 0.5s ease;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .visible {
        opacity: 1;
    }

    .hidden {
        opacity: 0;
    }
</style>
