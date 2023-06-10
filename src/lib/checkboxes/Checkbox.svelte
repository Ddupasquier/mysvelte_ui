<script lang="ts">
  import { onMount } from "svelte";

  // Props
  /**
   * @component Checkbox
   * @type {string} name - The name attribute of the checkbox. , "" 
   * @type {string} label - The text that appears next to the checkbox. , ""
   * @type {string} labelColor - The color of the label. Accepts any valid CSS color. , "#000"
   * @type {boolean} checked - Determines if the checkbox is checked or not. , false
   * @type {string} color - The color of the checkbox. Accepts any valid CSS color. , "#000"
   * @type {string} size - The size of the checkbox. Choose from 'small', 'medium', or 'large'. , "medium"
   * @type {boolean} disabled - Determines if the checkbox is disabled or not. , false
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
