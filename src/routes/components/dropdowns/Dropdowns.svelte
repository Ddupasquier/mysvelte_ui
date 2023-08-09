<script>
  import DisplayCard from "../../ui_components/displayCard/DisplayCard.svelte";
  import { dropdowns } from "./constants";
</script>

<h1>Dropdowns</h1>

<h3>
  {"import { Dropdown } from 'mysvelte-ui';"}
</h3>

{#each dropdowns as dropdown}
  <DisplayCard
    id={dropdown.id}
    header={dropdown.header}
    examples={dropdown.examples}
    description={dropdown.description}
    table={dropdown.table}
    type={dropdown.type}
  />
{/each}
