<script lang="ts">
    export let highlight = false;
    export let index: number;
    export let background: string = "rgba(255, 255, 255, 0.5)";

    $: trStyle = `
    --background-highlight: ${highlight ? background : "none"};
    ${background}`;
</script>

<tr class={highlight && index % 2 === 1 ? "alternate" : ""} style={trStyle}>
    <slot />
</tr>

<style lang="scss">
    .alternate {
        background-color: var(--background-highlight);
    }
</style>
