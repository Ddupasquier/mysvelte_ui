<script lang="ts">
  export let disabled = false;
  export let background = '#c50eff';
  export let color = '#fff';
  export let size = 'medium';
  export let text = '';
  export let isLoading = false;
  export let isError = false;
  export let style = '';

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

  $: enabledStyle = `background: ${background}; color: ${color}; padding: ${size};` + style;

  $: disabledStyle = `background: #ccc; pointer-events: none; padding: ${size};` + style;

  $: loadingStyle = `background: #ccc;  pointer-events: none; color: ${color}; border: 2px solid ${background}; padding: ${size};` + style;

  $: errorStyle = `background: #ccc;  pointer-events: none; color: ${color}; border: 2px solid red; padding: ${size};` + style;
</script>

<button
  {disabled}
  style={disabled
    ? disabledStyle
    : isLoading
    ? loadingStyle
    : isError
    ? errorStyle
    : enabledStyle}
  class={isLoading ? 'loading' : isError ? 'error' : ''}
>
  <slot>
    {text}
  </slot>
</button>

<style lang="scss">
  button {
    border: none;
    border-radius: 0.3rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
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
