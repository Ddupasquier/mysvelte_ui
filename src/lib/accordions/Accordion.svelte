<script lang="ts">
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";

    // Props
    export let data: { title: string; content: string }[] = [];
    export let animated: boolean = false;
    export let collapse: boolean = true;
    export let disabled: boolean = false;
    export let headerStyle: string = "";
    export let contentStyle: string = "";
    export let tabBg: string = "#c50eff";
    export let tabColor: string = "#fff";
    export let background: string = "#fff";
    export let color: string = "#000";

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
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleAccordion(index);
        }
    };

    // Reactive Statements
    $: accordionStyle = `
        background: ${background};
        --tab-bg-color: ${disabled ? "#ccc" : tabBg};
        --tab-color: ${disabled ? "#000" : tabColor};
        color: ${color};
    `;
    $: headerStyleComputed = `background: var(--tab-bg-color); color: var(--tab-color); ${headerStyle}`;
    $: contentStyleComputed = `${contentStyle}`;
</script>

<div class={classString} style={accordionStyle}>
    {#each data as { title, content }, i}
        <div class="accordion-item">
            <button
                class="accordion-header"
                on:click={() => toggleAccordion(i)}
                on:keydown={(e) => onKeydown(e, i)}
                style={headerStyleComputed}
                aria-expanded={expandedIndexes.includes(i)}
                aria-controls={`content-${i}`}
            >
                {title}
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
        width: 100%;
        position: relative;
        border-radius: 0.3rem;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
        overflow: hidden;
    }

    .accordion-header {
        padding: 1rem;
        border: none;
        cursor: pointer;
        width: 100%;
        text-align: left;
        font-weight: 800;
    }

    .accordion-content {
        padding: 1rem 2rem;
    }
</style>