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

<script lang="ts">
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
  let svgElement: SVGSVGElement;
  onMount(() => {
      if (svgElement) {
          svgElement.setAttribute("fill", color);
      }
  });
</script>

<div class="loader-container" style={containerStyle}>
    <svg bind:this={svgElement} viewBox="0 0 24 24" style={loaderStyle}>
        {#if svg}
          {@html svg}
        {:else}
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
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
</style>