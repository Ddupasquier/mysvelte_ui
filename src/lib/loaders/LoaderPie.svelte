<script lang="ts">
  // Props
  export let size: "small" | "medium" | "large" = "medium";
  export let color = "#FF00D9";
  export let background: string = "#fff";
  export let speed: "fast" | "medium" | "slow" = "medium";

  // Size Values
  const sizeValues: Record<typeof size, number> = {
    small: 50,
    medium: 70,
    large: 100,
  };

  // Speed Values
  const speedToDuration: Record<typeof speed, string> = {
    fast: "1s",
    medium: "2s",
    slow: "4s",
  };

  // Local state
  $: sizeInPx = `${sizeValues[size]}px`;
  $: duration = speedToDuration[speed];
</script>

<svg
  class="pie-spinner"
  width={sizeInPx}
  height={sizeInPx}
  viewBox="0 0 50 50"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    class="pie-circle"
    cx="25"
    cy="25"
    r="25"
    style="stroke: {color}; animation-duration: {duration}"
    fill={background}
  />
</svg>

<style>
  .pie-spinner {
    display: inline-block;
    border-radius: 50%;
  }

  .pie-circle {
    stroke-width: 50;
    stroke-dasharray: 0 157;
    stroke-dashoffset: -78.5;
    transform-origin: center;
    animation: fill-up ease-in-out infinite;
    border-radius: 50%;
    transform: rotate(90deg);
  }

  @keyframes fill-up {
    0% {
      stroke-dasharray: 0 157;
    }
    50% {
      stroke-dasharray: 157 0;
    }
    100% {
      stroke-dasharray: 0 157;
    }
  }
</style>
