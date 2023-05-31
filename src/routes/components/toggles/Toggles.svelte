<script>
  import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
  import { toggles} from './constants';
</script>

<h1>Toggles</h1>

<h3>
  {"import { Toggle } from 'mysvelte-ui';"}
</h3>

{#each toggles as toggle}
  <DisplayCard
    id={toggle.id}
    header={toggle.header}
    examples={toggle.examples}
    description={toggle.description}
    table={toggle.table}
    type={toggle.type}
  />
{/each}