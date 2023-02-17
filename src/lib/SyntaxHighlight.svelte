<script lang="ts">
  import { copyToClipboard } from '$lib/utils';
  import { onMount } from 'svelte';

  export let code: string;
  let codeArray: string[];

  const splitString = (code: string) => {
    if (typeof code === 'undefined') return [];
    const atSpaces = code.split(/([<=>/])|\s+/);
    return atSpaces;
  };

  onMount(() => (codeArray = splitString(code)));

  let copyShown = false;
</script>

{#if codeArray}
  <div
    class="code"
    on:mouseenter={() => (copyShown = true)}
    on:mouseleave={() => (copyShown = false)}
  >
    {#each codeArray as item, i}
      {#if i > 0 && (codeArray[i - 1] === '<' || codeArray[i - 1] === '/')}
        <span class="red">{item || ' '}</span>
      {:else if i < codeArray.length - 1 && codeArray[i + 1] === '='}
        <span class="green">{item || ' '}</span>
      {:else}
        {item || ' '}
      {/if}
    {/each}

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
    font-weight: 600;
    letter-spacing: 0.05rem;
    line-height: 2;
    color: #d5d5d5;
    background: rgb(34, 34, 34);
    border-bottom: 3px solid rgb(34, 34, 34);
    transition: 0.5s;
    &:hover {
      border-bottom: 3px solid #616161;
    }
  }

  .red {
    color: #9d343d;
  }

  .green {
    color: #3b7015;
  }
</style>
