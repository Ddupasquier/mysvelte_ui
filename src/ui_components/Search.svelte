<script lang="ts">
  import pluralize from "pluralize";
  import { fade, slide } from "svelte/transition";
  import Input from "$lib/inputs/Input.svelte";
  import { MagnifyingGlassIcon } from "./icons";
  import { componentIds } from "../stores/componentStore";
  import { splitSearchResult } from "./utils";

  $: isOpen = false;
  let searchRef: HTMLDivElement;
  let searchInputRef: Input;

  $: searchTerm = "";
  $: searchResults =
    searchTerm.toLowerCase() === "all"
      ? $componentIds.sort((a, b) => (a > b ? 1 : -1))
      : $componentIds.filter((id) =>
          id.toLowerCase().includes(searchTerm.toLowerCase())
        );
  $: if (!isOpen) searchTerm = "";

  const closeSearchIfClickedOutside = (e: MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      if (!searchRef.contains(e.target)) {
        isOpen = false;
      }
    }
  };

  const closeSearchIfEscPressed = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      isOpen = false;
    }
  };

  const openSearchIfCtrlShiftS = (e: KeyboardEvent) => {
    if (!isOpen && e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "s") {
      e.preventDefault();
      window.scrollTo(0, 0);
      isOpen = true;
      searchTerm = "";
      if (searchInputRef) {
        searchInputRef.focus();
      }
    }
  };

  const moveFocusDown = (focusedResultIndex: number) => {
    if (focusedResultIndex === -1) {
      document.getElementById(searchResults[0])?.focus();
    } else if (focusedResultIndex < searchResults.length - 1) {
      const nextElementId = searchResults[focusedResultIndex + 1];
      document.getElementById(nextElementId)?.focus();
    }
  };

  const moveFocusUp = (focusedResultIndex: number) => {
    if (focusedResultIndex === -1) {
      document.getElementById(searchResults[searchResults.length - 1])?.focus();
    } else if (focusedResultIndex > 0) {
      const prevElementId = searchResults[focusedResultIndex - 1];
      document.getElementById(prevElementId)?.focus();
    }
  };

  const handleArrowKeys = (e: KeyboardEvent) => {
    if (
      isOpen &&
      searchResults.length > 0 &&
      (e.key === "ArrowDown" || e.key === "ArrowUp")
    ) {
      e.preventDefault();
      const activeElementId = document.activeElement?.id;
      const focusedResultIndex = searchResults.findIndex(
        (id) => id === activeElementId
      );

      if (e.key === "ArrowDown") {
        moveFocusDown(focusedResultIndex);
      } else if (e.key === "ArrowUp") {
        moveFocusUp(focusedResultIndex);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    closeSearchIfEscPressed(e);
    openSearchIfCtrlShiftS(e);
    handleArrowKeys(e);
  };
</script>

<svelte:window
  on:click={closeSearchIfClickedOutside}
  on:keydown={handleKeyDown}
/>

<div
  class={isOpen ? "outer expanded" : "outer"}
  bind:this={searchRef}
  role="combobox"
  aria-controls="search-results"
  aria-haspopup="listbox"
  aria-expanded={isOpen}
>
  <div class="inner">
    {#if isOpen}
      <div
        in:fade={{
          delay: 300,
          duration: 200,
        }}
        out:fade={{
          delay: 0,
          duration: 100,
        }}
        class="input-wrapper"
      >
        <Input
          bind:this={searchInputRef}
          bind:value={searchTerm}
          placeholder="Search || 'all'"
          aria-label="Search"
          size="small"
          style="width: 100%"
          autoFocus={true}
        />
      </div>
    {/if}
    <button
      class="activate"
      on:click={() => (isOpen = !isOpen)}
      aria-label="Toggle search"><MagnifyingGlassIcon color="gray" /></button
    >
  </div>

  {#if searchTerm !== ""}
    {#if searchResults.length === 0}
      <div
        id="search-results"
        class="search-results"
        role="listbox"
        aria-expanded={isOpen}
        transition:slide
      >
        <div class="result no-result" aria-label="No results found">
          No results found 😓
        </div>
      </div>
    {:else}
      <div class="search-results" transition:slide>
        {#each searchResults as id}
          {@const { component, id: componentId } = splitSearchResult(id)}
          <a
            href={`/components?items=${pluralize(
              componentId
            )}#${componentId}_${component}`}
            {id}
            role="option"
            aria-selected="false"
          >
            {#if component}
              <div class="result">
                <span class="component">{componentId}:</span>
                <span class="hash">#</span>
                <span class="property">
                  {component}
                </span>
              </div>
            {:else}
              <div class="result">
                <span class="component">{componentId}</span>
              </div>
            {/if}
          </a>
        {/each}
      </div>
    {/if}
  {/if}
</div>

<style lang="scss">
  @use "src/routes/breakpoints.scss" as breakpoints;

  @mixin shared {
    display: flex;
    align-items: center;
    background: rgb(255, 255, 255);
    border-radius: 50rem;
    border: none;
  }

  .outer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-bg-0);
    height: fit-content;
    width: 2.75rem;
    padding: 0.2rem;
    border-radius: 50rem;
    transition: all 0.3s ease-in-out;
    animation: pop-out 0.3s ease-in-out;
    .inner {
      @include shared;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    .activate {
      @include shared;
      aspect-ratio: 1/1;
      background: transparent;
      justify-content: center;
      height: 85%;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      z-index: 1;
    }
  }

  .expanded {
    width: 17rem;
    .inner {
      justify-content: flex-end;
      padding-left: 0.4rem;
      gap: 1rem;
    }
  }

  .search-results {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    position: absolute;
    top: 110%;
    left: 1rem;
    width: 17rem;
    max-height: 10rem;
    background: #fff;
    border-radius: 0.5rem;
    border: 1px solid var(--color-bg-1);
    box-shadow: 0 0 0.5rem var(--color-bg-1);
    padding: 0.5rem;
    overflow: auto;
    z-index: 1;
  }

  .search-results::-webkit-scrollbar {
    width: 10px;
    background-color: #aaaaaa00;
    border-radius: 5px;
  }

  .search-results::-webkit-scrollbar-thumb {
    background-color: var(--color-bg-1);
    border-radius: 5px;
  }

  .result {
    padding: 0.1rem 0.5rem;
    cursor: pointer;
  }

  .result.no-result {
    padding: 0.5rem;
    text-align: center;
  }

  a {
    transition: all 0.3s ease-in-out;
    border-radius: 0.5rem;
    text-decoration: none;
    color: inherit;
    &:focus,
    &:hover {
      background: var(--color-bg-1);
    }
  }

  .hash {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-theme-1);
  }

  .component {
    font-size: 1.1rem;
    font-weight: 600;
    margin-left: 0.2rem;
  }

  .property {
    font-size: 1rem;
    margin-left: 0.2rem;
  }

  @media screen and (max-width: breakpoints.$sm-mobile-breakpoint) {
    .outer {
      justify-content: flex-end;
      transform: scale(0.7);
    }
    .expanded {
      width: 14rem;
      .inner {
        justify-content: flex-end;
        padding-left: 0;
      }
    }

    .input-wrapper {
      width: 9.4rem;
      padding: 0.5rem;
    }

    .search-results {
      width: 11.5rem;
    }
  }
</style>
