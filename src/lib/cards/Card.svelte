<script lang="ts">
  export let background: string = '#fff';
  export let style: string = '';
  export let color: string = '#000';
</script>

<div
  class="card"
  style="background: {background}; color: {color}; {style}"
  {...$$restProps}
>
  <slot />
</div>

<style lang="scss">
  .card {
    border-radius: 0.5rem;
    width: 22rem;
    height: fit-content;
  }
</style>
