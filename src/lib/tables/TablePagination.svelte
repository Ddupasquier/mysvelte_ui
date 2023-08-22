<script lang="ts">
    export let justify: "left" | "center" | "right" | "between" | "around" =
        "center";

    let navStyle: string;

    $: {
        switch (justify) {
            case "left":
                navStyle = "--justify: flex-start";
                break;
            case "right":
                navStyle = "--justify: flex-end";
                break;
            case "center":
                navStyle = "--justify: center";
                break;
            case "between":
                navStyle = "--justify: space-between";
                break;
            case "around":
                navStyle = "--justify: space-around";
                break;
            default:
                navStyle = "--justify: center";
        }
    }
</script>

<nav style={navStyle}>
    <button>Prev</button>
    <span>Page 1 of 10</span>
    <button>Next</button>
</nav>

<style lang="scss">
    nav {
        display: flex;
        justify-content: var(--justify);
        gap: 0.5rem;
        padding: 0.5rem;
        background-color: #f5f5f5;
        border-radius: 0.25rem;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>
