<script lang="ts">
  export let background: string = 'transparent';
  export let style: string = '';
  export let color: string = '#fff';
</script>

<div
  class="foot"
  style="background: {background}; color: {color}; {style}"
  {...$$restProps}
>
  <slot />
</div>

<style lang="scss">
  .foot {
    padding: 0.5rem 1rem;
    text-align: right;
    border-radius: 0 0 0.5rem 0.5rem;
  }
</style>
