<script lang="ts">
  export let background: string = 'transparent';
  export let style: string = '';
  export let color: string = '#fff';
</script>

<div
  class="content"
  style="background: {background}; color: {color}; {style}"
  {...$$restProps}
>
  <slot />
</div>

<style lang="scss">
  .content {
    padding: 1rem;
    overflow-y: auto;
  }
</style>
