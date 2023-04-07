import type { Meta, StoryObj } from '@storybook/svelte';

import Button from '$lib/buttons/Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: 'Example/Button/Default',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'Define the button text. Overridden by using the slot (see Slots section).',
    },
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      description: `Choose the button size from "xsmall", "small", "medium", "large", or "xlarge". Goldilocks approved!`,
    },
    background: {
      control: { type: 'text' },
      description: 'Customize the button\'s background color like a CSS wizard.',
    },
    color: {
      control: { type: 'text' },
      description: 'Set the button text color to complement its stunning background.',
    },
    style: {
      control: { type: 'text' },
      description: 'Inject custom inline styles for a one-of-a-kind button creation.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Toggle button interactivity. Set to true to disable the button and prevent clicks.',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Show the button is hard at work with a loading animation. Set to true for a spinning spectacle.',
    },
    isError: {
      control: { type: 'boolean' },
      description: 'Alert users of an error with a red error animation. Set to true when things go south.',
    },
    animated: {
      control: { type: 'boolean' },
      description: 'Add some pizzazz by enabling animation on button clicks. Set to true to unleash the magic.',
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
      source: {
        code: `<Button {disabled} {size} {background} {animated} {color} {isLoading} {isError} {style}>Button</Button>`,
        state: 'open',
      },
      description: {
        story: "<b>import { Button } from 'mysvelte-ui';</b><br />Buttons are used to trigger actions. They can be used in forms, in dialogs, or in standalone actions. They can be used as links, or used to submit forms. They can be styled in a variety of ways. This button as accepts all native button attributes such as type and name.",
      },
    },
  },
};