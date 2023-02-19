<script lang="ts">
  import { onMount } from 'svelte';

  export let disabled: boolean = true;
  export let background: string = '#c50eff';
  export let color: string = '#fff';
  export let size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' =
    'medium';
  export let text: string = '';
  export let isLoading: boolean = false;
  export let isError: boolean = false;
  export let style: string = '';

  const sizeValues: Record<typeof size, string> = {
    xsmall: '0.125rem 0.25rem',
    small: '0.25rem 0.5rem',
    medium: '0.5rem 1rem',
    large: '0.75rem 1.5rem',
    xlarge: '1rem 2rem',
  };

  let buttonStyle = '';

  const removeBackgroundStyle = (styleString: string) => {
    return styleString.replace(/background:\s*[^;]+;?/, '');
  };

  const updateButtonStyle = () => {
    let baseStyle = `background: ${background}; color: ${color}; padding: ${sizeValues[size]}; ${style};`;

    let additionalStyle = '';

    if (disabled) {
      additionalStyle = `background: #ccc; pointer-events: none; padding: ${
        sizeValues[size]
      }; ${removeBackgroundStyle(style)};`;
    } else if (isLoading) {
      additionalStyle = `background: #ccc; pointer-events: none; color: ${color}; border: 2px solid ${background}; padding: ${sizeValues[size]}; ${style};`;
    } else if (isError) {
      additionalStyle = `background: #ccc; pointer-events: none; color: ${color}; border: 2px solid red; padding: ${sizeValues[size]}; ${style};`;
    }

    buttonStyle = `${baseStyle} ${additionalStyle}`.trim();
  };

  onMount(updateButtonStyle);

  $: {
    updateButtonStyle();
  }
</script>

<button
  {disabled}
  style={buttonStyle}
  class={isLoading ? 'loading' : isError ? 'error' : ''}
>
  <slot>{text}</slot>
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
