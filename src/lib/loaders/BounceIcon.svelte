<!-- <script lang="ts">
  import { onMount } from 'svelte';
  
  // Props
  export let color: string = "#c50eff";
  export let size: "small" | "medium" | "large" = "medium";
  export let style: string = "";
  export let svg: string = "";

  // Local state
  let containerStyle = "";
  let loaderStyle = "";

  // Size values
  const sizeValues: Record<typeof size, number> = {
      small: 10,
      medium: 15,
      large: 20,
  };

  // Update styles on prop changes
  $: containerStyle = `display: flex; align-items: center; justify-content: center; ${style}`;
  $: loaderStyle = `width: ${sizeValues[size]}px; height: ${sizeValues[size]}px;`;

  // Set SVG color
  onMount(() => {
      const svgElement = document.getElementById("svg-icon");
      if (svgElement) {
          svgElement.setAttribute("fill", color);
      }
  });
</script>

<div class="loader-container" style={containerStyle}>
    <svg id="svg-icon" viewBox="0 0 24 24" style={loaderStyle}>
        {#if svg}
          {@html svg}
        {:else}
          words
        {/if}
    </svg>
</div>

<style>
    .loader-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    svg {
        transform-origin: center;
        animation: bounce 0.6s infinite alternate;
    }

    @keyframes bounce {
        0% {
            transform: translateY(0) scale(1);
        }
        100% {
            transform: translateY(-10px) scale(1.5);
        }
    }
</style> -->
