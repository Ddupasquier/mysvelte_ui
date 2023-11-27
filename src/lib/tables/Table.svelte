<script lang="ts">
    // Imports
    import { onMount } from "svelte";

    import TableHead from "./TableHead.svelte";
    import TableBody from "./TableBody.svelte";
    import TablePagination from "./TablePagination.svelte";
    // import TableSort from "./TableSort.svelte";
    // import TableFilter from "./TableFilter.svelte";

    // Props
    /**
     * @component Table
     *
     * @prop rows!
     * @description An array of row data to be displayed in the table.
     * @type {any[]}
     * @default []
     *
     * @prop columns
     * @description An array of column headers for the table.
     * @type {string[]}
     * @default []
     *
     * @prop highlight
     * @description A boolean value that determines if rows should be highlighted on hover.
     * @type {boolean}
     * @default true
     *
     * @prop align
     * @description Sets the text alignment for the cells of the table. Choose from 'left', 'center', or 'right'.
     * @type {"left" | "center" | "right"}
     * @default "left"
     *
     * @prop border
     * @description A boolean value that determines if the table should have borders or not.
     * @type {boolean}
     * @default false
     *
     * @prop background
     * @description Lets you personalize the table's background color with any valid CSS color.
     * @type {string}
     * @default "rgba(250, 250, 250)"
     *
     * @prop color
     * @description Changes the color of the table's text. Use any valid CSS color.
     * @type {string}
     * @default "#000"
     *
     * @prop rowsPerPage
     * @description Specifies the number of rows to be displayed per page when pagination is enabled. Set to null for displaying all rows on one page.
     * @type {number | null}
     * @default null
     *
     * @prop pagination
     * @description A boolean value that determines if the table should have pagination controls or not.
     * @type {boolean}
     * @default false
     *
     */

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
