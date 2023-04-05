import type { Meta, StoryObj } from '@storybook/svelte';

import ButtonIcon from '$lib/buttons/ButtonIcon.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
    title: 'Example/Button/Variants/Button.Icon',
    component: ButtonIcon,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
        size: {
            control: { type: 'select' },
            options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
        },
    },
} satisfies Meta<ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
    args: {
        text: 'Button.Icon',
    },
};
