import type { Meta, StoryObj } from '@storybook/svelte';

import Button from '$lib/buttons/Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'The text to display in the button',
    },
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      description: `The size of the button <br />(xsmall, small, medium, large, xlarge)`,
    },
    background: {
      control: { type: 'text' },
      description: 'The background color of the button accepts any CSS string valid to the background property',
    },
    color: {
      control: { type: 'text' },
      description: 'The color of the button accepts any CSS string valid to the color property',
    },
    style: {
      control: { type: 'text' },
      description: 'The style of the button accepts any CSS string valid to the style property',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Whether the button is in a loading state',
    },
    isError: {
      control: { type: 'boolean' },
      description: 'Whether the button is in an error state',
    },
    animated: {
      control: { type: 'boolean' },
      description: 'Whether the button is animated',
    }
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