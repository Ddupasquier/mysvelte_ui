<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import CloseIcon from "../assets/close.svelte";
  import ShowHidePasswordIcon from "../assets/hideShowPassword.svelte";

  // Props
  /**
   * @component InputField
   *
   * @prop variant
   * @description Style variant: "default", "line", or "outline".
   * @type {"default" | "line" | "outline"}
   * @default "default"
   *
   * @prop size
   * @description Size of the input.
   * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
   * @default "medium"
   *
   * @prop type
   * @description Input type.
   * @type {"text" | "password"}
   * @default "text"
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
   *
   * @prop autoFocus
   * @description Auto focus on mount.
   * @type {boolean}
   * @default false
   */

  export let variant: "default" | "line" | "outline" = "default";
  export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
    "medium";
  export let type: "text" | "password" = "text";
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
  export let autoFocus: boolean = false;
  export let labelText: string = "";

  // Event dispatcher
  const dispatch = createEventDispatcher();

  // Variables
  let containerClassString = "";
  let passwordView: boolean = false;
  let readOnly: boolean = false;

  // Lifecycle Hooks
  onMount(() => {
    if (type === "password") passwordView = true;

    if (autoFocus) inputRef.focus();
  });

  // Reactive Statements
  $: containerClassList = [
    "input",
    size,
    variant,
    isLoading && "loading",
    isError && "error",
  ].filter(Boolean);

  $: containerClassString = containerClassList.join(" ");

  $: readOnly = disabled || isLoading || isError;

  $: inputStyle = `
  background: ${disabled || isError || isLoading ? "#ccc" : background};
  color: ${color};
  ${style}
`;

  $: {
    if (labelIn) {
      placeholder = label ? "" : placeholder;
    }
  }

  const inputId = $$restProps.id ?? undefined;
  const labelContent = labelText || inputId || placeholder;

  // Handle input event
  const handleInput = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      value = e.target.value;
      dispatch("input", e);
    }
  };

  const clearInput = () => {
    value = "";
  };

  const toggleType = () => {
    if (type === "password") type = "text";
    else type = "password";
  };

  // Refs
  let inputRef: HTMLInputElement;
</script>

<div class={containerClassString}>
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
  <input
    bind:this={inputRef}
    id={label ? inputId : undefined}
    {type}
    {color}
    placeholder={label ? "" : placeholder}
    {value}
    {disabled}
    {...$$restProps}
    style={inputStyle}
    readonly={readOnly}
    aria-disabled={readOnly}
    aria-invalid={isError}
    aria-busy={isLoading}
    on:input={handleInput}
  />
  <div class="options">
    {#if passwordView}
      <button class="eye-button" type="button" aria-label={type === "password" ? "Show password" : "Hide password"} on:click={() => toggleType()}>
        <ShowHidePasswordIcon {type} />
      </button>
    {/if}
    {#if clearable && value !== ""}
      <button
        class="clear-button"
        type="button"
        aria-label="Clear input"
        on:click={clearInput}
        transition:fade={{ duration: 100 }}
      >
        <CloseIcon />
      </button>
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
      .eye-button {
        @include option-button;
      }
    }
  }

  input {
    border-radius: 50rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    border: none;
    background: inherit;
    color: inherit;
    transition: all 0.1s ease-in-out;
    &:focus {
      outline: 3px solid currentColor;
    }
  }

  .line input {
    border-radius: 0;
    border-bottom: 3px solid rgba(131, 131, 131, 0.5);
    transition: border-color 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-bottom-color: currentColor;
    }
  }

  .outline input {
    border-radius: 50rem;
    border: 3px solid rgba(131, 131, 131, 0.5);
    transition: all 0.1s ease-in-out;
    &:focus {
      border: 3px solid currentColor;
      background: rgba(255, 255, 255, 0.5);
    }
  }

  // Sizes
  .xsmall input {
    padding: 0.125rem 0.25rem;
  }

  .small input {
    padding: 0.25rem 0.5rem;
  }

  .medium input {
    padding: 0.5rem 1rem;
  }

  .large input {
    padding: 0.75rem 1.5rem;
  }

  .xlarge input {
    padding: 1rem 2rem;
  }

  // Loading and error styles
  .loading input,
  .error input {
    color: #fff;
  }

  .loading input {
    outline: 3px solid var(--color);
    outline-offset: -3px;
    animation: double-pulse-gray 1.5s infinite ease-in-out;
  }

  .error input {
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
