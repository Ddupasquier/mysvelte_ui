<script>
  import { Popover } from '$lib';
  import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
  import { popovers } from './constants';
</script>

<h1>Popovers</h1>

<h3>
  {"import { Popover } from 'mysvelte-ui';"}
</h3>

{#each popovers as popover}
  <DisplayCard
    id={popover.id}
    header={popover.header}
    examples={popover.examples}
    description={popover.description}
    table={popover.table}
    type={popover.type}
  />
{/each}
