<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import logo from '$lib/images/svelte-logo.svg';
</script>

<div class="sidebar">
  <nav>
    <object
      type="image/svg+xml"
      data={logo}
      class="logo"
      title="my_svelte_ui"
    />
    <ul>
      <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
        <a href="/about">About</a>
      </li>
      <li aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}>
        <a href="/blog">Blog</a>
      </li>
      <li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</div>

<style lang="scss">
  .sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 100vh;
  }

  nav {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--menu-color);
  }

  .logo {
    width: 5rem;
    padding: 1rem;
    fill: var(--color-theme-1);
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
    border-left: var(--size) solid var(--color-theme-1);
  }

  nav a {
    display: flex;
    align-items: center;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }

  @media screen and (max-width: 1250px) {
    .sidebar {
      position: relative;
      flex-direction: row;
      height: auto;
      width: 100vw;
    }

    .logo {
      width: 3rem;
      padding: 0.5rem;
    }

    nav {
      width: 100%;
      flex-direction: row;
      height: auto;

      ul {
        width: 100%;
        flex-direction: row;
        justify-content: flex-end;
      }

      li[aria-current='page']::before {
        --size: 8px;
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: 40%;
        right: calc(100% - var(--size));
        border: var(--size) solid transparent;
        border-top: var(--size) solid var(--color-theme-1);
      }
    }
  }
</style>
