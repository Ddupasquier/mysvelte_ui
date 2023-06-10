<script lang="ts">
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";

    // Props
    /**
     * @component Accordion
     * @type {Array} accordion_data - The array of accordion items. Each item should have a `title`, `details`, and a `content`. , []
     * @type {boolean} accordion_collapse - If true, only one item can be expanded at a time. Expanding another item will collapse the currently expanded item. , true
     * @type {boolean} accordion_animated - If true, the accordion transitions will be animated. , false
     * @type {boolean} accordion_disabled - If true, the accordion will be disabled and users cannot interact with it. , false
     * @type {string} accordion_headerStyle - The CSS style for the accordion item headers. , ""
     * @type {string} accordion_contentStyle - The CSS style for the accordion item content. , ""
     * @type {string} tabBg - The background color for the tab. , "#c50eff"
     * @type {string} tabColor - The text color for the tab. , "#fff"
     * @type {string} background - The background color for the accordion. , "#fff"
     * @type {string} color - The text color for the accordion. , "#000"
     * @type {boolean} divider - If true, a divider will be added between each accordion item. , false
     */

    export let data: { title: string; details?: string; content: string }[] =
        [];
    export let animated: boolean = true;
    export let collapse: boolean = true;
    export let disabled: boolean = false;
    export let headerStyle: string = "";
    export let contentStyle: string = "";
    export let tabBg: string = "#c50eff";
    export let tabColor: string = "#fff";
    export let background: string = "#fff";
    export let color: string = "#000";
    export let height: string = "fit-content";
    export let width: string = "100%";
    export let divider: boolean = false;

    // State
    let expandedIndexes: number[] = [];

    // Variables
    let classList = ["accordion"];
    let classString = "";

    // Lifecycle Hooks
    onMount(() => {
        classList.push(animated ? "animated" : "");
        classString = classList.join(" ");
    });

    // Functions
    const toggleAccordion = (index: number) => {
        if (disabled) return;

        const currentIndex = expandedIndexes.indexOf(index);

        if (currentIndex === -1) {
            if (collapse) {
                expandedIndexes = [index];
            } else {
                expandedIndexes = [...expandedIndexes, index];
            }
        } else {
            expandedIndexes = [
                ...expandedIndexes.slice(0, currentIndex),
                ...expandedIndexes.slice(currentIndex + 1),
            ];
        }
    };

    // Key event handler
    const onKeydown = (event: KeyboardEvent, index: number) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleAccordion(index);
        }
    };

    // Reactive Statements
    $: accordionStyle = `
        background: ${background};
        --tab-bg-color: ${disabled ? "#ccc" : tabBg};
        --tab-color: ${disabled ? "#000" : tabColor};
        height: ${height};
        width: ${width};
        color: ${color};
    `;
    $: headerStyleComputed = `
        background: var(--tab-bg-color); 
        color: var(--tab-color); 
        border-bottom: ${divider ? `1px solid` : "none"}; 
        ${headerStyle}
    `;
    $: contentStyleComputed = `${contentStyle}`;
</script>

<div class={classString} style={accordionStyle}>
    {#each data as { title, details, content }, i (i)}
        <div class="accordion-item">
            <button
                class="accordion-header"
                on:click={() => toggleAccordion(i)}
                on:keydown={(e) => onKeydown(e, i)}
                style={`${headerStyleComputed} ${
                    divider && i < data.length - 1
                        ? `border-bottom: 1px solid ${tabColor};`
                        : ""
                }`}
                aria-expanded={expandedIndexes.includes(i)}
                aria-controls={`content-${i}`}
            >
                <div class="title-container">{title}</div>
                {#if details}
                    <div class="details-container">{details}</div>
                {/if}
            </button>
            {#if expandedIndexes.includes(i)}
                <div
                    class="accordion-content"
                    transition:slide={{ duration: animated ? 500 : 0 }}
                    style={contentStyleComputed}
                    id={`content-${i}`}
                    aria-labelledby={`accordion-header-${i}`}
                    role="region"
                >
                    {content}
                </div>
            {/if}
        </div>
    {/each}
</div>

<style lang="scss">
    .accordion {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        border-radius: 0.3rem;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
        overflow: hidden;
    }

    .accordion-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: var(--tab-bg-color);
    }

    .accordion-item:last-child .accordion-header {
        border-bottom: none !important;
    }

    .accordion-header {
        padding: 1rem 0;
        border: none;
        cursor: pointer;
        width: 98%;
        text-align: left;
        font-weight: 800;
    }

    .details-container {
        font-size: 1rem;
        font-weight: 400;
    }

    .accordion-content {
        width: 97%;
        padding: 1rem;
        background: white;
    }
</style>
