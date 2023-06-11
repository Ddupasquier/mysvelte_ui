<script lang="ts">
  import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
  import { inputs } from '../../../../docs/Input_docs';
</script>

<h1>Inputs</h1>

<h3>
  {"import { Input } from 'mysvelte-ui';"}<br />
  [.Prefix, .Number, .Date, .Time, .DateTime, .Color]
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
