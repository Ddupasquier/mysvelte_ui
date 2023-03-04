<script lang="ts">
  import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
  import { inputs } from './constants';
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
    table={input.table}
    type={input.type}
  />
{/each}
