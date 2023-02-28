<script lang="ts">
  import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
  import { cards } from './constants';
</script>

<h1>Cards</h1>

<h3>
  {"import { Card } from 'mysvelte-ui';"}<br />
  [.Head, .Content, .Foot]
</h3>

{#each cards as card}
  <DisplayCard
    id={card.id}
    header={card.header}
    examples={card.examples}
    description={card.description}
    type={card.type}
  />
{/each}