<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import RadioOption from "./RadioOption.svelte";

    export let options: OptionType[];
    export let selectedOptions: OptionType[];
    export let labelColor: string;
    export let color: string;
    export let size: "small" | "medium" | "large";
    export let disabled: boolean;
    export let groupId: string;
    export let checkbox: boolean;

    type OptionType = string | { label: string; [key: string]: any };

    const dispatch = createEventDispatcher();

    const handleSelectionChange = (event: {
        detail: { option: any; selected: any };
    }) => {
        const { option, selected } = event.detail;
        if (selected) {
            if (!selectedOptions.includes(option)) {
                selectedOptions = [...selectedOptions, option];
            }
        } else {
            selectedOptions = selectedOptions.filter((o) => o !== option);
        }
        dispatch("selectionChange", { selected: selectedOptions });
    };
</script>

<div role="group">
    {#each options as option}
        <RadioOption
            {option}
            selected={selectedOptions.includes(option)}
            type={checkbox ? "checkbox" : "radio"}
            {labelColor}
            {color}
            {size}
            {disabled}
            {groupId}
            on:change={handleSelectionChange}
        />
    {/each}
</div>
