<script lang="ts">
  import { onMount } from "svelte";
  import "./styles.scss";

  import { banner, waveBg } from "./assets";
  import { TopNav, SideNav } from "../ui_components/navbar";
  import Footer from "../ui_components/Footer.svelte";
  import DefaultModal from "../ui_components/modals/DefaultModal.svelte";

  import {
    defaultModalShown,
    defaultModalSlot,
  } from "../../src/stores/modalStore";
  import Analytics from "../ui_components/Analytics.svelte";

  let currentLayout: "row" | "column" = "row";
  let bgShown: boolean = true;
  let initialized = false;

  onMount(() => {
    checkScreenWidth();
    initialized = true;
  });

  function checkScreenWidth() {
    if (window.innerWidth > 1400) {
      currentLayout = "row";
    } else {
      currentLayout = "column";
    }

    if (window.innerWidth > 1025) {
      bgShown = true;
    } else {
      bgShown = false;
    }
  }
</script>

<svelte:head>
  <title>MySvelteUI</title>
  <meta
    name="description"
    content="Discover our intuitive Svelte component library, designed to simplify web application development for beginners and experienced developers alike. Save time with pre-built components, streamline your workflow, and boost productivity without compromising on quality or functionality."
  />
  <meta property="og:title" content="MySvelteUI" />
  <meta
    property="og:description"
    content="Discover our intuitive Svelte component library, designed to simplify web application development for beginners and experienced developers alike. Save time with pre-built components, streamline your workflow, and boost productivity without compromising on quality or functionality."
  />
  <meta property="og:image" content={banner} />
</svelte:head>

<svelte:window
  on:resize={() => {
    checkScreenWidth();
  }}
/>

<Analytics />

{#if initialized}
  <div class="app" style:background={bgShown ? `url(${waveBg}) no-repeat` : ""}>
    {#if currentLayout === "row"}
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
