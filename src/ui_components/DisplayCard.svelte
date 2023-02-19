<script lang="ts">
  import { onMount } from 'svelte';
  import SyntaxHighlight from './SyntaxHighlight.svelte';
  import { SunIcon, MoonIcon } from './icons';

  let codes: string[] = [];
  export let id: string = '';
  export let header: string = '';
  export let examples: any[] = [];
  export let description: string = '';

  let isDarkMode: boolean = false;

  onMount(() => {
    codes = examples.map((example) => example.code);
  });
</script>

<div {id} class={isDarkMode ? 'container dark' : 'container light'}>
  <button class="toggle" on:click={() => (isDarkMode = !isDarkMode)}>
    {#if isDarkMode}
      <SunIcon />
    {:else}
      <MoonIcon />
    {/if}
  </button>
  <h2>{header}</h2>
  <p>
    {description}
  </p>
  <div class="examples">
    {#each examples as example}
      <svelte:component this={example.component} {...example.props}
        >{example.props.text}</svelte:component
      >
    {/each}
  </div>

  {#each codes as code}
    {#if code}
      <SyntaxHighlight {code} {isDarkMode} />
    {/if}
  {/each}
</div>

<style lang="scss">
  .container {
    position: relative;
    margin: 2rem 0;
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    transition: 0.5s;
    &:hover {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }
  }

  .container.dark {
    background: rgb(38, 34, 39);
    color: white;
  }

  .container.light {
    background: var(--menu-color);
    color: black;
  }

  .examples {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
  }

  .toggle {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    border: none;
    font-size: 1rem;
    color: #ccc;
    cursor: pointer;
    z-index: 1;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #000;
    }
  }
</style>
