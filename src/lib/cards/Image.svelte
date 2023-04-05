<script lang="ts">
  export let background: string = '#fff';
  export let style: string = '';
  export let color: string = '#000';
  export let image: string = '';
</script>

<div
  class="card"
  style="background-color: {background}; background-image: url({image}); color: {color}; {style}"
  {...$$restProps}
>
  <slot />
</div>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    width: 22rem;
    height: 20rem;
    background-size: cover;
    background-position: center;
  }
</style>
