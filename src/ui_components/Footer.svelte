<script lang="ts">
  import github from './images/github.svg';
</script>

<footer>
  MySvelteUI &copy; {new Date().getFullYear()}

  <a
    href="https://www.buymeacoffee.com/dylandupasquier"
    target="_blank"
    rel="noopener noreferrer"
    ><img
      src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=dylandupasquier&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=000000"
      alt="buy-me-a-coffee"
      title="I'm broke as heck."
    /></a
  >
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
    gap: .5rem;
  }

  img {
    height: 2.5rem;
  }
</style>
