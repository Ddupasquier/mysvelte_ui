<script lang="ts">
    import { onMount } from "svelte";

    // Props
    /**
     * @component Loader
     *
     * @prop color
     * @description Choose the color of the loader. This should be in a recognized color format, such as hex code.
     * @type {string}
     *  @default "#C50EFF"
     *
     * @prop size
     * @description Choose the size of the loader. You have options from "small" up to "large", with "medium" in between.
     * @type {"small" | "medium" | "large"}
     * @default "medium"
     *
     * @prop style
     * @description Apply additional inline CSS styles to the loader.
     * @type {string}
     * @default ""
     *
     * @prop speed
     * @description Choose the speed of the loader. You have options from "fast" up to "slow", with "medium" in between.
     * @type {"fast" | "medium" | "slow"}
     * @default "medium"
     *
     * @prop icon
     * @description The icon of the loader can be changed to any SVG icon. You can use the <a href="https://www.flaticon.com/" target="_blank">Flaticon</a> website to find an icon you like, and then copy the SVG code into this prop.
     * @type {string}
     * @default "The Svelte logo"
     */
    export let color: string = "#C50EFF";
    export let size: "small" | "medium" | "large" = "medium";
    export let style: string = "";
    export let icon: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107 128"><title>svelte-logo</title><path d="M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157"/><path d="M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287" style="fill:#fff"/></svg>`;
    export let speed: "fast" | "medium" | "slow" = "medium";

    // Local state
    let containerStyle = "";
    let loaderStyle = "";
    let iconRef: HTMLElement;

    // Size values
    const sizeValues: Record<typeof size, number> = {
        small: 25,
        medium: 35,
        large: 55,
    };

    // Speed values
    const speedToDuration = {
        fast: "0.3s",
        medium: "0.6s",
        slow: "1.2s",
    };

    // Update styles on prop changes
    $: {
        containerStyle = `display: flex; align-items: center; justify-content: center; ${style}`;
        loaderStyle = `width: ${sizeValues[size]}px; height: ${sizeValues[size]}px;`;

        if (iconRef) {
            iconRef.style.setProperty(
                "--animation-duration",
                speedToDuration[speed]
            );
        }
    }

    // Update animation durations

    const updateIconColor = () => {
        if (icon !== "") {
            let iconSvg = iconRef.querySelector("svg");

            if (iconSvg) {
                let paths = iconSvg.querySelectorAll("path");
                paths.forEach((path) => {
                    path.setAttribute("fill", color);
                });
            }
        }
    };

    // Lifecycle hooks
    onMount(() => {
        updateIconColor();
    });
</script>

<div class="loader-container" style={containerStyle}>
    <div bind:this={iconRef} style={loaderStyle} class="icon">
        <slot name="icon">{@html icon}</slot>
    </div>
</div>

<style>
    .loader-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon {
        transform-origin: center;
        animation: bounce var(--animation-duration) infinite alternate;
    }

    @keyframes bounce {
        0% {
            transform: translateY(0) scaleY(1) scaleX(1.2);
        }
        100% {
            transform: translateY(-20px) scaleY(1.3) scaleX(1);
        }
    }
</style>
