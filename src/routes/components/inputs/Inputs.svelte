<script lang="ts">
  // import { Input } from '$lib';
  import DisplayCard from '../../../ui_components/DisplayCard.svelte';
  import { inputs } from './constants';

  // $: val = '';
</script>

<h1>Inputs</h1>

<h3>
  {"import { Input } from 'mysvelte-ui';"}<br />
  [.Prefix]
</h3>

{#each inputs as input}
  <DisplayCard
    id={input.id}
    header={input.header}
    examples={input.examples}
    description={input.description}
  />
{/each}
