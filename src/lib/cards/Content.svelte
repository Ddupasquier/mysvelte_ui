<script lang="ts">
  export let background: string = 'transparent';
  export let style: string = '';
  export let color: string = '#000';
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
    display: flex;
    flex: 1;
    padding: 1rem;
    height: 100%;
    overflow-y: auto;
  }
</style>
