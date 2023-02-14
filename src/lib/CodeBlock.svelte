<script lang="ts">
  import { onMount } from 'svelte';
  import Highlight, { LineNumbers } from 'svelte-highlight';
  import typescript from 'svelte-highlight/languages/typescript';
  import github from 'svelte-highlight/styles/github';

  export let code: string;
  export let header: string = '';
  export let examples: any[] = [];
  export let description: string = '';

  let copyShown = false;
  onMount(() => {
    code = code.split(';').join('\n');
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
</script>

<svelte:head>
  {@html github}
</svelte:head>

<div class="container">
  <h2>{header}</h2>
  <p>
    {description}
  </p>
  <div class="examples">
    {#each examples as example}
      {example}
    {/each}
  </div>
  <div
    class="code"
    on:mouseenter={() => (copyShown = true)}
    on:mouseleave={() => (copyShown = false)}
  >
    <Highlight language={typescript} {code} let:highlighted>
      <LineNumbers {highlighted} wrapLines />
    </Highlight>

    {#if copyShown}
      <button class="copy" on:click={() => copyToClipboard(code)}>
        Copy
      </button>
    {/if}
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    margin: 2rem 0;
    padding: 1rem;
    background: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }
  }

  .examples {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .code {
    position: relative;
  }

  .copy {
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #ccc;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #000;
    }
  }

  code {
    display: block;
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #333;
    white-space: pre-wrap;
  }
</style>
