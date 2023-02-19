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
          size: 'large',
          placeholder: 'search',
          style: 'width: 20rem',
        },
        code: [
          '$: val',
          "<Input size='large' placeholder='search' style='border: 1px solid red; width: 20rem' bind:value={val} />",
        ],
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
        props: {},
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
