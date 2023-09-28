<script lang="ts">
  // Imports
  import { createAndAnimateCircle } from "$lib/animations/buttonAnimations";
  import { onMount } from "svelte";

  // Props
  /**
   * @component Button
   *
   * @prop size
   * @description Sets the size of the button. Choose from 'xsmall', 'small', 'medium', 'large', or 'xlarge'.
   * @type {string}
   * @default "medium"
   *
   * @prop background
   * @description Lets you personalize the button's background color with any valid CSS color.
   * @type {string}
   * @default "#C50EFF"
   *
   * @prop color
   * @description Changes the color of the button's text. Use any valid CSS color.
   * @type {string}
   * @default "#fff"
   *
   * @prop rounded
   * @description Determines if the button has rounded corners or not.
   * @type {boolean}
   * @default false
   *
   * @prop disabled
   * @description Determines if the button is clickable or not. When true, the button appears grayed out.
   * @type {boolean}
   * @default false
   *
   * @prop isLoading
   * @description If set to true, the button displays a loading spinner and becomes disabled. Great for indicating processing times!
   * @type {boolean}
   * @default false
   *
   * @prop isError
   * @description Switches the button to an error state when set to true. The button is disabled and displays an error border.
   * @type {boolean}
   * @default false
   *
   * @prop events
   * @description Allows you to add event listeners to the button such as on:click, on:mouseover, etc. The first argument passed to your event listener will be the event object.
   * @type {string}
   * @default ""
   *
   * @prop style
   * @description A versatile prop that accepts any valid CSS as a string. This way, you can add any additional styling you need.
   * @type {string}
   * @default ""
   *
   * @prop animated
   * @description Setting this to true makes the button animate on click. Adds a touch of dynamism to your UI.
   * @type {boolean}
   * @default false
   *
   * @prop icon
   * @description Use this to add an icon to your button. Accepts a valid html/xml string. Alternatively, use the `icon` slot.
   * @type {string}
   * @default null
   */

  export let disabled: boolean = false;
  export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
    "medium";
  export let background: string = "#C50EFF";
  export let animated: boolean = false;
  export let color: string = "#fff";
  export let text: string = "";
  export let rounded: boolean = true;
  export let isLoading: boolean = false;
  export let isError: boolean = false;
  export let style: string = "";

  // Variables
  let classList = ["button"];
  let classString = "";

  // Lifecycle Hooks
  onMount(() => {
    classList.push(size);
    if (rounded) {
      classList.push("rounded");
    }
    if (isLoading) {
      classList.push("loading");
    } else if (isError) {
      classList.push("error");
    }
    classString = classList.join(" ");
  });

  // Reactive Statements
  $: {
    classList = ["button", size];
    if (isLoading) {
      classList.push("loading");
    } else if (isError) {
      classList.push("error");
    }
    classString = classList.join(" ");
  }

  $: buttonStyle = `
    background: ${disabled || isError || isLoading ? "#ccc" : background};
    --bg-color: ${background};
    color: ${color};
    ${style}
  `;

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
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    height: fit-content;
    width: fit-content;
    overflow: hidden;
  }

  // Sizes
  .xsmall {
    padding: 0.125rem 0.25rem;
  }

  .small {
    padding: 0.25rem 0.5rem;
  }

  .medium {
    padding: 0.5rem 1rem;
  }

  .large {
    padding: 0.75rem 1.5rem;
  }

  .xlarge {
    padding: 1rem 2rem;
  }

  .rounded {
    border-radius: 50rem;
    &.xsmall {
      padding: 0.125rem 0.375rem; // Increased left and right padding
    }
    &.small {
      padding: 0.25rem 0.75rem; // Increased left and right padding
    }
    &.medium {
      padding: 0.5rem 1.25rem; // Increased left and right padding
    }
    &.large {
      padding: 0.75rem 1.75rem; // Increased left and right padding
    }
    &.xlarge {
      padding: 1rem 2.25rem; // Increased left and right padding
    }
  }

  // Loading and error styles
  .loading,
  .error {
    color: #fff;
  }

  .loading {
    outline: 3px solid var(--bg-color);
    outline-offset: -3px;
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
