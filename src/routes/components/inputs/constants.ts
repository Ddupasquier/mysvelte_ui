import Input from '$lib/inputs/Input.svelte';

export const inputs = [
  {
    id: 'use',
    header: 'Use',
    description: 'Input is a simple input component.',
    examples: [
      {
        component: Input,
        props: {
          value: 'Input',
        },
        code: ['$: value', '<Input />'],
      },
    ],
  },
  {
    id: 'background',
    header: 'Background',
    description:
      'You can easily change the background of a button by adding the background prop. (default: purple)',
    examples: [
      {
        component: Input,
        props: {
          
        },
        code: '<Input background="purple" />',
      },
      {
        component: Input,
        props: {
          background: '#FF8C4C',
        },
        code: '',
      },
      {
        component: Input,
        props: {
          background: '#FFC844',
        },
        code: '',
      },
    ],
  },
];
