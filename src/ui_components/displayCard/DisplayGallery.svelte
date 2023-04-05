<script lang="ts">
  export let examples: any[] = [];
</script>

<div class="examples">
  {#each examples as example, i}
    {#if example.props.nested}
      <svelte:component this={example.component} {...example.props} style='flex: 1'>
        {#each example.props.nested as nested}
          <svelte:component this={nested.component} {...nested.props}>
            {nested.props.slot}
          </svelte:component>
        {/each}
      </svelte:component>
    {:else}
      <svelte:component
        this={example.component}
        {...example.props}
        on:click={example.props['on:click']}
        >{example.props.text}</svelte:component
      >
    {/if}
  {/each}
</div>

<style lang="scss">
  // TODO create carousel wheel
  .examples {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: stretch;
    gap: 1rem;
    margin: 1rem 0;
    height: fit-content;
  }
</style>
