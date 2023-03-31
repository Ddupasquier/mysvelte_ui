<script lang="ts">
  export let size = 50;
  export let strokeColor = '#ff00d9';
  export let duration = 2;
</script>

<style>
  .pie-spinner {
    display: inline-block;
    border-radius: 50%;
  }

  .pie-circle {
    fill: none;
    stroke-width: 50;
    stroke-dasharray: 0 157;
    stroke-dashoffset: -78.5;
    transform-origin: center;
    animation: fill-up linear infinite;
    border-radius: 50%;
    transform: rotate(90deg);
  }

  @keyframes fill-up {
    0% {
      stroke-dasharray: 0 157;
    }
    100% {
      stroke-dasharray: 157 0;
    }
  }
</style>

<svg
  class="pie-spinner"
  width="{size}px"
  height="{size}px"
  viewBox="0 0 50 50"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    class="pie-circle"
    cx="25"
    cy="25"
    r="25"
    style="stroke: {strokeColor}; animation-duration: {duration}s"
  />
</svg>