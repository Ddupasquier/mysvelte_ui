<script lang="ts">
  import github from './images/github.svg';
</script>

<footer>
  MySvelteUI &copy; {new Date().getFullYear()}

  <a href="https://github.com/Ddupasquier/mysvelte_ui">
    <img src={github} alt="github" />
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
  }

  img {
    width: 2rem;
    height: 2rem;
  }
</style>
