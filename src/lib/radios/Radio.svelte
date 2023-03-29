<script lang="ts">
    import { createEventDispatcher } from "svelte";

    // Props
    export let options: string[] = [];
    export let labelColor: string = "#000";
    export let color: string = "#000";
    export let size: "small" | "medium" | "large" = "medium";
    export let disabled: boolean = false;
    export let selected: string[] = [];
    export let groupId: string = "radio-group";
    export let use: "one" | "many" = "one";

    // Local state
    let inputStyle = "";

    // Size values
    const sizeValues: Record<typeof size, string> = {
        small: ".65",
        medium: ".9",
        large: "1.15",
    };

    // Event dispatcher
    const dispatch = createEventDispatcher();

    // Event handlers
    const handleInput = (event: Event, option: string) => {
        const target = event.target as HTMLInputElement;
        if (target.checked) {
            if (use === "one") {
                selected = [option];
            } else {
                selected.push(option);
            }
        } else {
            const index = selected.indexOf(option);
            if (index > -1) {
                selected.splice(index, 1);
            }
        }
        selected = [...selected];
        dispatch("updateSelected", selected);
    };
</script>

<div class="radio-container" role="radiogroup">
    {#each options as option (option)}
        <div class="radio-option" {...$$restProps}>
            <label
                class="label"
                style="color: {labelColor}"
                id={`label-${option}`}
            >
                <input
                    type={use === "one" ? "radio" : "checkbox"}
                    role={use === "one" ? "radio" : "checkbox"}
                    name={groupId}
                    aria-checked={selected.includes(option)}
                    aria-labelledby={`label-${option}`}
                    {disabled}
                    checked={selected.includes(option)}
                    on:change={(e) => handleInput(e, option)}
                    style={inputStyle}
                    {...$$restProps}
                />
                <span
                    class="radio-mark"
                    style="border-color: {color}; transform: scale({sizeValues[
                        size
                    ]})"
                />
                {option}
            </label>
        </div>
    {/each}
</div>

<style>
    .radio-container {
        display: flex;
        flex-direction: column;
        width: fit-content;
    }

    .radio-option {
        margin-bottom: 0.5rem;
    }

    .label {
        position: relative;
        display: inline-flex;
        align-items: center;
        margin-right: 1rem;
        font-size: 1rem;
        cursor: pointer;
    }

    .label input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .label input:disabled {
        visibility: hidden;
    }

    .radio-mark {
        position: relative;
        display: inline-block;
        width: 1.25em;
        height: 1.25em;
        margin-right: 0.5em;
        border: 2px solid #ccc;
        border-radius: 50%;
        background-color: transparent;
    }

    .radio-mark::before {
        content: "";
        position: absolute;
        display: none;
        left: 0.375em;
        top: 0.375em;
        width: 0.5em;
        height: 0.5em;
        border-radius: 50%;
        background-color: rgb(129, 129, 129);
    }

    .label input:checked ~ .radio-mark::before {
        display: block;
    }

    .label:hover input:not(:disabled) ~ .radio-mark {
        border-color: #000;
    }

    .label:hover input:not(:disabled) ~ .radio-mark::before {
        border-color: inherit;
        filter: brightness(0.5);
    }

    .label input:disabled ~ .radio-mark {
        opacity: 0.5;
    }
</style>
