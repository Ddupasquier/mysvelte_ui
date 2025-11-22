<script lang="ts">
  import { onMount } from "svelte";

  // Props
  /**
   * @component Checkbox
   *
   * @prop id
   * @description Input id used for accessibility; optional when label is present.
   * @type {string}
   * @default ""
   *
   * @prop name
   * @description Name attribute for form submission.
   * @type {string}
   * @default "checkbox"
   *
   * @prop label
   * @description Visible label text.
   * @type {string}
   * @default ""
   *
   * @prop labelColor
   * @description Label text color.
   * @type {string}
   * @default "#000"
   *
   * @prop checked
   * @description Whether the checkbox is checked.
   * @type {boolean}
   * @default false
   *
   * @prop color
   * @description Checkbox outline/check color.
   * @type {string}
   * @default "#000"
   *
   * @prop size
   * @description Size of the checkbox.
   * @type {"small" | "medium" | "large"}
   * @default "medium"
   *
   * @prop disabled
   * @description Disable interaction.
   * @type {boolean}
   * @default false
   *
   * @prop ariaLabel
   * @description Accessible label when no visible label is provided.
   * @type {string}
   * @default ""
   */

  export let id: string = "";
  export let name: string = "checkbox";
  export let label: string = "";
  export let labelColor: string = "#000";
  export let checked: boolean = false;
  export let color: string = "#000";
  export let size: "small" | "medium" | "large" = "medium";
  export let disabled: boolean = false;
  export let ariaLabel: string = "";

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
  <label class="label" for={id || undefined} style="color: {labelColor}">
    <input
      type="checkbox"
      {disabled}
      {checked}
      {name}
      id={id || undefined}
      aria-label={label || ariaLabel || name}
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

  .label input:focus-visible ~ .checkmark {
    outline: 2px solid currentColor;
    outline-offset: 2px;
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
