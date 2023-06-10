<script>
  import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
  import { checkboxes } from '../../../../docs/Checkbox_docs';
</script>

<h1>Checkboxes</h1>

<h3>
  {"import { Checkbox } from 'mysvelte-ui';"}
</h3>

{#each checkboxes as checkbox}
  <DisplayCard
    id={checkbox.id}
    header={checkbox.header}
    examples={checkbox.examples}
    description={checkbox.description}
    table={checkbox.table}
    type={checkbox.type}
  />
{/each}
