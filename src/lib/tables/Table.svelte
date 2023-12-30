<script lang="ts">
    // Imports
    import { onMount } from "svelte";

    import TableHead from "./TableHead.svelte";
    import TableBody from "./TableBody.svelte";
    import TablePagination from "./TablePagination.svelte";
    // import TableSort from "./TableSort.svelte";
    // import TableFilter from "./TableFilter.svelte";

    // Props
    export let rows: any[] = [];
    export let columns: string[] = [];
    export let highlight: boolean = true;
    export let align: "left" | "center" | "right" = "left";
    export let border: boolean = false;
    export let background: string = "rgba(250, 250, 250)";
    export let color: string = "#000";
    export let rowsPerPage: number | null = null;
    export let pagination: boolean = false;

    // Variables
    let classList = ["table"];
    let classString = "";

    $: tableStyle = `
        --border-collapse: ${!border ? "collapse" : "separate"};
        --background: ${background};
        --color: ${color};
        border-radius: ${pagination ? ".25rem .25rem 0 0" : "0.25rem"};`;

    // Lifecycle hooks
    onMount(() => {
        if (highlight) classList.push("highlight");
        classString = classList.join(" ");
    });

    // Pagination state
    let currentPage = 1;
    $: totalPages = rowsPerPage ? Math.ceil(rows.length / rowsPerPage) : 1;
    $: displayedRows = rowsPerPage
        ? rows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
        : rows;

    const handlePageChange = (event: CustomEvent<number>) => {
        currentPage = event.detail;
    };

    // Reactive statements
    $: classString = classList.join(" ");
</script>

<div class={classString}>
    <!-- <TableFilter />
    <TableSort /> -->
    <slot>
        <table style={tableStyle}>
            <TableHead {columns} {align} {background} />
            <TableBody rows={displayedRows} {align} {highlight} />
        </table>
    </slot>
    {#if pagination}
        <TablePagination
            {currentPage}
            {totalPages}
            {background}
            {color}
            on:pageChange={handlePageChange}
        />
    {/if}
</div>

<style lang="scss">
    .table {
        display: flex;
        flex-direction: column;
        overflow: auto;
        position: relative;
        width: 100%;

        table {
            border-radius: 0.25rem;
            width: 100%;
            border-collapse: var(--border-collapse);
            background: var(--background);
            color: var(--color);
        }
    }
</style>
