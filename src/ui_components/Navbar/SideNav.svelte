<script lang="ts">
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";

  import { NavComponentOptions } from "../constants";
  import { svelteLogo } from "../icons";

  import Search from "../Search.svelte";

  $: optionsOpen = false;

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

<aside class="sidebar">
  <div class="top">
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

      <div class="option-container">
        <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
          <button on:click={() => (optionsOpen = !optionsOpen)}
            >Components</button
          >
        </li>

        {#if optionsOpen}
          <ul class="options" transition:slide={{ delay: 100, duration: 200 }}>
            {#each NavComponentOptions as option}
              <li
                aria-current={$page.url.pathname === "/components" + option.path
                  ? "page"
                  : undefined}
              >
                <a href={"/components" + option.path}>{option.name}</a>
              </li>
            {/each}
          </ul>
        {/if}
      </div>

      <li aria-current={$page.url.pathname === "/contact" ? "page" : undefined}>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</aside>

<style lang="scss">
  @use "src/routes/breakpoints.scss" as breakpoints;
  .sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: fit-content;
    height: 100vh;
    background-color: var(--menu-color);
    z-index: 1000;
  }

  aside {
    display: flex;
    flex-direction: column;
    height: 100%;
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
    flex-direction: column;
    list-style: none;
    li {
      position: relative;
      padding: 0.5rem 1rem;
    }
  }

  li[aria-current="page"]::before {
    --size: 8px;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 6px;
    left: 0;
    right: calc(100% - var(--size));
    border: var(--size) solid transparent;
    border-left: var(--size) solid black;
  }

  aside a,
  aside button {
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
    position: relative;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
    list-style: none;
    li {
      padding: 0.2rem 0 0.2rem 1.5rem;
      transition: transform 0.2s linear;
      &:hover {
        transform: translateX(0.5rem);
      }
    }

    a {
      font-size: 0.7rem;
    }
  }

  a:hover {
    color: var(--color-theme-1);
  }

  .search-container {
    position: absolute;
    bottom: -1rem;
    left: 6.4rem;
    height: fit-content;
    width: fit-content;
  }
</style>
