<script>
  import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
  import { parallaxes} from './constants';
</script>

<h1>Parallaxes</h1>

<h3>
  {"import { Parallax } from 'mysvelte-ui';"}<br />
  [.Video]
</h3>

{#each parallaxes as parallax}
  <DisplayCard
    id={parallax.id}
    header={parallax.header}
    examples={parallax.examples}
    description={parallax.description}
    table={parallax.table}
    type={parallax.type}
  />
{/each}