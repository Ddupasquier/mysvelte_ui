<script lang="ts">
  import { page } from '$app/stores';
  import Buttons from './buttons/Buttons.svelte';
  import Inputs from './inputs/Inputs.svelte';
  import Segments from './segments/Segments.svelte';

  $: items = $page.url.searchParams.get('items');
</script>

{#if items === 'buttons'}
  <Buttons />
{:else if items === 'inputs'}
  <Inputs />
{:else if items === 'segments'}
  <Segments />
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
