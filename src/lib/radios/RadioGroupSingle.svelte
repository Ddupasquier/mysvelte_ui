<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import RadioOption from "./RadioOption.svelte";

    export let options: OptionType[];
    export let selectedOption: OptionType | null;
    export let labelColor: string;
    export let color: string;
    export let size: "small" | "medium" | "large";
    export let disabled: boolean;
    export let groupId: string;

    type OptionType = string | { label: string; [key: string]: any };

    const dispatch = createEventDispatcher();

    const handleSelectionChange = (event: {
        detail: { option: any; selected: any };
    }) => {
        const { option, selected } = event.detail;
        let newSelection = selected ? option : null;
        dispatch("selectionChange", { selected: newSelection });
    };
</script>

<div role="radiogroup">
    {#each options as option}
        <RadioOption
            {option}
            selected={selectedOption === option}
            type="radio"
            {labelColor}
            {color}
            {size}
            {disabled}
            {groupId}
            on:change={handleSelectionChange}
        />
    {/each}
</div>
