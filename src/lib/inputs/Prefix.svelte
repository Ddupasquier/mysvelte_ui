<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  // Props
  export let variant: 'default' | 'line' | 'outline' = 'default';
  export let size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' =
    'medium';
  export let background: string = 'white';
  export let color: string = '#000';
  export let placeholder: string = 'Search';
  export let value: string = '';
  export let style: string = '';
  export let label: boolean = false;
  export let labelIn: boolean = false;
  export let disabled: boolean = false;
  export let isError: boolean = false;
  export let isLoading: boolean = false;
  export let clearable: boolean = false;

  // Local state
  const type = 'text';
  let inputStyle = '';

  // Size values
  const sizeValues: Record<typeof size, string> = {
    xsmall: '0.125rem 0.25rem',
    small: '0.25rem 0.5rem',
    medium: '0.5rem 1rem',
    large: '0.75rem 1.5rem',
    xlarge: '1rem 2rem',
  };

  // Utility functions
  const removeBackgroundStyle = (styleString: string) => {
    return styleString.replace(/background:\s*[^;]+;?/, '');
  };

  const updateInputStyle = () => {
    let baseStyle = `background: ${background}; color: ${color}; padding: ${sizeValues[size]}; ${style};`;
    let additionalStyle = '';

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
    labelIn && (placeholder = '');
  }

  $: if (variant === 'line') {
    background = 'transparent';
  } else if (variant === 'outline') {
    background = 'rgba(255, 255, 255, 0.5)';
  }

  // Event handlers
  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    value = target.value;
  };

  const clearInput = () => {
    value = '';
  };
</script>

<div class="input-container">
  {#if label}
    {#if labelIn}
      <label class="label-in" for={$$restProps.id}>{$$restProps.id}</label>
    {:else}
      <label class="label" for={$$restProps.id}>{$$restProps.id}</label>
    {/if}
  {/if}
  <input
    {type}
    {disabled}
    {placeholder}
    {value}
    {...$$restProps}
    on:input={handleInput}
    on:focus
    on:blur
    style={inputStyle}
    class={(isLoading ? 'loading' : isError ? 'error' : '') + variant}
  />
  <div class="options">
    {#if clearable && value !== ''}
      <button
        class="clear-button"
        on:click={clearInput}
        transition:fade={{ duration: 100 }}
        ><svg
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          ><title>Clear Input</title><path
            fill="currentColor"
            d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
          /></svg
        ></button
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
        transform: translateY(-100%);
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
  .default {
    border-radius: 50rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all 0.1s ease-in-out;
    &:focus-within {
      outline: 3px solid currentColor;
    }
  }

  .line {
    border-radius: 0;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    border: none;
    border-bottom: 3px solid rgba(131, 131, 131, 0.5);
    transition: all 0.3s ease-in-out;
    &:focus-within {
      border-bottom: 3px solid currentColor;
    }
  }

  .outline {
    border-radius: 50rem;
    border: 3px solid rgba(131, 131, 131, 0.5);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease-in-out;
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
    transform: translateY(-50%);
  }
</style>
