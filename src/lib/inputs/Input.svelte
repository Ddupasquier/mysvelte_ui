<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  // Props
  export let variant: 'default' | 'line' | 'outline' = 'default';
  export let size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' =
    'medium';
  export let type: 'text' | 'email' | 'password' | 'number' = 'text';
  export let background: string = 'white';
  export let color: string = '#000';
  export let placeholder: string = 'Search';
  export let value: string = '';
  export let style: string = '';
  export let label: boolean = false;
  export let labelIn: boolean = false;
  export let disabled: boolean = false;
  export let clearable: boolean = false;
  export let isError: boolean = false;
  export let isLoading: boolean = false;

  // Local state
  let passwordView: boolean = false;
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
  const removeBackgroundStyle = (styleString: string): string => {
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
  onMount(() => {
    if (type === 'password') passwordView = true;
  });

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

  const toggleType = () => {
    if (type === 'password') type = 'text';
    else type = 'password';
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
    id={label ? $$restProps.id : undefined}
    {type}
    {disabled}
    {placeholder}
    {value}
    {...$$restProps}
    on:input={handleInput}
    on:focus
    on:blur
    on:change
    on:click
    on:keydown
    on:keyup
    style={inputStyle}
    class={(isLoading ? 'loading' : isError ? 'error' : '') + variant}
  />
  <div class="options">
    {#if passwordView}
      <button class="eye-button" on:click={() => toggleType()}>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          {#if type === 'password'}
            <title>Show Password</title>
            <path
              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
              transition:fade={{ duration: 100 }}
            /><circle
              cx="12"
              cy="12"
              r="3"
              transition:fade={{ duration: 100 }}
            />
          {:else}
            <title>Hide Password</title>
            <path
              d="M9.76404 5.29519C10.4664 5.10724 11.2123 5 12 5C15.7574 5 18.564 7.4404 20.2326 9.43934C21.4848 10.9394 21.4846 13.0609 20.2324 14.5609C20.0406 14.7907 19.8337 15.0264 19.612 15.2635M12.5 9.04148C13.7563 9.25224 14.7478 10.2437 14.9585 11.5M3 3L21 21M11.5 14.9585C10.4158 14.7766 9.52884 14.0132 9.17072 13M4.34914 8.77822C4.14213 9.00124 3.94821 9.22274 3.76762 9.43907C2.51542 10.9391 2.51523 13.0606 3.76739 14.5607C5.43604 16.5596 8.24263 19 12 19C12.8021 19 13.5608 18.8888 14.2744 18.6944"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              transition:fade={{ duration: 100 }}
            />
          {/if}
        </svg>
      </button>
    {/if}
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
