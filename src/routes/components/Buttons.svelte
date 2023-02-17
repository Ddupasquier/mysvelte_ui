<script>
  import DisplayCard from '$lib/DisplayCard.svelte';
  import { buttons } from './constants';
</script>

<h1>Buttons</h1>

<h3>
  {"import { Button } from 'mysvelte-ui';"}
</h3>

{#each buttons as button}
  <DisplayCard
    header={button.header}
    examples={button.examples}
    description={button.description}
  />
{/each}
