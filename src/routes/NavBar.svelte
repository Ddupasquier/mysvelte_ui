<script>
  import { page } from '$app/stores';
  import { NavComponentOptions } from '$lib/constants';
  import { slide } from 'svelte/transition';
  import logo from '$lib/images/svelte-logo.svg';
  import FireButton from '$lib/buttons/FireButton.svelte';
  import github from '$lib/images/github.svg';
  import Search from '$lib/Search.svelte';

  $: optionsOpen = false;
</script>

<div class="sidebar">
  <nav>
    <div class="top">
      <div class="logo">
        <object type="image/svg+xml" data={logo} title="my_svelte_ui" />
        <div class="search-container">
          <Search />
        </div>
      </div>

      <ul>
        <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
          <a href="/">Home</a>
        </li>

        <div class="option-container">
          <li
            aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
          >
            <button on:click={() => (optionsOpen = !optionsOpen)}
              >Components</button
            >
          </li>

          {#if optionsOpen}
            <div
              class="options"
              transition:slide={{ delay: 100, duration: 200 }}
            >
              <ul>
                {#each NavComponentOptions as option}
                  <li
                    aria-current={$page.url.pathname ===
                    '/components' + option.path
                      ? 'page'
                      : undefined}
                  >
                    <a href={'/components' + option.path}>{option.name}</a>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </div>

        <li
          aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}
        >
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <FireButton>
        <button class="github">
          <object type="image/svg+xml" data={github} title="github" />
        </button>
      </FireButton>
    </div>
  </nav>
</div>

<style lang="scss">
  .sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 100vh;
    z-index: 1000;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background-color: var(--menu-color);
  }

  .logo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    position: relative;
    padding: 0.5rem 1rem;
  }

  li[aria-current='page']::before {
    --size: 8px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 6px;
    left: 0;
    right: calc(100% - var(--size));
    border: var(--size) solid transparent;
    border-left: var(--size) solid black;
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
    margin-left: 1rem;
    a {
      font-size: 0.7rem;
    }
  }

  a:hover {
    color: var(--color-theme-1);
  }

  .bottom {
    align-self: center;
  }

  .github {
    z-index: 1;
    background: #f0c1ff;
    border: none;
    border-radius: 50rem;
    width: 3.45rem;
    aspect-ratio: 1/1;
    position: relative;
    top: 1.76rem;
    left: -0.1rem;
    cursor: pointer;
    object {
      &:active {
        animation: bouncy 0.2s ease-in-out;
      }
    }
  }

  @keyframes bouncy {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    75% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 1250px) {
    .sidebar {
      position: relative;
      flex-direction: row;
      height: auto;
      width: 100vw;
    }

    .logo {
      object {
        width: 70px;
      }
    }

    nav {
      width: 100%;
      flex-direction: row;
      height: auto;
      padding-right: 0.5rem;

      ul {
        width: 100%;
        flex-direction: row;
        justify-content: flex-end;
      }

      li[aria-current='page']::before {
        border: none;
      }
    }

    .options ul {
      flex-direction: column;
    }

    .options {
      margin: 0;
    }

    .top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }

    .bottom {
      display: none;
    }
  }

  .search-container {
    position: absolute;
    bottom: -1rem;
    left: 6.4rem;
    height: fit-content;
    width: fit-content;
  }
</style>
