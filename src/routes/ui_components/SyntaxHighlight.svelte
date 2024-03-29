<script lang="ts">
  import { fade } from "svelte/transition";
  import { copyToClipboard } from "./utils";
  import { onMount } from "svelte";

  export let isDarkMode: boolean;
  export let code: string | string[];
  let codeArray: string[];

  const splitString = (code: string | string[]): string[] => {
    if (typeof code === "undefined") return [];

    if (typeof code === "string") {
      return code.split(/([<=>/])|\s+/);
    } else {
      return code
        .map((c, i) => [
          ...c.split(/([<=>/])|\s+/),
          i === code.length - 1 ? "" : "\n",
        ])
        .flat();
    }
  };

  onMount(() => (codeArray = splitString(code)));

  let copyShown = false;
</script>

{#if codeArray}
  <div
    class={isDarkMode ? "code dark" : "code light"}
    on:mouseenter={() => (copyShown = true)}
    on:mouseleave={() => (copyShown = false)}
  >
    {#each codeArray as item, i}
      {#if i > 0 && (codeArray[i - 1] === "<" || codeArray[i - 1] === "/")}
        <span class={isDarkMode ? "red dark" : "red light"}>{item || " "}</span>
      {:else if (i < codeArray.length - 1 && codeArray[i + 1] === "=") || codeArray[i - 2] === "$:"}
        <span class={isDarkMode ? "green dark" : "green light"}
          >{item || " "}</span
        >
      {:else if codeArray[i] === "\n"}
        <br />
      {:else if codeArray[i] === "indent"}
        &nbsp;&nbsp;&nbsp;&nbsp;
      {:else}
        {item || " "}
      {/if}
    {/each}

    {#if copyShown}
      <button
        class="copy"
        on:click={() => copyToClipboard(code)}
        transition:fade
      >
        Copy
      </button>
    {/if}
  </div>
{/if}

<style lang="scss">
  .copy {
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    font-size: 1rem;
    color: #ccc;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #000;
    }
  }

  .code {
    border: 1px solid #eff0f1;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.062), 0 1px 2px rgba(85, 85, 85, 0.24);
    position: relative;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    line-height: 2;
    padding: 0 0.5rem;
    margin-bottom: 0.3rem;
    transition: 0.5s;
  }

  .code.dark {
    background: rgb(38, 34, 39);
    color: #fff;
    border-bottom: 3px solid rgb(68, 68, 68);
    &:hover {
      border-bottom: 3px solid #b8b8b8;
    }
  }

  .code.light {
    background: var(--menu-color);
    color: #000;
    border-bottom: 3px solid rgb(234, 234, 234);
    &:hover {
      border-bottom: 3px solid #b8b8b8;
    }
  }

  .red.light {
    color: #9d343d;
  }

  .red.dark {
    color: #ff5f5f;
  }

  .green.light {
    color: #3b7015;
  }

  .green.dark {
    color: #5fff5f;
  }
</style>
