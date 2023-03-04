<script>
  import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
  import { radials} from './constants';
</script>

<h1>Radials</h1>

<h3>
  {"import { Radial } from 'mysvelte-ui';"}
</h3>

{#each radials as radial}
  <DisplayCard
    id={radial.id}
    header={radial.header}
    examples={radial.examples}
    description={radial.description}
    table={radial.table}
    type={radial.type}
  />
{/each}