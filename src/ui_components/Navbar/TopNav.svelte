<script lang="ts">
    import { page } from "$app/stores";
    import { slide } from "svelte/transition";

    import { NavComponentOptions } from "../constants";
    import { svelteLogo } from "../icons";

    import Search from "../Search.svelte";

    let optionsOpen = false;

    $: NavComponentOptions.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
</script>

<svelte:window
    on:click={(e) => {
        if (e.target instanceof HTMLElement) {
            if (!e.target.closest("ul")) {
                optionsOpen = false;
            }
        }
    }}
/>

<nav class="nav-top">
    <div class="logo">
        <object type="image/svg+xml" data={svelteLogo} title="my_svelte_ui" />
        <div class="search-container">
            <Search />
        </div>
    </div>

    <ul class="nav-items">
        <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
            <a href="/">Home</a>
        </li>

        <li
            aria-current={$page.url.pathname === "/contact"
                ? "page"
                : undefined}
        >
            <a href="/contact">Contact</a>
        </li>

        <li
            aria-current={$page.url.pathname === "/components"
                ? "page"
                : undefined}
            class="option-container"
        >
            <button on:click={() => (optionsOpen = !optionsOpen)}
                >Components</button
            >
        </li>

        {#if optionsOpen}
            <ul
                class="options"
                transition:slide={{ delay: 100, duration: 200 }}
            >
                {#each NavComponentOptions as option}
                    <li
                        aria-current={$page.url.pathname ===
                        "/components" + option.path
                            ? "page"
                            : undefined}
                    >
                        <a href={"/components" + option.path}>{option.name}</a>
                    </li>
                {/each}
            </ul>
        {/if}
    </ul>
</nav>

<style lang="scss">
    @use "src/routes/breakpoints.scss" as breakpoints;
    .nav-top {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 5rem;
        background-color: var(--menu-color);
        z-index: 1000;
    }

    .logo {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
    }

    .nav-items {
        position: relative;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: flex-end;
        flex-direction: row;
        list-style: none;
        li {
            position: relative;
            padding: 0.5rem 1rem;
        }
    }

    nav a,
    nav button {
        display: flex;
        align-items: center;
        color: var(--color-text);
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
        padding: 0;
        margin: 0;
        background: none;
        border: none;
        cursor: pointer;
    }

    .options {
        position: absolute;
        display: flex;
        flex-direction: column;
        list-style: none;
        background: var(--menu-color);
        border-bottom: 3px solid var(--purple);
        top: 5rem;
        right: 0;
        padding: 0;
        margin: 0;

        li {
            padding: 0.5rem 1rem;
            display: flex;
            justify-content: flex-end;
            transition: all 0.2s linear;
            &:hover {
                backdrop-filter: brightness(0.9);
            }
        }

        a {
            font-size: 0.7rem;
        }
    }

    a:hover,
    button:hover {
        color: var(--purple);
    }

    .search-container {
        position: absolute;
        bottom: -1rem;
        left: 6.4rem;
        height: fit-content;
        width: fit-content;
    }

    .logo {
        z-index: 2;
        object {
            width: 70px;
        }
    }

    .search-container {
        left: 4rem;
    }

    @media screen and (max-width: breakpoints.$sm-mobile-breakpoint) {
        .nav-items {
            justify-content: flex-end;
            flex-direction: column;
            padding: 0 0.5rem 0.5rem 0;
            li {
                padding: 0.1rem 0;
            }
        }

        .options {
            padding: 1rem;
        }

        .search-container {
            width: fit-content;
            left: 3rem;
        }
    }
</style>
