<script lang="ts">
  import { onMount, beforeUpdate } from "svelte";
  
  import "./styles.scss";
  import SideNav from "../ui_components/Navbar/SideNav.svelte";
  import TopNav from "../ui_components/Navbar/TopNav.svelte";
  import Footer from "../ui_components/Footer.svelte";
  import DefaultModal from "../ui_components/modals/DefaultModal.svelte";

  import {
    defaultModalShown,
    defaultModalSlot,
  } from "../../src/stores/modalStore";
  import Analytics from "../ui_components/Analytics.svelte";

  let above1400 = true;
  let initialized = false;

  onMount(() => {
    checkScreenWidth();
    initialized = true;
  });

  function checkScreenWidth() {
    if (window.innerWidth > 1400) {
      above1400 = true;
    } else {
      above1400 = false;
    }
  }
</script>

<svelte:window
  on:resize={() => {
    checkScreenWidth();
  }}
/>

<Analytics />

{#if initialized}
  <div class="app">
    {#if above1400}
      <SideNav />
    {:else}
      <TopNav />
    {/if}
    <main>
      <slot />
      <Footer />
    </main>
  </div>
{/if}

{#if $defaultModalShown}
  <DefaultModal>
    {$defaultModalSlot}
  </DefaultModal>
{/if}

<style lang="scss">
  @use "src/routes/breakpoints.scss" as breakpoints;
  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  main {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    max-width: 64rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: breakpoints.$col-breakpoint) {
    .app {
      flex-direction: column;
      
    }
  }

  @media screen and (max-width: 1000px) {
    main {
      padding: 5rem;
    }
  }

  @media screen and (max-width: 600px) {
    main {
      padding: 3rem;
    }
  }

  @media screen and (max-width: breakpoints.$sm-mobile-breakpoint) {
    main {
      padding: 2rem;
    }
  }
</style>
