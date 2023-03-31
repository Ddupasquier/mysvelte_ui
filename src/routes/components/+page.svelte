<script lang="ts">
  import Banner from "$lib/assets/banner.png";

  import { page } from "$app/stores";
  import Checkboxes from "./checkboxes/Checkboxes.svelte";
  import Loaders from "./loaders/Loaders.svelte";
  import Dropdowns from "./dropdowns/Dropdowns.svelte";
  import Radios from "./radios/Radios.svelte";
  import Popovers from "./popovers/Popovers.svelte";
  import Buttons from "./buttons/Buttons.svelte";
  import Inputs from "./inputs/Inputs.svelte";

  import Cards from "./cards/Cards.svelte";

  $: items = $page.url.searchParams.get("items");
  $: console.log(items)
  $: capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<svelte:head>
  <title>MySvelteUI - {capitalize(items || "Component")}</title>
  <meta
    name="description"
    content="Dive into our detailed Component Documentation, featuring individual views for each component to enhance understanding and ease of use. Empower your development journey with clear instructions, examples, and best practices for seamless integration."
  />
  <meta property="og:title" content="MySvelteUI - {capitalize(items || "Component")}" />
  <meta
    property="og:description"
    content="Dive into our detailed Component Documentation, featuring individual views for each component to enhance understanding and ease of use. Empower your development journey with clear instructions, examples, and best practices for seamless integration."
  />
  <meta property="og:image" content={Banner} />
</svelte:head>

{#if items === "buttons"}
  <Buttons />
{:else if items === "inputs"}
  <Inputs />
{:else if items === "cards"}
  <Cards />
{:else if items === "popovers"}
  <Popovers />
{:else if items === "radios"}
  <Radios />
{:else if items === "dropdowns"}
  <Dropdowns />
{:else if items === "loaders"}
  <Loaders />
{:else if items === "checkboxes"}
  <Checkboxes />
{:else}
  <div class="oops">
    <h1>Components</h1>
    <p>
      This is where some components would be... If there were any... <span
        class="shrug">¯\_(ツ)_/¯</span
      >
    </p>
    <p>
      If you have any questions or suggestions, please feel free to contact me.
    </p>
  </div>
{/if}

<style lang="scss">
  .shrug {
    font-size: 1.5rem;
    font-weight: 900;
  }

  .oops {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    text-align: center;
  }
</style>
