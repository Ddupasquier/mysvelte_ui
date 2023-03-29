<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import Input from '../lib/inputs/Input.svelte';
  import { MagnifyingGlassIcon } from './icons';
  import { componentIds } from '../stores/componentStore';
  import { splitSearchResult } from './utils';

  $: isOpen = false;
  let searchRef: HTMLDivElement;

  $: searchTerm = '';
  $: searchResults =
    searchTerm.toLowerCase() === 'all'
      ? $componentIds
      : $componentIds.filter((id) =>
          id.toLowerCase().includes(searchTerm.toLowerCase())
        );
  $: if (!isOpen) searchTerm = '';

  function handleAnchorClick (event: { preventDefault: () => void; currentTarget: any; }) {
		event.preventDefault()
		const link = event.currentTarget
		const anchorId = new URL(link.href).hash.replace('#', '')
		const anchor = document.getElementById(anchorId)
		window.scrollTo({
			top: anchor?.offsetTop,
			behavior: 'smooth'
		})
	}
</script>

<svelte:window
  on:click={(e) => {
    if (e.target instanceof HTMLElement) {
      if (!searchRef.contains(e.target)) {
        isOpen = false;
      }
    }
  }}
  on:keydown={(e) => {
    if (e.key === 'Escape') {
      isOpen = false;
    }

    let focusedResultIndex = -1;

    if (
      isOpen &&
      searchResults.length > 0 &&
      (e.key === 'ArrowDown' || e.key === 'ArrowUp')
    ) {
      e.preventDefault();
      const activeElementId = document.activeElement?.id;
      focusedResultIndex = searchResults.findIndex(
        (id) => id === activeElementId
      );
      if (e.key === 'ArrowDown') {
        if (focusedResultIndex === -1) {
          document.getElementById(searchResults[0])?.focus();
        } else if (focusedResultIndex < searchResults.length - 1) {
          const nextElementId = searchResults[focusedResultIndex + 1];
          document.getElementById(nextElementId)?.focus();
        }
      } else if (e.key === 'ArrowUp') {
        if (focusedResultIndex === -1) {
          document
            .getElementById(searchResults[searchResults.length - 1])
            ?.focus();
        } else if (focusedResultIndex > 0) {
          const prevElementId = searchResults[focusedResultIndex - 1];
          document.getElementById(prevElementId)?.focus();
        }
      }
    }
  }}
/>

<div class={isOpen ? 'outer expanded' : 'outer'} bind:this={searchRef}>
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
      >
        <Input bind:value={searchTerm} placeholder="Search || 'all'" />
      </div>
    {/if}
    <button class="activate" on:click={() => (isOpen = !isOpen)}
      ><MagnifyingGlassIcon color="gray" /></button
    >
  </div>

  {#if searchTerm !== ''}
    {#if searchResults.length === 0}
      <div class="search-results" transition:slide>
        <div class="result">No results found</div>
      </div>
    {:else}
      <div class="search-results" transition:slide>
        {#each searchResults as id}
          {@const { component, id: componentId } = splitSearchResult(id)}
          <a href={`/components?items=${component + 's'}#${componentId}`} {id} on:click={handleAnchorClick}>
            <div class="result">
              <span class="component">{component}</span>:
              <span class="hash">#</span><span class="property">
                {componentId}
              </span>
            </div>
          </a>
        {/each}
      </div>
    {/if}
  {/if}
</div>

<style lang="scss">
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
      background: rgb(255, 255, 255);
      justify-content: center;
      height: 85%;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      z-index: 1;
    }
  }

  .expanded {
    width: 20rem;
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
    background: white;
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
</style>
