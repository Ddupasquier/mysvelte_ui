<script lang="ts">
  import { onMount } from "svelte";
  import SyntaxHighlight from "../SyntaxHighlight.svelte";
  import { SunIcon, MoonIcon } from "../icons";
  import DisplayComponents from "./DisplayComponents.svelte";
  import DisplayGallery from "./DisplayGallery.svelte";
  import DisplayNestedComponents from "./DisplayNestedComponents.svelte";
  import DisplayPropsTable from "./DisplayPropsTable.svelte";

  let codes: string[] = [];
  export let id: string = "";
  export let header: string = "";
  export let examples: any[] = [];
  export let description: string = "";
  export let table: PropsTable | undefined;
  export let type: string;

  let isDarkMode: boolean = false;
  let containerRef: HTMLDivElement;

  onMount(() => {
    codes = examples.map((example) => example.code);
  });

  const createAndAnimateCircle = (container: HTMLDivElement) => {
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.right = "10px";
    circle.style.top = "10px";
    circle.style.background = isDarkMode ? "rgb(38, 34, 39)" : "rgb(252 247 255)";
    container.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  };
</script>

<div
  {id}
  class={isDarkMode ? "container dark" : "container light"}
  bind:this={containerRef}
>
  <button
    class="toggle"
    on:click={(e) => {
      isDarkMode = !isDarkMode;
      createAndAnimateCircle(containerRef);
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

    {#if type === "components"}
      <DisplayComponents {examples} />
    {:else if type === "table"}
      <DisplayPropsTable {table} {isDarkMode}/>
    {:else if type === "gallery"}
      <DisplayGallery {examples} />
    {:else if type === "nested"}
      <DisplayNestedComponents {examples} />
    {/if}

    {#each codes as code}
      {#if code}
        <SyntaxHighlight {code} {isDarkMode} />
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  @use "src/routes/breakpoints.scss" as breakpoints;
  .container {
    position: relative;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: 0.5s;
    &:hover {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }
  }

  .container.dark {
    background: rgb(38, 34, 39);
    h2,
    p {
      color: white;
    }
  }

  .container.light {
    background: var(--menu-color);
    color: black;
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
    z-index: 2;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #000;
    }
  }

  .content-wrapper {
    position: relative;
    z-index: 2;
  }

  .description {
    white-space: pre-line;
  }

  :global(.circle) {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.5s;
    z-index: 1;
    animation: circle 0.5s ease;
  }

  @keyframes circle {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(120);
    }
  }

  @media screen and (max-width: breakpoints.$sm-mobile-breakpoint) {
    p {
      font-size: 0.8rem;
    }
  }
</style>
