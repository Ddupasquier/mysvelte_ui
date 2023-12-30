<script lang="ts">
    import TableCell from "./TableCell.svelte";

    export let row: any = {};
    export let highlight = false;
    export let index: number;
    export let background: string = "rgba(255, 255, 255, 0.5)";
    export let hover: boolean = true;
    export let align: "left" | "center" | "right" = "left";

    $: trStyle = `
    --background-highlight: ${highlight ? background : "none"};
    --background-hover: ${hover ? "brightness(.01)" : "none"};
    ${background}`;
</script>

<tr class={highlight && index % 2 === 0 ? "alternate" : ""} style={trStyle}>
    <slot>
        {#each Object.values(row) as value, index (index)}
            <TableCell {value} {align} />
        {/each}
    </slot>
</tr>

<style lang="scss">
    .alternate {
        background-color: var(--background-highlight);
    }

    // tr {
    //     transition: all 0.3s;
    //     &:hover {
    //         filter: var(--background-hover);
    //     }
    // }
</style>
