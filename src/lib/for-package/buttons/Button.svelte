<script lang="ts">
  export let disabled = false;
  export let background = '#c50eff';
  export let color = '#fff';
  export let size = 'medium';
  export let text = '';
  export let isLoading = false;
  export let isError = false;

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

  $: enabledStyle = `background: ${background}; color: ${color}; padding: ${size};`;

  $: disabledStyle = `background: #ccc; pointer-events: none; padding: ${size};`;

  $: loadingStyle = `background: #ccc; color: ${color}; border: 2px solid ${background}; padding: ${size};`;

  $: errorStyle = `background: #ccc; color: ${color}; border: 2px solid red; padding: ${size};`;
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
    animation: double-pulse 1.5s infinite ease-in-out;
  }

  .error {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(1px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-1px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(1px, 0, 0);
    }
  }

  @keyframes double-pulse {
    0% {
      box-shadow: 0 0 5rem 1rem rgba(0, 0, 0, 0) inset;
    }
    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2) inset;
    }
  }
</style>
