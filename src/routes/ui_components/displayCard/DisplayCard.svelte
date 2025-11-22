<script lang="ts">
  import { onMount } from "svelte";
  import SyntaxHighlight from "../SyntaxHighlight.svelte";
  import { SunIcon, MoonIcon } from "../icons";
  import DisplayComponents from "./DisplayComponents.svelte";
  import DisplayGallery from "./DisplayGallery.svelte";
  import DisplayNestedComponents from "./DisplayNestedComponents.svelte";
  import DisplayPropsTable from "./DisplayPropsTable.svelte";
  import DisplayTableComp from "./DisplayTableComp.svelte";

  import type { PropsTable } from "../../../app";

  export let id: string = "";
  export let header: string = "";
  export let examples: any = null;
  export let description: string = "";
  export let table: PropsTable | undefined;
  export let type: string;
  export let rows: any[] = [];
  export let columns: string[] = [];
  export let pagination: boolean = false;
  export let rowsPerPage: number | null = null;

  let codes: string[] = [];
  let isDarkMode: boolean = false;

  onMount(() => {
    if (examples)
      codes = examples.map((example: { code: any }) => example.code);
  });
</script>

<div
  {id}
  class={isDarkMode
    ? "display-card-container dark"
    : "display-card-container light"}
>
  <button
    class="toggle"
    on:click={() => {
      isDarkMode = !isDarkMode;
    }}
    name="toggle dark mode"
    aria-label="Toggle dark mode"
  >
    {#if isDarkMode}
      <SunIcon />
    {:else}
      <MoonIcon />
    {/if}
  </button>
  <div class="content-wrapper">
    <h2>{header}</h2>
    <p class="description">
      {description}
    </p>

    <slot name="override">
      {#if type === "components"}
        <DisplayComponents {examples} />
      {:else if type === "table"}
        <DisplayPropsTable {table} {isDarkMode} />
      {:else if type === "gallery"}
        <DisplayGallery {examples} />
      {:else if type === "nested"}
        <DisplayNestedComponents {examples} />
      {:else if type === "tableComp"}
        <DisplayTableComp {columns} {rows} {pagination} {rowsPerPage} />
      {/if}
    </slot>

    {#each codes as code}
      {#if code}
        <SyntaxHighlight {code} {isDarkMode} />
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  @use "../../breakpoints.scss" as breakpoints;
  .display-card-container {
    position: relative;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: background-color 1s; // change this line to adjust the color transition
    &:hover {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }
  }

  .display-card-container.dark {
    background: rgb(38, 34, 39);
    transition: background-color 1s; // add this line
    h2,
    p {
      color: #fff;
    }
  }

  .display-card-container.light {
    background: var(--menu-color);
    transition: background-color 1s; // add this line
    color: #000;
  }

  .toggle {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    border: none;
    font-size: 1rem;
    color: #ccc;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #000;
    }
  }

  .content-wrapper {
    position: relative;
  }

  .description {
    white-space: pre-line;
  }

  @media screen and (max-width: breakpoints.$sm-mobile-breakpoint) {
    p {
      font-size: 0.8rem;
    }
  }
</style>
