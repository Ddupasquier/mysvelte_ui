<script lang="ts">
  import { createAndAnimateCircle } from "$lib/animations/buttonAnimations";
  import { afterUpdate, onMount } from "svelte";

  /**
* determines the propName of the component.
@prop {boolean} disabled - determines if the button is disabled.
*/
  export let disabled: boolean = false;
  export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
    "medium";
  export let background: string = "#c50eff";
  export let animated: boolean = false;
  export let color: string = "#fff";
  export let text: string = "";
  export let isLoading: boolean = false;
  export let isError: boolean = false;
  export let style: string = "";

  const sizeValues: Record<typeof size, string> = {
    xsmall: "0.125rem 0.25rem",
    small: "0.25rem 0.5rem",
    medium: "0.5rem 1rem",
    large: "0.75rem 1.5rem",
    xlarge: "1rem 2rem",
  };

  let buttonStyle = "";
  let buttonRef: HTMLButtonElement;

  const removeBackgroundStyle = (styleString: string): string => {
    return styleString.replace(/background:\s*[^;]+;?/, "");
  };

  const updateButtonStyle = () => {
    let baseStyle = `background: ${background}; color: ${color}; padding: ${sizeValues[size]}; ${style};`;

    let additionalStyle = "";

    if (disabled) {
      additionalStyle = `background: #ccc; pointer-events: none; padding: ${
        sizeValues[size]
      }; ${removeBackgroundStyle(style)};`;
    } else if (isLoading) {
      additionalStyle = `background: #ccc; pointer-events: none; color: ${color}; border: 2px solid ${background}; padding: ${sizeValues[size]}; ${style};`;
    } else if (isError) {
      additionalStyle = `background: #ccc; pointer-events: none; color: ${color}; border: 2px solid red; padding: ${sizeValues[size]}; ${style};`;
    }

    buttonStyle = `${baseStyle} ${additionalStyle}`.trim();
  };

  onMount(updateButtonStyle);

  afterUpdate(updateButtonStyle);

  $: {
    updateButtonStyle();
  }
</script>

<button
  {disabled}
  {...$$restProps}
  style={buttonStyle}
  class={isLoading ? "loading" : isError ? "error" : ""}
  on:click
  on:click={(e) => createAndAnimateCircle(buttonRef, animated, e)}
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
  on:blur
  bind:this={buttonRef}
>
  <slot>{text}</slot>
</button>

<style lang="scss">
  button {
    position: relative;
    border: none;
    border-radius: 0.3rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    height: fit-content;
    width: fit-content;
    overflow: hidden;
  }

  .loading {
    animation: double-pulse-gray 1.5s infinite ease-in-out;
  }

  .error {
    animation: double-pulse-red 1.5s infinite ease-in-out;
  }

  @keyframes double-pulse-gray {
    0% {
      box-shadow: 0 0 5rem 1rem rgba(0, 0, 0, 0) inset;
    }
    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2) inset;
    }
  }

  @keyframes double-pulse-red {
    0% {
      box-shadow: 0 0 5rem 1rem rgba(0, 0, 0, 0) inset;
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.5) inset;
    }
  }

  :global(.btn-circle) {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.5s;
    z-index: 1;
    animation: circle 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
  }

  @keyframes circle {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(10);
    }
  }
</style>
