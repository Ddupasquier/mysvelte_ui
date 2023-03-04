<script>
  import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
  import { buttons } from './constants';
</script>

<h1>Buttons</h1>

<h3>
  {"import { Button } from 'mysvelte-ui';"}
</h3>

{#each buttons as button}
  <DisplayCard
    id={button.id}
    header={button.header}
    examples={button.examples}
    description={button.description}
    table={button.table}
    type={button.type}
  />
{/each}
