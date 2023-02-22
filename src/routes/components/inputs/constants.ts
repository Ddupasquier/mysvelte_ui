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
          value: '',
          size: 'large',
          placeholder: 'Search',
          style: 'width: 20rem',
          background: 'lightgray',
        },
        code: [
          '$: val',
          "<Input size='large' placeholder='search' style='width: 20rem' bind:value={val} />",
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
        props: {
          background: '#c50eff',
          color: 'white',
        },
        code: '<Input background="#c50eff" color="white" />',
      },
      {
        component: Input,
        props: {
          background: '#FF8C4C',
        },
        code: '<Input background="#FF8C4C" />',
      },
      {
        component: Input,
        props: {
          background: '#FFC844',
        },
        code: '<Input background="#FFC844" />',
      },
    ],
  },
  {
    id: 'label',
    header: 'Label',
    description: 'You can add a label to an input by adding the label prop.',
    examples: [
      {
        component: Input,
        props: {
          type: 'password',
          variant: 'line',
          id: 'testLabel',
          label: true,
          placeholder: 'Search',
          labelIn: true,
          color: 'green',
          clearable: true,
        },
        code: '<Input id="testLabel" label={true} />',
      },
    ],
  },
];
