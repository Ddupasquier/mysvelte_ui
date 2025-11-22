<script lang="ts">
  /**
   * @component Spacer
   * @description Full-width block element used to create vertical rhythm or separation.
   *
   * @prop height
   * @description Height of the spacer (any valid CSS length).
   * @type {string}
   * @default "0"
   *
   * @prop width
   * @description Width of the spacer.
   * @type {string}
   * @default "100%"
   *
   * @prop style
   * @description Additional inline styles applied to the spacer.
   * @type {string}
   * @default ""
   */
  export let height = "0";
  export let width = "100%";
  export let style = "";

  $: spacerStyle = `
    height: ${height};
    width: ${width};
    ${style}
  `;
</script>

<!-- Spacer: full-width block element to create vertical rhythm -->
<div class="spacer" style={spacerStyle}></div>

<style lang="scss">
  .spacer {
    width: 100%;
  }
</style>
