<script lang="ts">
  import { onMount } from "svelte";

  // Props
  /**
   * @component Card
   *
   * @prop background
   * @description Defines the background color of the Card component. This can be any valid CSS color. The default color is transparent, allowing the Card to seamlessly blend into any background.
   * @type {string}
   * @default: "transparent"
   *
   * @prop style
   * @description Sets additional custom CSS styles for the Card component. This can be used to further customize the Card's appearance beyond the provided props.
   * @type {string}
   * @default: ""
   *
   * @prop color
   * @description Specifies the text color within the Card component. This can be any valid CSS color, offering full flexibility over the Card's text styling.
   * @type {string}
   * @default: "#000"
   *
   * @prop hover
   * @description Activates a hover effect on the Card component when set to true. This effect includes a subtle shadow and a slight upwards shift to give a floating impression, adding depth and interactivity to your interface.
   * @type {boolean}
   * @default: false
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
