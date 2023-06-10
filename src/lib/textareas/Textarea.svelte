<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { fade } from "svelte/transition";

  // Props
/**
 * @component Textarea
 *
 * @prop variant
 * @description Determines the style variant of the textarea. Choose from "default", "line", or "outline" to customize the appearance.
 * @type {"default" | "line" | "outline"}
 * @default: "default"
 *
 * @prop size
 * @description Specifies the size of the textarea. Options include "xsmall", "small", "medium", "large", or "xlarge" to control its dimensions.
 * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
 * @default: "medium"
 *
 * @prop background
 * @description Sets the background color of the textarea. Accepts any valid CSS color value.
 * @type {string}
 * @default: "white"
 *
 * @prop color
 * @description Determines the text color of the textarea. Accepts any valid CSS color value.
 * @type {string}
 * @default: "#000"
 *
 * @prop placeholder
 * @description Specifies the placeholder text displayed in the textarea. Enter any valid string value.
 * @type {string}
 * @default: "Enter text"
 *
 * @prop value
 * @description Sets the initial value of the textarea. Provide any valid string value.
 * @type {string}
 * @default: ""
 *
 * @prop style
 * @description Applies custom CSS styles to the textarea. Use any valid CSS value to customize its appearance.
 * @type {string}
 * @default: ""
 *
 * @prop label
 * @description Determines whether to display a label for the textarea. Provide a boolean value to control its visibility.
 * @type {boolean}
 * @default: false
 *
 * @prop labelIn
 * @description Determines the position of the label within the textarea. Provide a boolean value to control its placement.
 * @type {boolean}
 * @default: false
 *
 * @prop labelColor
 * @description Sets the color of the label text in the textarea. Accepts any valid CSS color value.
 * @type {string}
 * @default: "#000"
 *
 * @prop disabled
 * @description Disables the textarea if set to `true`. Provide a boolean value to control its availability.
 * @type {boolean}
 * @default: false
 *
 * @prop clearable
 * @description Enables the clearable feature for the textarea. If `true`, a clear button will be displayed to remove the text.
 * @type {boolean}
 * @default: false
 *
 * @prop isError
 * @description Indicates whether the textarea has an error. If `true`, it visually highlights the input as erroneous.
 * @type {boolean}
 * @default: false
 *
 * @prop isLoading
 * @description Indicates whether the textarea is in a loading state. If `true`, it displays a loading spinner.
 * @type {boolean}
 * @default: false
 */
  export let variant: "default" | "line" | "outline" = "default";
  export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
    "medium";
  export let background: string = "white";
  export let color: string = "#000";
  export let placeholder: string = "Enter text";
  export let value: string = "";
  export let style: string = "";
  export let label: boolean = false;
  export let labelIn: boolean = false;
  export let labelColor: string = "#000";
  export let disabled: boolean = false;
  export let clearable: boolean = false;
  export let isError: boolean = false;
  export let isLoading: boolean = false;
  export let autoFocus: boolean = false;

  // Event dispatcher
  const dispatch = createEventDispatcher();

  // Variables
  let containerClassList = ["input"];
  let containerClassString = "";
  let readOnly: boolean = false;

  // Lifecycle Hooks
  onMount(() => {
    containerClassList.push(size);
    containerClassList.push(variant);
    if (isLoading) {
      containerClassList.push("loading");
    } else if (isError) {
      containerClassList.push("error");
    }
    containerClassString = containerClassList.join(" ");

    if (autoFocus) inputRef.focus()
  });

  // Reactive Statements
  $: {
    containerClassList = ["input", size, variant];
    if (isLoading) {
      containerClassList.push("loading");
    } else if (isError) {
      containerClassList.push("error");
    }
    containerClassString = containerClassList.join(" ");

    readOnly = disabled || isLoading || isError;
  }

  $: textareaStyle = `
 background: ${disabled || isError || isLoading ? "#ccc" : background};
  --color: ${color};
  color: ${color};
  ${style}
`;

  $: {
    if (labelIn) {
      placeholder = label ? "" : placeholder;
    }
  }

  // Handle input event
  const handleInput = (e: Event) => {
    if (e.target instanceof HTMLTextAreaElement) {
      value = e.target.value;
      dispatch("input", e);
    }
  };

  const clearInput = () => {
    value = "";
  };

  // Refs
  let inputRef: HTMLTextAreaElement;
