<script lang="ts">
  export let examples: any[] = [];
</script>

<div class="examples">
  {#each examples as example}
    <svelte:component this={example.component} {...example.props}>
      {#each example.props.nested as nested}
        <svelte:component this={nested.component} {...nested.props}>
          {nested.props.slot}
        </svelte:component>
      {/each}
    </svelte:component>
  {/each}
</div>

<style lang="scss">
  .examples {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
  }
</style>
