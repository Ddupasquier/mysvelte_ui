<script lang="ts">
  import { fade } from "svelte/transition";
  import CloseIcon from "../assets/close.svelte";

  // Props
  /**
   * @component Input.Prefix
   *
   * @prop prefix
   * @description Prefix text shown before the input (e.g., @ or #).
   * @type {string}
   * @default "@"
   *
   * @prop variant
   * @description Style variant: "default", "line", or "outline".
   * @type {"default" | "line" | "outline"}
   * @default "default"
   *
   * @prop size
   * @description Size of the field.
   * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
   * @default "medium"
   *
   * @prop background
   * @description Background color.
   * @type {string}
   * @default "#fff"
   *
   * @prop color
   * @description Text color.
   * @type {string}
   * @default "#000"
   *
   * @prop placeholder
   * @description Placeholder text.
   * @type {string}
   * @default "Search"
   *
   * @prop value
   * @description Current value.
   * @type {string}
   * @default ""
   *
   * @prop style
   * @description Inline CSS for the input.
   * @type {string}
   * @default ""
   *
   * @prop label
   * @description Show an external label. Provide an id for accessibility.
   * @type {boolean}
   * @default false
   *
   * @prop labelIn
   * @description Show the label inside the field.
   * @type {boolean}
   * @default false
   *
   * @prop labelText
   * @description Custom label text (falls back to id/placeholder).
   * @type {string}
   * @default ""
   *
   * @prop labelColor
   * @description Label color.
   * @type {string}
   * @default "#000"
   *
   * @prop disabled
   * @description Disable interaction.
   * @type {boolean}
   * @default false
   *
   * @prop clearable
   * @description Show a clear button when there is content.
   * @type {boolean}
   * @default false
   *
   * @prop isError
   * @description Error state (also marks aria-invalid).
   * @type {boolean}
   * @default false
   *
   * @prop isLoading
   * @description Loading state (sets aria-busy and disables).
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
  export let labelText: string = "";

  // Local state
  const type = "text";
  let inputStyle = "";
  let inputRef: HTMLInputElement;
  const stateClass = () => (isLoading ? "loading" : isError ? "error" : "");
  const inputId = $$restProps.id ?? undefined;
  const labelContent = labelText || inputId || placeholder;

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
      <label class="label-in" for={inputId} style="color: {labelColor}"
        >{labelContent}</label
      >
    {:else}
      <label class="label" for={inputId} style="color: {labelColor}"
        >{labelContent}</label
      >
    {/if}
  {/if}
  <div
    style={inputStyle}
    class={`input ${variant} ${stateClass()}`}
  >
    <div class="prefix" aria-hidden="true">
      {prefix}
    </div>
    <input
      {disabled}
      {type}
      {placeholder}
      {value}
      id={label ? inputId : undefined}
      {...$$restProps}
      on:input={handleInput}
      aria-invalid={isError}
      aria-busy={isLoading}
      bind:this={inputRef}
    />
  </div>
  <div class="options">
    {#if clearable && value !== ""}
      <button
        class="clear-button"
        on:click={clearInput}
        type="button"
        aria-label="Clear input"
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
