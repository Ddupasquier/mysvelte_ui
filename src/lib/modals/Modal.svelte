<script lang="ts">
    import { Button } from "$lib";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    // Props
    /**
     * @component Modal
     *
     * @prop open
     * @description Controls whether the modal is visible or not.
     * @type {boolean}
     * @default false
     *
     * @prop size
     * @description Sets the size of the modal. Choose from 'small', 'medium', 'large', or 'auto'.
     * @type {string}
     * @default "auto"
     *
     * @prop position
     * @description Determines the position of the modal on the screen. Choose from 'center', 'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'.
     * @type {string}
     * @default "center"
     *
     * @prop background
     * @description Lets you personalize the modal's background style. Choose between 'light' or 'dark'.
     * @type {string}
     * @default "#fff"
     *
     * @prop color
     * @description Lets you personalize the modal's text color. Accepts any valid CSS color.
     * @type {string}
     * @default "#000"
     *
     * @prop title
     * @description Sets the title text in the modal's header.
     * @type {string}
     * @default "Modal Title"
     *
     * @prop outsideClick
     * @description Determines if a click outside the modal (on the overlay) will close the modal.
     * @type {boolean}
     * @default true
     *
     * @prop animated
     * @description If set to true, the modal will have fade in/out animations.
     * @type {boolean}
     * @default true
     *
     * @prop overlayColor
     * @description Lets you personalize the overlay's background color. Accepts any valid CSS color or gradient.
     * @type {string}
     * @default "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .7))"
     */

    export let open: boolean = false;
    export let size: "small" | "medium" | "large" | "auto" = "auto";
    export let position:
        | "center"
        | "top"
        | "bottom"
        | "left"
        | "right"
        | "top-left"
        | "top-right"
        | "bottom-left"
        | "bottom-right" = "center";
    export let background = "#fff";
    export let color = "#000";
    export let title = "Modal Title";
    export let outsideClick = true;
    export let animated = true;
    export let overlayColor: string = `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .7))`;
    export let btnText: string = "Open";
    export let btnColor: string = "";
    export let modalText: string = "";

    let modal: HTMLElement;
    let backdrop: HTMLElement;
    let firstFocusableEl: HTMLElement;
    let lastFocusableEl: HTMLElement;

    $: overlayStyle = `
        --overlay-color: ${overlayColor};
    `;

    $: modalStyle = `
        --modal-background: ${background};
        --modal-color: ${color};
    `;

    const showdivClick = () => {
        open = true;
    };

    const closeClick = () => {
        open = false;
    };

    let classList = ["modal"];
    let classString = "";

    onMount(() => {
        classList.push(size);
        classList.push(position);
        classList.push(background);

        classString = classList.join(" ");
    });

    $: classString = classList.join(" ");

    const findFocusableElements = (element: HTMLElement) =>
        Array.from(
            element.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
        ).filter(
            (el: Element) =>
                window.getComputedStyle(el as HTMLElement).visibility !==
                "hidden"
        );

    $: if (open && modal) {
        const focusableEls = findFocusableElements(modal);
        firstFocusableEl = focusableEls[0] as HTMLElement;
        lastFocusableEl = focusableEls[focusableEls.length - 1] as HTMLElement;
        firstFocusableEl && firstFocusableEl.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
            if (event.shiftKey) {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    event.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    event.preventDefault();
                }
            }
        } else if (event.key === "Escape") {
            closeClick();
        }
    };
</script>

{#if open}
    <div
        id="backdrop"
        class={position}
        bind:this={backdrop}
        on:click={outsideClick ? closeClick : null}
        on:keydown={handleKeyDown}
        transition:fade={{ duration: animated ? 200 : 0 }}
        style={overlayStyle}
        role="dialog"
        aria-modal="true"
    >
        <div
            class={classString}
            bind:this={modal}
            {...$$restProps}
            style={modalStyle}
            on:click={(event) => event.stopPropagation()}
        >
            <div class="modal-header">
                <h2>{title}</h2>
                <button class="close-btn" on:click={closeClick}>&times;</button>
            </div>
            <slot name="content">
                <div class="modal-content">{modalText}</div>
            </slot>
            <slot name="footer" />
        </div>
    </div>
{/if}

<slot name="trigger">
    <Button on:click={showdivClick} background={btnColor}>
        {btnText}
    </Button>
</slot>

<style lang="scss">
    div.modal {
        z-index: 1000;
        border-radius: 5px;
        border-width: 1px;
        transition: all 2s;
        flex-direction: column;
        position: fixed;
        background: var(--modal-background);
        color: var(--modal-color);
    }

    #backdrop {
        display: flex;
        background: var(--overlay-color);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        justify-content: center;
        align-items: center;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 1rem;
    }

    .modal-content {
        padding: 1rem;
    }

    .modal-footer {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        bottom: 0;
        padding: 1rem;
        width: 100%;
        box-sizing: border-box;
    }

    .close-btn {
        border: none;
        background: transparent;
        font-size: 2em;
        cursor: pointer;
    }

    div.small {
        width: 300px;
        height: 300px;
    }

    div.medium {
        width: 500px;
        height: 500px;
    }

    div.large {
        width: 800px;
        height: 800px;
    }

    div.auto {
        width: auto;
        height: auto;
    }

    #backdrop.top {
        align-items: flex-start;
        .modal {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-top: none;
        }
    }

    #backdrop.bottom {
        align-items: flex-end;
        .modal {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom: none;
        }
    }

    #backdrop.left {
        justify-content: flex-start;
        .modal {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-left: none;
        }
    }

    #backdrop.right {
        justify-content: flex-end;
        .modal {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-right: none;
        }
    }

    #backdrop.top-left {
        align-items: flex-start;
        justify-content: flex-start;
        .modal {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 0;
            border-top: none;
            border-left: none;
        }
    }

    #backdrop.top-right {
        align-items: flex-start;
        justify-content: flex-end;
        .modal {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-top: none;
            border-right: none;
        }
    }

    #backdrop.bottom-left {
        align-items: flex-end;
        justify-content: flex-start;
        .modal {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-top-left-radius: 0;
            border-bottom: none;
            border-left: none;
        }
    }

    #backdrop.bottom-right {
        align-items: flex-end;
        justify-content: flex-end;
        .modal {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
            border-bottom: none;
            border-right: none;
        }
    }
</style>