</script>

<div class={containerClassString}>
  {#if label}
    {#if labelIn}
      <label class="label-in" for={$$restProps.id} style="color: {labelColor}"
        >{$$restProps.id}</label
      >
    {:else}
      <label class="label" for={$$restProps.id} style="color: {labelColor}"
        >{$$restProps.id}</label
      >
    {/if}
  {/if}
  <textarea
    bind:this={inputRef}
    id={label ? $$restProps.id : undefined}
    placeholder={label ? "" : placeholder}
    {value}
    {disabled}
    {...$$restProps}
    style={textareaStyle}
    readonly={readOnly}
    aria-disabled={readOnly}
    on:input={handleInput}
    on:input
    on:focus
    on:blur
    on:change
    on:click
    on:keydown
    on:keyup
  />
  <div class="options">
    {#if clearable && value !== ""}
      <button
        class="clear-button"
        on:click={clearInput}
        transition:fade={{ duration: 100 }}
        ><svg
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          ><title>Clear Input</title><path
            fill="currentColor"
            d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1 0-90.496z"
          /></svg
        ></button
      >
    {/if}
  </div>
</div>

<style lang="scss">
  .input {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    padding: 0;
    &:focus-within {
      .label-in {
        top: -0.25rem;
        transform: translateY(-100%) translateX(-15%);
        cursor: default;
        transition: all 0.3s ease-in-out;
      }
    }

    @mixin option-button {
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: all;
      height: 55%;
      aspect-ratio: 1/1;
      padding: 0.25rem;
      border-radius: 50rem;
      border: none;
      background: rgba(131, 131, 131, 0.5);
      cursor: pointer;
      font-size: 1rem;
      color: #666666;
      transition: opacity 0.2s ease-in-out;
    }
    .options {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: none;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 0.5rem;
      padding-right: 5%;
      box-sizing: border-box;
      pointer-events: none;
      .clear-button {
        @include option-button;
      }
    }
  }

  textarea {
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    border: none;
    background: inherit;
    color: inherit;
    // transition: all 0.1s ease-in-out;
    &:focus {
      outline: 3px solid currentColor;
    }
  }

  .line textarea {
    border-radius: 0;
    border-bottom: 3px solid rgba(131, 131, 131, 0.5);
    transition: border-color 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-bottom-color: currentColor;
    }
  }

  .outline textarea {
    border-radius: 0.25rem;
    border: 3px solid rgba(131, 131, 131, 0.5);
    transition: all 0.1s ease-in-out;
    &:focus {
      border: 3px solid currentColor;
      background: rgba(255, 255, 255, 0.5);
    }
  }

  // Sizes
  .xsmall textarea {
    padding: 0.125rem 0.25rem;
  }

  .small textarea {
    padding: 0.25rem 0.5rem;
  }

  .medium textarea {
    padding: 0.5rem 1rem;
  }

  .large textarea {
    padding: 0.75rem 1.5rem;
  }

  .xlarge textarea {
    padding: 1rem 2rem;
  }

  // Loading and error styles
  .loading textarea,
  .error textarea {
    color: #fff;
  }

  .loading textarea {
    outline: 3px solid var(--color);
    outline-offset: -3px;
    animation: double-pulse-gray 1.5s infinite ease-in-out;
  }

  .error textarea {
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

  .label {
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0.5rem;
  }
  .label-in {
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0.5rem;
    position: absolute;
    top: 50%;
    left: 10px;
    cursor: pointer;
    transform: translateY(-50%);
  }
</style>
