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
    code: '<button class="primary">Primary</button>',
  },
  {
    header: 'Secondary',
    description: 'Secondary button',
    examples: [],
    code: '<button class="secondary">Secondary</button>',
  },
];
