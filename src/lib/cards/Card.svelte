<script lang="ts">
  import { onMount } from "svelte";

  /**
   * @component Card
   *
   * @prop background
   * @description Background color of the card container.
   * @type {string}
   * @default "transparent"
   *
   * @prop style
   * @description Additional inline styles for the card container.
   * @type {string}
   * @default ""
   *
   * @prop color
   * @description Text color inside the card.
   * @type {string}
   * @default "#000"
   *
   * @prop hover
   * @description Enables hover elevation/shadow.
   * @type {boolean}
   * @default false
   */
  export let background: string = "transparent";
  export let style: string = "";
  export let color: string = "#000";
  export let hover: boolean = false;

  const baseClass = ["card"];
  $: classString = [...baseClass, hover && "hover"].filter(Boolean).join(" ");
  $: cardStyle = `background: ${background}; color: ${color}; ${style}`;
</script>

<!-- ! Goal is to reduce amount of JS being shipped and bring uniformity to code base-->
<!-- TODO: Alter other components to have a similar structure to this, where applicable -->
<!-- ! classList, onMount set classList, CSS for styles, make sure to allow for style overrides -->

<div
  class={classString}
  style={cardStyle}
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
    transition: all 0.5s;

    &.hover {
      &:hover {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        transform: translateY(-0.2rem);
      }
    }
  }
</style>
