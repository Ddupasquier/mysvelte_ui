<script lang="ts">
  // Props
  /**
   * @component Loader.Pie
   *
   * @prop size
   * @description Diameter preset for the pie spinner.
   * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
   * @default "medium"
   *
   * @prop color
   * @description Stroke color for the spinner arc.
   * @type {string}
   * @default "#FF00D9"
   *
   * @prop background
   * @description Fill color for the circle background.
   * @type {string}
   * @default "#fff"
   *
   * @prop speed
   * @description Animation speed preset.
   * @type {"fast" | "medium" | "slow"}
   * @default "medium"
   *
   * @prop ariaLabel
   * @description Accessible label for screen readers.
   * @type {string}
   * @default "Loading"
   */
  export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
    "medium";
  export let color = "#FF00D9";
  export let background: string = "#fff";
  export let speed: "fast" | "medium" | "slow" = "medium";
  export let ariaLabel: string = "Loading";

  // Size Values
  const sizeValues: Record<typeof size, number> = {
    xsmall: 30,
    small: 50,
    medium: 70,
    large: 100,
    xlarge: 150,
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
  role="status"
  aria-live="polite"
  aria-label={ariaLabel}
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
