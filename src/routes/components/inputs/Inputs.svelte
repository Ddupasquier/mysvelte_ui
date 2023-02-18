<script>
  import DisplayCard from '$lib/DisplayCard.svelte';
  import { inputs } from './constants';
</script>

<h1>Inputs</h1>

<h3>
  {"import { Input } from 'mysvelte-ui';"}
</h3>

{#each inputs as button}
  <DisplayCard
    id={button.id}
    header={button.header}
    examples={button.examples}
    description={button.description}
  />
{/each}
