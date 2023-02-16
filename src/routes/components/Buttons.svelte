<script>
  import DisplayCard from '$lib/DisplayCard.svelte';
  import { buttons } from './constants';
</script>

<h1>Buttons</h1>

{#each buttons as button}
  <DisplayCard
    header={button.header}
    examples={button.examples}
    description={button.description}
  />
{/each}