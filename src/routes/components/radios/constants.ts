import Radio from '$lib/radios/Radio.svelte';

export const radios: RadioDisplayData[] = [
  {
    id: 'radio',
    header: 'Radio',
    description: 'A radio button.',
    type: 'components',
    examples: [
      {
        component: Radio,
        props: {
          options: ['Svelte', 'React', 'Angular', 'Vue'],
          selected: ['Svelte'],
        },
        code: [
          'let selected',
          `<Radio options={['Svelte', 'React', 'Angular', 'Vue']} bind:checked={selected} />`,
        ],
      }
    ]
  },
  {
    id: 'props',
    header: 'Props',
    description: 'Props for the Radio component.',
    type: 'table',
    table: {
      options: "Options is an array of strings that will be used to populate the radio buttons.",
      color: "Color is the color of the radio button. (default: #000)",
      labelColor: "Label color is the color of the label. (default: #000)",
      size: "Size is the size of the radio button. (default: medium)",
      disabled: "Disabled is a boolean that determines if the radio button is disabled. (default: false)",
    },
    examples: [
      {
        component: null,
        props: {},
      },
    ],
  }
]