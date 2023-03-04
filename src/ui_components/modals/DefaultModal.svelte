<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  import { defaultModalShown } from '../../../src/stores/modalStore';
</script>

<div class="modal" transition:fade>
  <div class="modal-wrapper" transition:scale>
    <div class="modal-head">
      <button
        type="button"
        class="close"
        on:click={() => defaultModalShown.set(false)}
      >
        X</button
      >
    </div>
    <div class="modal-content">
      <slot />
    </div>
  </div>
</div>

<style lang="scss">
  @use 'src/routes/breakpoints.scss' as breakpoints;
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  .modal-wrapper {
    background: #fff;
    padding: 1rem;
    border-radius: 0.3rem;
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.5);
    max-width: 40rem;
    width: fit-content;
  }

  .modal-head {
    display: flex;
    justify-content: flex-end;
  }

  .close {
    border: none;
    background: none;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }

  .modal-content {
    padding: 1rem;
  }

  @media screen and (max-width: breakpoints.$col-breakpoint) {
    .modal-wrapper {
      padding: 0.5rem;
    }
  }
</style>
