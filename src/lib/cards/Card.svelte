<script lang="ts">
  import { onMount } from "svelte";

  // Props
  /**
   * @component Card
   * @type {string} background - Background, Card background color, "transparent"
   * @type {string} style - Style, Card style, ""
   * @type {string} color - Color, Card text color, "#000"
   * @type {boolean} hover - Hover, Card hover effect, false
   */
  export let background: string = "transparent";
  export let style: string = "";
  export let color: string = "#000";
  export let hover: boolean = false;

  // initial === defaults
  let classList = ["card"];
  let classString = "";

  onMount(() => {
    if (hover) {
      classList.push("hover");
    }

    classString = classList.join(" ");
  });

  $: classString = classList.join(" ");
</script>

<!-- ! Goal is to reduce amount of JS being shipped and bring uniformity to code base-->
<!-- TODO: Alter other components to have a similar structure to this, where applicable -->
<!-- ! classList, onMount set classList, CSS for styles, make sure to allow for style overrides -->

<div
  class={classString}
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
    transition: all 0.5s;

    &.hover {
      &:hover {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        transform: translateY(-0.2rem);
      }
    }
  }
</style>
