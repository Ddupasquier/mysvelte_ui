<script lang="ts">
  export let disabled = false;
  export let background = '#fff';
  export let color = '#000';
  export let size = 'medium';
  export let placeholder = 'Search';
  export let isLoading = false;
  export let isError = false;
  export let style = '';
  export let value = '';

  $: size =
    size === 'medium'
      ? '0.5rem 1rem'
      : size === 'xsmall'
      ? '0.125rem 0.25rem'
      : size === 'small'
      ? '0.25rem 0.5rem'
      : size === 'large'
      ? '0.75rem 1.5rem'
      : size === 'xlarge'
      ? '1rem 2rem'
      : size;

  $: enabledStyle =
    `background: ${background}; color: ${color}; padding: ${size};` + style;

  $: disabledStyle =
    `background: #ccc; pointer-events: none; padding: ${size};` + style;

  $: loadingStyle =
    `background: #ccc;  pointer-events: none; color: ${color}; border: 2px solid ${background}; padding: ${size};` +
    style;

  $: errorStyle =
    `background: #ccc;  pointer-events: none; color: ${color}; border: 2px solid red; padding: ${size};` +
    style;

   const  handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    value = target.value;
  }
</script>

<input
  type="text"
  {placeholder}
  {disabled}
  bind:value
  on:input={handleInput}
  style={disabled
    ? disabledStyle
    : isLoading
    ? loadingStyle
    : isError
    ? errorStyle
    : enabledStyle}
  class={isLoading ? 'loading' : isError ? 'error' : ''}
/>

<style lang="scss">
  input {
    border: none;
    border-radius: 50rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:focus {
      filter: hue-rotate(40deg) brightness(0.95);
      outline: none;
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
</style>
