<script>
  import NavBar from './NavBar.svelte';
  import './styles.scss';
</script>

<div class="app">
  <NavBar />
  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 1400px) {
    .app {
      flex-direction: column;
    }
  }
</style>
