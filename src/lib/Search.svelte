<script lang="ts">
  import { fade } from 'svelte/transition';
  import Input from './for-package/inputs/Input.svelte';
  import { MagnifyingGlassIcon } from '$lib/icons';

  let isOpen = true;
</script>

<div class={isOpen ? 'outer expanded' : 'outer'}>
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
        <Input />
      </div>
    {/if}
    <button class="activate" on:click={() => (isOpen = !isOpen)}
      ><MagnifyingGlassIcon color="gray" /></button
    >
  </div>
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
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-bg-0);
    height: 2.75rem;
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
    }
  }

  .expanded {
    width: 20rem;
    .inner {
      justify-content: flex-end;
      padding-left: 1rem;
      gap: 1rem;
    }
  }
</style>
