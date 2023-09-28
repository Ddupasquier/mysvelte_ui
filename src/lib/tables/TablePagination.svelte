<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import ChevronBack from "$lib/assets/ChevronBack.svelte";
    import ChevronForward from "$lib/assets/ChevronForward.svelte";
    import Button from "$lib/buttons/Button.svelte";

    export let justify: "left" | "center" | "right" | "between" | "around" =
        "center";
    export let background: string = "rgba(255, 255, 255)";
    export let color: string = "rgba(0, 0, 0)";
    export let currentPage: number;
    export let totalPages: number;

    const dispatch = createEventDispatcher();

    const nextPage = () => {
        if (currentPage < totalPages) {
            dispatch("pageChange", currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            dispatch("pageChange", currentPage - 1);
        }
    };

    let navStyle: string;

    $: {
        switch (justify) {
            case "left":
                navStyle = "--justify: flex-start;";
                break;
            case "right":
                navStyle = "--justify: flex-end;";
                break;
            case "center":
                navStyle = "--justify: center;";
                break;
            case "between":
                navStyle = "--justify: space-between;";
                break;
            case "around":
                navStyle = "--justify: space-around;";
                break;
            default:
                navStyle = "--justify: center;";
        }

        navStyle += `--background: ${background}; --color: ${color};`;
    }
</script>

<nav style={navStyle}>
    <slot name="back">
        <Button
            style="display: flex; align-items: center; justify-content: flex-start;"
            size="small"
            on:click={prevPage}
        >
            <ChevronBack />
        </Button>
    </slot>

    <span>Page {currentPage} of {totalPages}</span>

    <slot name="forward">
        <Button
            style="display: flex; align-items: center; justify-content: flex-end"
            size="small"
            on:click={nextPage}
        >
            <ChevronForward />
        </Button>
    </slot>
</nav>

<style lang="scss">
    nav {
        display: flex;
        justify-content: var(--justify);
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        background: var(--background);
        color: var(--color);
        border-radius: 0.25rem;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>
