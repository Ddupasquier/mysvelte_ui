<script lang="ts">
    // Imports
    import { onMount } from "svelte";

    import TableHead from "./TableHead.svelte";
    import TableBody from "./TableBody.svelte";
    import TablePagination from "./TablePagination.svelte";
    // import TableSort from "./TableSort.svelte";
    // import TableFilter from "./TableFilter.svelte";

    // Props
    export let rows: Array<any> = [];
    export let columns: Array<string> = [];
    export let highlight: boolean = true;
    export let align: "left" | "center" | "right" = "left";
    export let border: boolean = true;

    // Variables
    let classList = ["table"];
    let classString = "";

    $: tableStyle = `
        --border-collapse: ${border ? "collapse" : "separate"};`;

    // Lifecycle hooks
    onMount(() => {
        if (highlight) classList.push("highlight");
        classString = classList.join(" ");
    });

    // Reactive statements
    $: classString = classList.join(" ");
</script>

<div class={classString}>
    <!-- <TableFilter />
    <TableSort /> -->
    <table style={tableStyle}>
        <TableHead {columns} {align} />
        <TableBody {rows} {highlight} {align} />
    </table>
    <TablePagination />
</div>

<style lang="scss">
    .table {
        display: flex;
        flex-direction: column;
        overflow: auto;
        position: relative;

        table {
            width: 100%;
            border-collapse: var(--border-collapse);
        }
    }
</style>
