<script lang="ts">
  import { page } from '$app/stores';
  import Buttons from './Buttons.svelte';
  import Inputs from './Inputs.svelte';
  import Segments from './Segments.svelte';

  $: items = $page.url.searchParams.get('items');
</script>


  {#if items === 'buttons'}
    <Buttons />
  {:else if items === 'inputs'}
    <Inputs />
  {:else if items === 'segments'}
    <Segments />
  {:else}
    <h1>Components</h1>
    <p>
      This is a collection of components that I have created for my Svelte UI. I
      have created these components to help me build applications faster and to
      help me learn Svelte. I hope that you find them useful.
    </p>
    <p>
      If you have any questions or suggestions, please feel free to contact me.
    </p>
  {/if}


<style lang="scss">

</style>
