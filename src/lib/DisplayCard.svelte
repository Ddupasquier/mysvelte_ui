<script lang="ts">
  import { onMount } from 'svelte';
  import github from 'svelte-highlight/styles/github';
  import SyntaxHighlight from './SyntaxHighlight.svelte';

  let codes: string[] = [];
  export let header: string = '';
  export let examples: any[] = [];
  export let description: string = '';

  onMount(() => {
    codes = examples.map((example) => example.code);
  });
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
      <svelte:component this={example.component} {...example.props}
        >{example.props.text}</svelte:component
      >
    {/each}
  </div>

  {#each codes as code}
    <SyntaxHighlight {code} />
  {/each}
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
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
  }
</style>
