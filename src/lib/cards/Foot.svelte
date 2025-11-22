<script lang="ts">
  /**
   * @component Card.Foot
   *
   * @prop background
   * @description Background color for the footer area.
   * @type {string}
   * @default "transparent"
   *
   * @prop color
   * @description Text color for the footer.
   * @type {string}
   * @default "#000"
   *
   * @prop style
   * @description Inline styles applied to the footer container.
   * @type {string}
   * @default ""
   */
  export let background: string = 'transparent';
  export let style: string = '';
  export let color: string = '#000';

  $: footStyle = `background: ${background}; color: ${color}; ${style}`;
</script>

<div
  class="foot"
  style={footStyle}
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
