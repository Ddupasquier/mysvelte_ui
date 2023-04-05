<script lang="ts">
  export let background: string = 'transparent';
  export let style: string = '';
  export let color: string = '#000';
</script>

<div
  class="head"
  style="background: {background}; color: {color}; {style}"
  {...$$restProps}
>
  <slot />
</div>

<style lang="scss">
  .head {
    padding: 1rem;
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 0.5rem 0.5rem 0 0;
  }
</style>
