<script>
  import DisplayCard from "../../ui_components/displayCard/DisplayCard.svelte";
  import { spacers } from "../../../../docs/Spacer_docs";
</script>

<h1>Spacers</h1>

<h3>
  {"import { Spacer } from 'mysvelte-ui';"}
</h3>

{#each spacers as spacer}
  <DisplayCard
    id={spacer.id}
    header={spacer.header}
    examples={spacer.examples}
    description={spacer.description}
    table={spacer.table}
    type={spacer.type}
  />
{/each}
