<script lang="ts">
    import { onMount } from "svelte";
    const defaultText = `This is an example of using the build in HTML dialog tag.<br>
		In this example you can enter some text and delete it using the Delete everything button below.`;
    let someText = defaultText;
    let info = "";
    let timeout: string | number | NodeJS.Timeout | undefined;

    let dialog: HTMLDialogElement; // Corrected type here

    // Show the dialog when clicking "Delete everything"
    const showDialogClick = (asModal = true) => {
        try {
            setInfo("");
            dialog[asModal ? "showModal" : "show"]();
        } catch (e) {
            if (e instanceof Error) {
                setInfo(e.message);
            }
        }
    };

    const closeClick = () => {
        dialog.close();
        setInfo("Dialog closed");
    };
    const confirmReset = () => {
        dialog.close();
        someText = defaultText;
        setInfo("Text reset to default content");
    };
    const confirmDelete = () => {
        dialog.close();
        someText = "";
        setInfo("Text deleted!");
    };
    const setInfo = (text: string) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        info = text;
        if (text !== "") {
            timeout = setTimeout(() => {
                info = "";
            }, 2500);
        }
    };
</script>

<h1>
    The HTML <code>Dialog</code> tag
</h1>
<blockquote>
    Most web apps have a need to show dialogs. It is in that perspect about time
    that HTML get a native dialog tag.<br />
    This is a simple test of the (soon to be fully) supported dialog tag.<br />
</blockquote>
<div contenteditable>
    {@html someText}
</div>
<em>You can enter text in the field above</em><br /><br />
<dialog bind:this={dialog}>
    <h1>Do you want to delete everything?</h1>
    <p>You will lose all your data.</p>
    <button on:click={closeClick}>Close</button>
    <button on:click={confirmReset}>Reset</button>
    <button on:click={confirmDelete}>Delete!</button>
</dialog>

<button on:click={() => showDialogClick(true)}>Show dialog as modal</button>
<button on:click={() => showDialogClick(false)}>Show dialog</button>
{#if info !== ""}
    <p>{info}</p>
{/if}
<br /><br />
<h3>My notes</h3>
<ul>
    <li>
        I cannot see that you can specify that a click "outside" the dialog can
        trigger a close of the dialog
    </li>
    <li>Showing the modal dialog you can still scroll in the content below</li>
    <li>The <code>open</code> attribute seems not to work</li>
</ul>
<div>
    <a href="https://webkit.org/blog/12209/introducing-the-dialog-element/"
        >Read more about HTML dialog</a
    >
</div>

<style>
    :root {
        padding: 10px;
    }
    [contenteditable] {
        margin: 10px 0 0 0;
        background: #eee;
        padding: 20px;
    }
    dialog {
        border-radius: 5px;
        border-width: 1px;
        transition: all 2s;
    }
    dialog::backdrop {
        background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
        animation: fade-in 1s;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
