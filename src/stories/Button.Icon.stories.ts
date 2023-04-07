import type { Meta, StoryObj } from '@storybook/svelte';

import ButtonIcon from '$lib/buttons/ButtonIcon.svelte';

const meta = {
    title: 'Example/Button/Button.Icon',
    component: ButtonIcon,
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: { type: 'text' },
            description: "The text for the button"
        },
        size: {
            control: { type: 'select' },
            options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
            description: "The size of the button <br />(xsmall, small, medium, large, xlarge)"
        },
        background: {
            control: { type: 'text' },
            description: "The background color of the button accepts any CSS string valid to the background property"
        },
        color: {
            control: { type: 'text' },
            description: "The color of the button accepts any CSS string valid to the color property"
        },
        style: {
            control: { type: 'text' },
            description: "The style of the button accepts any CSS string valid to the style property"
        },
        disabled: {
            control: { type: 'boolean' },
            description: "Whether the button is disabled"
        },
        isLoading: {
            control: { type: 'boolean' },
            description: "Whether the button is in a loading state"
        },
        isError: {
            control: { type: 'boolean' },
            description: "Whether the button is in an error state"
        },
        animated: {
            control: { type: 'boolean' },
            description: "Whether the button is animated"
        },
        icon: {
            control: { type: 'text' },
            description: "The icon prop accepts a string of the html for the svg or image to be used as the icon || The named icon slot accepts an svg element to be used as the icon"
        }
    },
} satisfies Meta<ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Button.Icon',
    },
    parameters: {
        docs: {
            source: {
                code: `<Button.Icon {disabled} {size} {background} {animated} {color} {isLoading} {isError} {style}>
                <svg slot="icon" />
                <svelte:fragment slot="text>Button</svelte:fragment>
                </Button.Icon>`,
            },
            description: {
                story: `<b>import { Button } from 'mysvelte-ui';</b><br />The Button.Icon component is a button with an icon. The icon prop accepts a string of the html for the svg or image to be used as the icon || The named icon slot accepts an svg element to be used as the icon`
            },
        },
    },
};
