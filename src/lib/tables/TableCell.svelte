<script lang="ts">
    import TextCell from "./TableTextCell.svelte";
    import LinkCell from "./TableLinkCell.svelte";
    import ButtonCell from "./TableButtonCell.svelte";

    export let value: any = "";
    export let align: "left" | "center" | "right" = "left";

    let url: string,
        action: ((e: MouseEvent) => void) | null | undefined,
        text: any,
        props: object | undefined;

    $: {
        if (typeof value === "object" && value.type) {
            ({ url, action, text, props } = value);
        }
    }
</script>

<td style={`text-align: ${align};`}>
    {#if value.type === "text"}
        <TextCell {text} />
    {:else if value.type === "link"}
        <LinkCell {url} {text} />
    {:else if value.type === "button"}
         <ButtonCell {action} {props} {text} />
    {:else}
        {value}
    {/if}
</td>

<style lang="scss">
    td {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0.5rem 1rem;
    }
</style>
