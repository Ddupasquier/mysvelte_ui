<script lang="ts">
  export let disabled = true;
  export let color = '#c50eff';

  $: style = `background: ${color};`;
</script>

<button {disabled} class="button" {style}>
  {#if disabled}
    Disabled
  {:else}
    Enabled
  {/if}
</button>
