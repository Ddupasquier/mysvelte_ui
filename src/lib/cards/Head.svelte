<script lang="ts">
  /**
   * @component Card.Head
   *
   * @prop background
   * @description Background color for the card header.
   * @type {string}
   * @default "transparent"
   *
   * @prop color
   * @description Text color for the header.
   * @type {string}
   * @default "#000"
   *
   * @prop style
   * @description Inline styles applied to the header container.
   * @type {string}
   * @default ""
   */
  export let background: string = 'transparent';
  export let style: string = '';
  export let color: string = '#000';

  $: headStyle = `background: ${background}; color: ${color}; ${style}`;
</script>

<div
  class="head"
  style={headStyle}
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
