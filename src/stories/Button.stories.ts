import type { Meta, StoryObj } from '@storybook/svelte';

import Button from '$lib/buttons/Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      description: 'The size of the button',
    },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
  args: {
    text: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: "Buttons are used to trigger actions. They can be used in forms, in dialogs, or in standalone actions. They can be used as links, or used to submit forms. They can be styled in a variety of ways.",
      },
    },
  },
};