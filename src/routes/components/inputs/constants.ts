import { Input } from '$lib';

export const inputs = [
  {
    id: 'use',
    header: 'Use',
    description: 'Input.Default is a simple input component.',
    examples: [
      {
        component: Input.Prefix,
        props: {
          value: '',
          size: 'large',
          placeholder: 'Search',
          style: 'width: 20rem',
          background: 'lightgray',
        },
        code: [
          '$: val',
          "<Input.Default size='large' placeholder='search' style='width: 20rem' bind:value={val} />",
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
        component: Input.Default,
        props: {
          background: '#c50eff',
          color: 'white',
        },
        code: '<Input.Default background="#c50eff" color="white" />',
      },
      {
        component: Input.Default,
        props: {
          background: '#FF8C4C',
        },
        code: '<Input.Default background="#FF8C4C" />',
      },
      {
        component: Input.Default,
        props: {
          background: '#FFC844',
        },
        code: '<Input.Default background="#FFC844" />',
      },
    ],
  },
  {
    id: 'label',
    header: 'Label',
    description: 'You can add a label to an input.Default by adding the label prop.',
    examples: [
      {
        component: Input.Default,
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
        code: '<Input.Default id="testLabel" label={true} />',
      },
    ],
  },
];
