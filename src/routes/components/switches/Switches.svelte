<script>
  import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
  import { switches} from './constants';
</script>

<h1>Switchs</h1>

<h3>
  {"import { Switch } from 'mysvelte-ui';"}
</h3>

{#each switches as toggle}
  <DisplayCard
    id={toggle.id}
    header={toggle.header}
    examples={toggle.examples}
    description={toggle.description}
    table={toggle.table}
    type={toggle.type}
  />
{/each}