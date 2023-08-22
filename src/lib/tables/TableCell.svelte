<script lang="ts">
    export let value: unknown = "";
    export let align: "left" | "center" | "right" = "left";

    $: tdStyle = `
    --align: ${align};`;
</script>

<td style={tdStyle}>{value}</td>

<style lang="scss">
    td {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: var(--align);
        padding: .5rem 1rem;
    }
</style>
