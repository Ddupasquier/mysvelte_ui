<script>
  import NavBar from '../ui_components/NavBar.svelte';
  import Footer from '../ui_components/Footer.svelte';
  import './styles.scss';
  import Analytics from '../ui_components/Analytics.svelte';
</script>

<Analytics />

<div class="app">
  <NavBar />
  <main>
    <slot />
    <Footer />
  </main>
</div>

<style lang="scss">
  @use 'src/routes/breakpoints.scss' as breakpoints;
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    position: relative;
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

  @media screen and (max-width: breakpoints.$col-breakpoint) {
    .app {
      flex-direction: column;
    }
  }
</style>
