<script lang="ts">
    import { onMount } from "svelte";

    // Props
    /**
     * @component Toggle
     *
     * @prop disabled
     * @description Disables the toggle if set to `true`. Provide a boolean value to control its availability.
     * @type {boolean}
     * @default false
     *
     * @prop size
     * @description Specifies the size of the toggle. Options include "xsmall", "small", "medium", "large", or "xlarge" to control its dimensions.
     * @type {"xsmall" | "small" | "medium" | "large" | "xlarge"}
     * @default "medium"
     *
     * @prop color
     * @description Determines the color of the toggle handle. Accepts any valid CSS color value.
     * @type {string}
     * @default "#C50EFF"
     *
     * @prop style
     * @description Applies custom CSS styles to the toggle. Use any valid CSS value to customize its appearance.
     * @type {string}
     * @default ""
     *
     * @prop isChecked
     * @description Indicates the checked state of the toggle. If `true`, the toggle will be in the "on" position by default.
     * @type {boolean}
     * @default false
     *
     * @prop id
     * @description Provides a unique identifier for the toggle. Enter any valid string value.
     * @type {string}
     * @default ""
     */

    export let disabled: boolean = false;
    export let size: "xsmall" | "small" | "medium" | "large" | "xlarge" =
        "medium";
    export let color: string = "#C50EFF";
    export let style: string = "";
    export let isChecked: boolean = false;
    export let id: string = "";

    // Variables
    let classList = ["toggle"];
    let classString = "";

    // Lifecycle Hooks
    onMount(() => {
        classList.push(size);
        if (disabled) {
            classList.push("disabled");
        }
        classString = classList.join(" ");
    });

    // Reactive Statements
    $: {
        classList = ["toggle", size];
        if (disabled) {
            classList.push("disabled");
        }
        classString = classList.join(" ");
    }

    $: toggleStyle = `
    color: ${color};
    ${style}
    --toggle-color: ${isChecked ? color : "#ccc"};
  `;
</script>

<label for={id} class={classString} style={toggleStyle} {...$$restProps}>
    <input
        {id}
        type="checkbox"
        {disabled}
        bind:checked={isChecked}
        aria-checked={isChecked}
    />
    <span class="slider" />
</label>

<style lang="scss">
    .toggle {
        position: relative;
        display: inline-block;
        outline: 3px solid var(--toggle-color);
        border-radius: 5rem;
        transition: all 0.4s;
    }

    .toggle input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 5rem;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        background-color: var(--toggle-color);
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 5rem;
        transform: translateX(0);
    }

    .toggle input:checked + .slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }

    .xsmall {
        width: 20px;
        height: 10px;
    }

    .xsmall .slider:before {
        height: 7px;
        width: 7px;
    }

    .xsmall input:checked + .slider:before {
        transform: translateX(10px);
    }

    .small {
        width: 30px;
        height: 15px;
    }

    .small .slider:before {
        height: 12px;
        width: 12px;
    }

    .small input:checked + .slider:before {
        transform: translateX(15px);
    }

    .medium {
        width: 40px;
        height: 20px;
    }

    .medium .slider:before {
        height: 16px;
        width: 16px;
    }

    .medium input:checked + .slider:before {
        transform: translateX(20px);
    }

    .large {
        width: 50px;
        height: 25px;
    }

    .large .slider:before {
        height: 20px;
        width: 20px;
    }

    .large input:checked + .slider:before {
        transform: translateX(25px);
    }

    .xlarge {
        width: 60px;
        height: 30px;
    }

    .xlarge .slider:before {
        height: 26px;
        width: 26px;
    }

    .xlarge input:checked + .slider:before {
        transform: translateX(30px);
    }

    // Disabled style
    .disabled {
        cursor: not-allowed;
    }
</style>
