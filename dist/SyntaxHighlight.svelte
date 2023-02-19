<script>import { copyToClipboard } from "./utils";
import { onMount } from "svelte";
export let isDarkMode;
export let code;
let codeArray;
const splitString = (code2) => {
  if (typeof code2 === "undefined")
    return [];
  if (typeof code2 === "string") {
    return code2.split(/([<=>/])|\s+/);
  } else {
    return code2.map((c, i) => [
      ...c.split(/([<=>/])|\s+/),
      i === code2.length - 1 ? "" : "\n"
    ]).flat();
  }
};
onMount(() => codeArray = splitString(code));
let copyShown = false;
</script>

{#if codeArray}
  <div
    class={isDarkMode ? 'code dark' : 'code light'}
    on:mouseenter={() => (copyShown = true)}
    on:mouseleave={() => (copyShown = false)}
  >
    {#each codeArray as item, i}
      {#if i > 0 && (codeArray[i - 1] === '<' || codeArray[i - 1] === '/')}
        <span class="red">{item || ' '}</span>
      {:else if (i < codeArray.length - 1 && codeArray[i + 1] === '=') || codeArray[i - 2] === '$:'}
        <span class="green">{item || ' '}</span>
      {:else if codeArray[i] === '\n'}
        <br />
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

<style>.copy {
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
}
.copy:hover {
  color: #000;
}

.code {
  position: relative;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  line-height: 2;
  transition: 0.5s;
}

.code.dark {
  background: rgb(38, 34, 39);
  color: white;
  border-bottom: 3px solid rgb(68, 68, 68);
}
.code.dark:hover {
  border-bottom: 3px solid #b8b8b8;
}

.code.light {
  background: var(--menu-color);
  color: black;
  border-bottom: 3px solid rgb(234, 234, 234);
}
.code.light:hover {
  border-bottom: 3px solid #b8b8b8;
}

.red {
  color: #9d343d;
}

.green {
  color: #3b7015;
}</style>
