<script lang="ts">
  import Highlight, { LineNumbers } from 'svelte-highlight';
  import typescript from 'svelte-highlight/languages/typescript';
  import { copyToClipboard } from '$lib/utils';

  export let code: string;

  let copyShown = false;
</script>

{#if code}
  <div
    class="code"
    on:mouseenter={() => (copyShown = true)}
    on:mouseleave={() => (copyShown = false)}
  >
    <Highlight language={typescript} {code} let:highlighted>
      <LineNumbers {highlighted} />
      {#if copyShown}
        <button class="copy" on:click={() => copyToClipboard(code)}>
          Copy
        </button>
      {/if}
    </Highlight>
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
    display: block;
    font-size: 0.875rem;
    line-height: 0.25;
    color: #333;
    white-space: pre-wrap;
    background: #f6f8fa;
    transition: 0.5s;
    &:hover {
      background: #d8dcdf;
    }
  }
</style>
