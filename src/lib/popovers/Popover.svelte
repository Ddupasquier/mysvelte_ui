<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import { afterUpdate, onMount } from "svelte";
  import { fly } from "svelte/transition";

  export let direction: "top" | "bottom" | "left" | "right" = "right";
  export let trigger: "hover" | "click" = "hover";
  export let flyIn: boolean = true;
  export let style: string = "";
  export let content: string = "Popover Content";
  export let text: string = "Popover";

  let directionStyle: string = "";
  let isTriggered = false;
  let triggerEl: HTMLElement;
  let popoverEl: HTMLElement;

  const positionPopover = () => {
    if (!triggerEl || !popoverEl) return;

    const triggerRect = triggerEl.getBoundingClientRect();
    const popoverRect = popoverEl.getBoundingClientRect();

    let top = triggerRect.top;
    let left = triggerRect.left;

    switch (direction) {
      case "top":
        top -= popoverRect.height + 5;
        left += triggerRect.width / 2 - popoverRect.width / 2;
        break;
      case "bottom":
        top += triggerRect.height + 5;
        left += triggerRect.width / 2 - popoverRect.width / 2;
        break;
      case "left":
        top += triggerRect.height / 2 - popoverRect.height / 2;
        left -= popoverRect.width + 5;
        break;
      default:
        top += triggerRect.height / 2 - popoverRect.height / 2;
        left += triggerRect.width + 5;
        break;
    }

    directionStyle = `top: ${top}px; left: ${left}px;`;
  };

  const calcFly = () => {
    if (!flyIn) return { x: 0, y: 0, duration: 0 };
    switch (direction) {
      case "top":
        return { x: 0, y: -50, duration: 200 };
      case "bottom":
        return { x: 0, y: 50, duration: 200 };
      case "left":
        return { x: -50, y: 0, duration: 200 };
      default:
        return { x: 50, y: 0, duration: 200 };
    }
  };

  onMount(() => {
    positionPopover();
  });

  afterUpdate(() => {
    positionPopover();
  });

  $: {
    positionPopover();
  }

  const doHover = () => {
    if (trigger === "hover") {
      isTriggered = true;
    }
  };

  const doLeave = () => {
    if (trigger === "hover") {
      isTriggered = false;
    }
  };

  const doClick = () => {
    if (trigger === "click") {
      isTriggered = !isTriggered;
    }
  };

  const doEscape = (
    e: KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement }
  ) => {
    if (trigger === "click" && e.key === "Escape") {
      isTriggered = false;
    }
  };
</script>

<svelte:window on:resize={positionPopover} on:scroll={positionPopover} />

<div class="popover-wrapper" {...$$restProps}>
  <div
    class="trigger"
    on:mouseenter={doHover}
    on:mouseleave={doLeave}
    on:click={doClick}
    on:keydown={(e) => doEscape(e)}
    bind:this={triggerEl}
  >
    <slot name="trigger">
      <Button>{text}</Button>
    </slot>
  </div>
  {#if isTriggered}
    <div
      class="popover"
      style={directionStyle + style}
      bind:this={popoverEl}
      in:fly={calcFly()}
    >
      <slot name="content">
        <span>{content}</span>
      </slot>
    </div>
  {/if}
</div>

<style lang="scss">
  .popover-wrapper {
    width: fit-content;
    height: fit-content;
    position: relative;
  }

  .popover {
    position: fixed;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    padding: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    width: fit-content;
    height: fit-content;
    z-index: 1000;
  }
</style>
