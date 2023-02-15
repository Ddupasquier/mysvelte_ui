import Button from '$lib/buttons/Button.svelte';

export const buttons = [
  {
    header: 'Default',
    description: 'Default button',
    examples: [
      {
        component: Button,
        props: {
          disabled: false,
        },
      },
    ],
  },
  {
    header: 'Primary',
    description: 'Primary button',
    examples: [],
  },
  {
    header: 'Secondary',
    description: 'Secondary button',
    examples: [],
  },
];
