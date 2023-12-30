<script lang="ts">
    export let columns: any[] = [];
    export let align: "left" | "center" | "right" = "left";
    export let background: string = "rgba(255, 255, 255)";

    $: headStyles = {
        thStyle: `
    --align: ${align};`,

        theadStyle: `
    --background: ${background};`,
    };
</script>

<thead style={headStyles.theadStyle}>
    <tr>
        {#each columns as column}
            <th style={headStyles.thStyle}>{column}</th>
        {/each}
    </tr>
</thead>

<style lang="scss">
    thead {
        background: var(--background);
        overflow: hidden;
    }

    th {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: var(--align);
        padding: 0.5rem 1rem;

        &:first-child {
            border-top-left-radius: 0.25rem;
            border-bottom-left-radius: 0;
        }

        &:last-child {
            border-top-right-radius: 0.25rem;
            border-bottom-right-radius: 0;
        }
    }
</style>
