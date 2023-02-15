<script lang="ts">
      export let disabled = true
</script>

<button disabled={disabled} class="button">
      {#if disabled}
            Disabled
      {:else}
            Enabled
      {/if}
</button>