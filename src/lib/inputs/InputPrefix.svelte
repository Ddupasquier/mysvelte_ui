<script lang="ts">
  import { fade } from "svelte/transition";
  import CloseIcon from "../assets/close.svelte";

  // Props
  /**
   * @component Input.Prefix
   *
   * @prop prefix
   * @description Specify a prefix that appears before the input. Useful for indicating the input purpose, such as '@' for mentioning users.
   * @type {string}
   * @default "@"
   *
   * @prop variant
   * @description Choose the appearance of the search input field. Pick from "default", "line", or "outline" to fit your design needs.
   * @type {"default" | "line" | "outline"}
   * @default "default"
   *
   * @prop size
   * @description Select the size of the search input field. Options range from "xsmall" to "xlarge", with "small", "medium", and "large" available too.
   * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
   * @default "medium"
   *
   * @prop background
   * @description Define the background color of the search input field to match your UI theme.
   * @type {string}
   * @default "#fff"
   *
   * @prop color
   * @description Define the text color inside the search input field.
   * @type {string}
   * @default "#000"
   *
   * @prop placeholder
   * @description Specify the placeholder text that appears in the search input field when it is empty.
   * @type {string}
   * @default "Search"
   *
   * @prop value
   * @description Set the default value of the search input field.
   * @type {string}
   * @default ""
   *
   * @prop style
   * @description Apply additional inline CSS styles to the search input field.
   * @type {string}
   * @default ""
   *
   * @prop label
   * @description Decide whether or not to display a label with the search input field. If set to true, you must also provide an associated 'id' for accessibility.
   * @type {boolean}
   * @default false
   *
   * @prop labelIn
   * @description Decide whether to display the label within the search input field. Only applicable if a label is used.
   * @type {boolean}
   * @default false
   *
   * @prop labelColor
   * @description Specify the color of the label text, if a label is used.
   * @type {string}
   * @default "#000"
   *
   * @prop disabled
   * @description Enable or disable the search input field. When set to true, the field becomes read-only and users cannot interact with it.
   * @type {boolean}
   * @default false
   *
   * @prop clearable
   * @description Enable or disable the clear button in the search input field. When set to true, users can clear the input with a single click.
   * @type {boolean}
   * @default false
   *
   * @prop isError
   * @description Set this to true to show the search input field in an error state, such as when validation fails.
   * @type {boolean}
   * @default false
   *
   * @prop isLoading
   * @description Set this to true to show a loading state in the search input field, useful when waiting for an action to complete.
   * @type {boolean}
   * @default false
   */

  export let prefix: string = "@";
  export let variant: "default" | "line" | "outline" = "default";
  export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
    "medium";
  export let background: string = "#fff";
  export let color: string = "#000";
  export let placeholder: string = "Search";
  export let value: string = "";
  export let style: string = "";
  export let label: boolean = false;
  export let labelIn: boolean = false;
  export let labelColor: string = "#000";
  export let disabled: boolean = false;
  export let clearable: boolean = false;
  export let isError: boolean = false;
  export let isLoading: boolean = false;

  // Local state
  const type = "text";
  let inputStyle = "";
  let inputRef: HTMLInputElement;

  // Size values
  const sizeValues: Record<typeof size, string> = {
    xsmall: "0.125rem 0.25rem 0.125rem 0.1rem",
    small: "0.25rem 0.5rem 0.25rem 0.2rem",
    medium: "0.5rem 1rem 0.5rem 0.4rem",
    large: "0.75rem 1.5rem 0.75rem 0.6rem",
    xlarge: "1rem 2rem 1rem 0.8rem",
  };

  // Utility functions
  const removeBackgroundStyle = (styleString: string): string => {
    return styleString.replace(/background:\s*[^;]+;?/, "");
  };

  const updateInputStyle = () => {
    let baseStyle = `background: ${background}; color: ${color}; padding: ${sizeValues[size]}; ${style};`;
    let additionalStyle = "";

    if (disabled) {
      additionalStyle = `background: #eee; pointer-events: none; padding: ${
        sizeValues[size]
      }; ${removeBackgroundStyle(style)};`;
    } else if (isLoading) {
      additionalStyle = `background: #ccc; pointer-events: none; color: ${color}; border: 2px solid ${background}; padding: ${sizeValues[size]}; ${style};`;
    } else if (isError) {
      additionalStyle = `background: #ccc; pointer-events: none; color: ${color}; border: 2px solid red; padding: ${sizeValues[size]}; ${style};`;
    }

    inputStyle = `${baseStyle} ${additionalStyle}`.trim();
  };

  // Lifecycle hooks

  // Reactive statements
  $: {
    updateInputStyle();
    labelIn && (placeholder = "");
  }

  // Event handlers
  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    value = target.value;
  };

  const clearInput = () => {
    value = "";
  };
</script>

<div class="input-container">
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
  <div
    style={inputStyle}
    class={(isLoading ? "loading" : isError ? "error" : "") + variant}
    on:click={() => inputRef.focus()}
    on:keydown={(event) => {
      if (event.key === "Enter") {
        inputRef.blur();
      }
    }}
  >
    <div class="prefix">
      {prefix}
    </div>
    <input
      {disabled}
      {type}
      {placeholder}
      {value}
      {...$$restProps}
      on:input={handleInput}
      on:focus
      on:blur
      on:change
      on:click
      on:keydown
      on:keyup
      bind:this={inputRef}
    />
  </div>
  <div class="options">
    {#if clearable && value !== ""}
      <button
        class="clear-button"
        on:click={clearInput}
        transition:fade={{ duration: 100 }}
        >
          <CloseIcon />
        </button
      >
    {/if}
  </div>
</div>

<style lang="scss">
  .input-container {
    display: flex;
    flex-direction: column;
    position: relative;
    width: fit-content;
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
      .eye-button {
        @include option-button;
      }
    }
  }

  @mixin prefix-variant-defaults {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    cursor: text;
    transition: all 0.1s ease-in-out;
    .prefix {
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: all;
      height: fit-content;
      padding: 0.25rem;
      border-radius: 50rem;
      border: none;
      cursor: default;
      font-size: 0.8rem;
      color: #666666;
      transition: opacity 0.2s ease-in-out;
    }
    input {
      background: none;
      font: inherit;
      outline: none;
      border: none;
    }
  }

  .default {
    @include prefix-variant-defaults;
    outline: none;
    border: none;
    border-radius: 50rem;
    &:focus-within {
      outline: 3px solid currentColor;
    }
  }

  .line {
    @include prefix-variant-defaults;
    border-radius: 0;
    outline: none;
    border: none;
    border-bottom: 3px solid rgba(131, 131, 131, 0.5);
    transition: all 0.3s ease-in-out;
    background: transparent;
    &:focus-within {
      border-bottom: 3px solid currentColor;
    }
  }

  .outline {
    @include prefix-variant-defaults;
    border: 3px solid rgba(131, 131, 131, 0.5);
    border-radius: 50rem;
    &:focus-within {
      border: 3px solid currentColor;
      background: rgba(255, 255, 255, 0.5);
    }
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
    transform: translateY(-50%) translateX(35%);
  }
</style>
