<script>
  import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
  import { imageFilters} from '../../../../docs/ImageFilter_docs';
</script>

<h1>ImageFilters</h1>

<h3>
  {"import { ImageFilter } from 'mysvelte-ui';"}
</h3>

{#each imageFilters as imagefilter}
  <DisplayCard
    id={imagefilter.id}
    header={imagefilter.header}
    examples={imagefilter.examples}
    description={imagefilter.description}
    table={imagefilter.table}
    type={imagefilter.type}
  />
{/each}