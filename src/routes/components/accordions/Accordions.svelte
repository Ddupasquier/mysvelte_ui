<script>
  import DisplayCard from "../../../ui_components/displayCard/DisplayCard.svelte";
  import { accordions } from "./constants";
</script>

<h1>Accordions</h1>

<h3>
  {"import { Accordion } from 'mysvelte-ui';"}
</h3>

{#each accordions as accordion}
  <DisplayCard
    id={accordion.id}
    header={accordion.header}
    examples={accordion.examples}
    description={accordion.description}
    table={accordion.table}
    type={accordion.type}
  />
{/each}
