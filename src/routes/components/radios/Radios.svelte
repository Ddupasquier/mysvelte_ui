<script lang="ts">
  import DisplayCard from "../../ui_components/displayCard/DisplayCard.svelte";
  import { radios } from "../../../../docs/Radio_docs";
</script>

<h1>Radios</h1>

<h3>
  {"import { Radio } from 'mysvelte-ui';"}
</h3>

{#each radios as radio}
  <DisplayCard
    id={radio.id}
    header={radio.header}
    examples={radio.examples}
    description={radio.description}
    table={radio.table}
    type={radio.type}
  />
{/each}
