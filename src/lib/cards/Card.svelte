<script lang="ts">
  export let background: string = "#fff";
  export let style: string = "";
  export let color: string = "#000";
  export let hover: boolean = true;
</script>

<div
  class={`card ${hover ? "hover" : ""}`}
  style="background: {background}; color: {color}; {style}"
  {...$$restProps}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
  on:blur
>
  <slot />
</div>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    width: 22rem;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  }

  .card:hover {
    box-shadow: 0 .2rem 1rem .5rem rgba(0, 0, 0, 0.1);
    transform: scale(1.01) translateY(-0.5rem);
  }
</style>
