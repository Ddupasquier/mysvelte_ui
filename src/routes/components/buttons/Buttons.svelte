<script>
  import DisplayCard from '$lib/DisplayCard.svelte';
  import Input from '$lib/for-package/inputs/Input.svelte';
  import { buttons } from './constants';
</script>

<div class="search-container">
  <Input />
</div>

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
  />
{/each}

<style lang="scss">
  .search-container {
    display: flex;
    justify-content: flex-end;
  }
</style>
