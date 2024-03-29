<script lang="ts">
  import { onMount } from "svelte";

  // Props
  /**
   * @component Checkbox
   *
   * @prop name
   * @description Specifies the name attribute for the checkbox. It's used for form submission and in the DOM.
   * @type {string}
   * @default ""
   *
   * @prop label
   * @description Represents the text that appears next to the checkbox. It can be used to describe the purpose of the checkbox to the user.
   * @type {string}
   * @default ""
   *
   * @prop labelColor
   * @description Determines the color of the label text. It accepts any valid CSS color, giving you a wide range of options to match your UI's color scheme.
   * @type {string}
   * @default "#000"
   *
   * @prop checked
   * @description Controls whether the checkbox is checked or not by default. Set it to `true` if you want the checkbox to be checked on initial load.
   * @type {boolean}
   * @default false
   *
   * @prop color
   * @description Specifies the color of the checkbox itself. It accepts any valid CSS color, providing you with flexibility in styling.
   * @type {string}
   * @default "#000"
   *
   * @prop size
   * @description Dictates the size of the checkbox. Available options are 'small', 'medium', or 'large' to cater to different design needs.
   * @type {string}
   * @default "medium"
   *
   * @prop disabled
   * @description Controls whether the checkbox is disabled or not. When set to `true`, the checkbox appears grayed out and cannot be interacted with.
   * @type {boolean}
   * @default false
   */

  export let name: string = "checkbox";
  export let label: string = "";
  export let labelColor: string = "#000";
  export let checked: boolean = false;
  export let color: string = "#000";
  export let size: "small" | "medium" | "large" = "medium";
  export let disabled: boolean = false;

  // Variables
  let classList = ["checkbox-container"];
  let classString = "";

  // Constants
  const sizeValues: Record<typeof size, string> = {
    small: ".75",
    medium: "1",
    large: "1.25",
  };

  // Lifecycle hooks
  onMount(() => {
    classString = classList.join(" ");
  });

  // Reactive statements
  $: classString = classList.join(" ");

  // Event handlers
  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    checked = target.checked;
  };
</script>

<div class={classString} {...$$restProps}>
  <label class="label" style="color: {labelColor}">
    <input
      type="checkbox"
      {disabled}
      {checked}
      {name}
      on:change={handleInput}
      {...$$restProps}
    />
    <span
      class="checkmark"
      style="border-color: {color}; transform: scale({sizeValues[size]})"
    />
    {label}
  </label>
</div>

<style lang="scss">
  .checkbox-container {
    display: flex;
    align-items: center;
  }

  .label {
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-right: 1rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .label input:disabled {
    visibility: hidden;
  }

  .checkmark {
    position: relative;
    display: inline-block;
    width: 1.25em;
    height: 1.25em;
    margin-right: 0.5em;
    border: 2px solid #ccc;
    border-radius: 3px;
    background-color: transparent;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  }

  .checkmark::before {
    content: "";
    position: absolute;
    display: none;
    left: 0.25em;
    width: 1em;
    height: 0.5em;
    border: solid rgb(129, 129, 129);
    border-width: 0 0.3em 0.2em 0;
    transform: rotate(130deg) scaleY(-1);
  }

  .label input:checked ~ .checkmark::before {
    display: block;
  }

  .label:hover input:not(:disabled) ~ .checkmark {
    border-color: #000;
  }

  .label:hover input:not(:disabled) ~ .checkmark::before {
    border-color: inherit;
    filter: brightness(0.5);
  }

  .label input:disabled ~ .checkmark {
    opacity: 0.5;
  }
</style>
