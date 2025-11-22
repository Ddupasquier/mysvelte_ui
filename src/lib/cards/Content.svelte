<script lang="ts">
  /**
   * @component Card.Content
   *
   * @prop background
   * @description Background color for the card content area.
   * @type {string}
   * @default "transparent"
   *
   * @prop color
   * @description Text color for the content area.
   * @type {string}
   * @default "#000"
   *
   * @prop style
   * @description Inline styles applied to the content container.
   * @type {string}
   * @default ""
   */
  export let background: string = 'transparent';
  export let style: string = '';
  export let color: string = '#000';

  $: contentStyle = `background: ${background}; color: ${color}; ${style}`;
</script>

<div
  class="content"
  style={contentStyle}
  {...$$restProps}
>
  <slot />
</div>

<style lang="scss">
  .content {
    display: flex;
    flex: 1;
    padding: 1rem;
    height: 100%;
    overflow-y: auto;
  }
</style>
