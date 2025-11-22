<script lang="ts">
  import lost from "../assets/you_must_be_lost.mp4";
import Textareas from './textareas/Textareas.svelte';
import ImageFilters from './imagefilters/ImageFilters.svelte';
import Toggles from './toggles/Toggles.svelte';
import Accordions from './accordions/Accordions.svelte';
import Avatars from './avatars/Avatars.svelte';
  import { banner } from "../assets";
  import { page } from "$app/stores";

  import Parallaxes from "./parallaxes/Parallaxes.svelte";
  import Checkboxes from "./checkboxes/Checkboxes.svelte";
  import Loaders from "./loaders/Loaders.svelte";
  import Dropdowns from "./dropdowns/Dropdowns.svelte";
  import Radios from "./radios/Radios.svelte";
  import Popovers from "./popovers/Popovers.svelte";
  import Buttons from "./buttons/Buttons.svelte";
  import Inputs from "./inputs/Inputs.svelte";
  import Cards from "./cards/Cards.svelte";
import Spacers from './spacers/Spacers.svelte';
import Tables from './tables/Tables.svelte';
import Modals from './modals/Modals.svelte';

  $: items = $page.url.searchParams.get("items");
  $: capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<svelte:head>
  <title>MySvelteUI - {capitalize(items || "Component")}</title>
  <meta
    name="description"
    content="Dive into our detailed Component Documentation, featuring individual views for each component to enhance understanding and ease of use. Empower your development journey with clear instructions, examples, and best practices for seamless integration."
  />
  <meta
    property="og:title"
    content="MySvelteUI - {capitalize(items || 'Component')}"
  />
  <meta
    property="og:description"
    content="Dive into our detailed Component Documentation, featuring individual views for each component to enhance understanding and ease of use. Empower your development journey with clear instructions, examples, and best practices for seamless integration."
  />
  <meta property="og:image" content={banner} />
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
{:else if items === "parallaxes"}
  <Parallaxes />
{:else if items === 'avatars'}
<Avatars />
{:else if items === 'accordions'}
<Accordions />
{:else if items === 'toggles'}
<Toggles />
{:else if items === 'imagefilters'}
<ImageFilters />
{:else if items === 'textareas'}
<Textareas />
{:else if items === 'modals'}
<Modals />
{:else if items === 'tables'}
<Tables />
{:else if items === 'spacers'}
<Spacers />
{:else}
  <div class="oops">
    <h1>Oops</h1>
    <!-- embed import 'lost' as mp4 which plays on load only once and has no controls -->
    <video autoplay loop muted playsinline class="video">
      <source src={lost} type="video/mp4" />
    </video>
    <p>
      You must be lost. <br />
      Let's get you back on track.
    </p>
    <a href="/" class="shrug" aria-label="go home">¯\_(ツ)_/¯</a>
  </div>
{/if}

<style lang="scss">
  .shrug {
    color: #fff;
    background-color: #000;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1.5rem;
    font-weight: 900;
    cursor: pointer;
    text-decoration: none;
    animation: scale 0.5s ease-in-out infinite alternate;
  }

  @keyframes scale {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
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

  .video {
    width: 100%;
    max-width: 500px;
    margin: 1rem 0;
  }
</style>
