<script lang="ts">
  import { github, npm } from "./icons";
  import { links } from "./constants";
  import { goto } from '$app/navigation';

  function navigateToLink(link: string) {
    goto(link);
  }

  function handleKeyDown(event: KeyboardEvent, link: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      navigateToLink(link);
    }
  }
</script>

<footer>
  MySvelteUI &copy; {new Date().getFullYear()}

  <div class="icon-container" role="presentation">
    {#each links as link}
      {#if link.name.toLowerCase() === 'github'}
        <a
          href={link.link}
          class="icon-link"
          on:click|preventDefault={() => navigateToLink(link.link)}
          on:keydown={(event) => handleKeyDown(event, link.link)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" class="icon" />
        </a>
      {:else if link.name.toLowerCase() === 'npm'}
        <a
          href={link.link}
          class="icon-link"
          on:click|preventDefault={() => navigateToLink(link.link)}
          on:keydown={(event) => handleKeyDown(event, link.link)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={npm} alt="NPM" class="icon" />
        </a>
      {/if}
    {/each}
  </div>

  <a
    href="https://www.buymeacoffee.com/dylandupasquier"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=dylandupasquier&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=000000"
      alt="Buy Me a Coffee"
    />
  </a>
</footer>

<style lang="scss">
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    text-align: center;
    margin-top: 1rem;
    padding: 3rem;
    gap: 0.5rem;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .icon {
    width: 30px;
  }

  .icon-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;
  }

  img {
    height: 2.5rem;
  }
</style>
