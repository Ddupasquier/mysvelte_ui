<script lang="ts">
    import { Table } from "$lib";

    export let columns: string[] = [];
    export let rows: any[] = [];
    export let pagination: boolean = false;
    export let rowsPerPage: number | null = null;
</script>

<div class="examples">
    <Table {columns} {rows} {pagination} {rowsPerPage} />
</div>

<style lang="scss">
    .examples {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 1rem 0;
    }
</style>
