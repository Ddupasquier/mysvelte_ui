<script lang="ts">
    import TableRow from "./TableRow.svelte";
    import TableCell from "./TableCell.svelte";

    export let rows: any[] = [];
    export let align: "left" | "center" | "right" = "left";
    export let highlight = false;
</script>

<tbody>
    <slot>
        {#each rows as row, index}
            <TableRow {index} {highlight} {align}>
                {#each Object.values(row) as value}
                    <TableCell {value} {align} />
                {/each}
            </TableRow>
        {/each}
    </slot>
</tbody>

<style lang="scss">
</style>
