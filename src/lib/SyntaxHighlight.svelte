<script lang="ts">
  import Highlight from 'svelte-highlight';
  import typescript from 'svelte-highlight/languages/typescript';

  import { copyToClipboard } from '$lib/utils';
  import { onMount } from 'svelte';

  export let code: string;

  // const highlightString = (code: string) => {
  //   const words = code.split(' ');
  //   console.log(words);
  // };

  // onMount(() => {
  //   code = String(highlightString(code));
  // });

  let copyShown = false;
</script>

{#if code}
  <div
    class="code"
    on:mouseenter={() => (copyShown = true)}
    on:mouseleave={() => (copyShown = false)}
  >
    <!-- <Highlight language={typescript} {code} /> -->
    {code}
    {#if copyShown}
      <button class="copy" on:click={() => copyToClipboard(code)}>
        Copy
      </button>
    {/if}
  </div>
{/if}

<style lang="scss">
  .copy {
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

  .code {
    position: relative;
    font-size: 0.875rem;
    color: #333;
    border-bottom: 3px solid #f6f8fa;
    transition: 0.5s;
    &:hover {
      border-bottom: 3px solid #d8dcdf;
    }
  }

  :global(.svelte-11sh29b) {
    padding: 0;
    margin: 0;
    font-size: 12px;
    overflow: hidden;
    .hljs {
      overflow-x: hidden;
    }
  }
</style>
