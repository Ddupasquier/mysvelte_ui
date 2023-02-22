<script lang="ts">
  import { Input } from '$lib';
  import DisplayCard from '../../../ui_components/DisplayCard.svelte';
  import { inputs } from './constants';

  $: val = '';
</script>

<h1>Inputs</h1>

<h3>
  {"import { Input } from 'mysvelte-ui';"}
</h3>

{#each inputs as button}
  <DisplayCard
    id={button.id}
    header={button.header}
    examples={button.examples}
    description={button.description}
  />
  <Input
    type="text"
    size="xlarge"
    bind:value={val}
    color="red"
    variant="outline"
    clearable={true}
  />
{/each}
