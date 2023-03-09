<script lang="ts">
  // Props
  export let label: string = "";
  export let labelColor: string = "#000";
  export let checked: boolean = false;
  export let color: string = "#000";
  export let size: "small" | "medium" | "large" = "medium";
  export let disabled: boolean = false;

  // Local state
  let inputStyle = "";

  // Size values
  const sizeValues: Record<typeof size, string> = {
    small: ".75",
    medium: "1",
    large: "1.25",
  };

  // Event handlers
  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    checked = target.checked;
  };
</script>

<div class="checkbox-container" {...$$restProps}>
  <label class="label" style="color: {labelColor}">
    <input
      type="checkbox"
      {disabled}
      {checked}
      on:change={handleInput}
      style={inputStyle}
      {...$$restProps}
    />
    <span
      class="checkmark"
      style="border-color: {color}; transform: scale({sizeValues[size]})"
    />
    {label}
  </label>
</div>

<style>
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
    animation: check forwards 0.2s ease-in-out;
  }
  
  @keyframes check {
    0% {
      /* width: 0; */
      transform-origin: left bottom;
      transform: rotate(130deg) scaleY(-1) scale(0);
    }
    100% {
      /* width: 1em; */
      transform: rotate(130deg) scaleY(-1) scale(1);
    }
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
