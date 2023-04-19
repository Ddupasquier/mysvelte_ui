<script lang="ts">
  // Imports
  import { createAndAnimateCircle } from "$lib/animations/buttonAnimations";
  import { onMount } from "svelte";

  // Props
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

  // Constants
  const sizeValues: Record<typeof size, string> = {
    xsmall: "0.125rem 0.25rem",
    small: "0.25rem 0.5rem",
    medium: "0.5rem 1rem",
    large: "0.75rem 1.5rem",
    xlarge: "1rem 2rem",
  };

  // Variables
  let classList = ["button"];
  let classString = "";
  let buttonStyle = "";

  // Functions
  const updateButtonStyle = () => {
    if (disabled || isError) {
      buttonStyle = `background: #ccc; padding: ${sizeValues[size]}; ${style}`;
    } else if (isLoading) {
      buttonStyle = `outline: solid 3px ${background}; outline-offset: -3px; background: #ccc; padding: ${sizeValues[size]}; ${style}`;
    } else {
      buttonStyle = `background: ${background}; color: ${color}; padding: ${sizeValues[size]}; ${style}`;
    }
  };

  // Lifecycle Hooks
  onMount(() => {
    if (isLoading) {
      classList.push("loading");
    } else if (isError) {
      classList.push("error");
    }

    updateButtonStyle();
    classString = classList.join(" ");
  });

  // Reactive Statements
  $: classString = classList.join(" ");
  $: updateButtonStyle();

  // Refs
  let buttonRef: HTMLButtonElement;
</script>

<button
  {disabled}
  {...$$restProps}
  class={classString}
  style={buttonStyle}
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
  .button {
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
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;

    &.loading {
      animation: double-pulse-gray 1.5s infinite ease-in-out;
    }

    &.error {
      animation: double-pulse-red 1.5s infinite ease-in-out;
    }
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
