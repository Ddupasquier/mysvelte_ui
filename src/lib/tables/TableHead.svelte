<script lang="ts">
    export let columns: any[] = [];
    export let align: "left" | "center" | "right" = "left";

    $: thStyle = `
    --align: ${align};`;
</script>

<thead>
    <tr>
        {#each columns as column}
            <th style={thStyle}>{column}</th>
        {/each}
    </tr>
</thead>

<style lang="scss">
    th {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: var(--align);
        padding: .5rem 1rem;
    }
</style>
