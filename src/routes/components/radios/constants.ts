import Radio from '$lib/radios/Radio.svelte';

export const radios: RadioDisplayData[] = [
  {
    id: 'basics',
    header: 'Radio',
    description: 'A radio button.',
    type: 'components',
    examples: [
      {
        component: Radio,
        props: {
          options: ['Svelte', 'React', 'Angular', 'Vue'],
          groupId: 'frameworks'
        },
        code: [
          'let selected',
          '',
          'const handleUpdateSelected = (e) => {',
          'indent selected = e.detail',
          '}',
          '',
          '<Radio',
          'indent on:updateSelected={handleUpdateSelected}',
          'indent options={["1", "2", "3"]}',
          'indent {selected}',
          '/>',
        ],
      }
    ]
  },
  {
    id: 'color',
    header: 'Color',
    description: 'You can change the color of the radio button.',
    type: 'components',
    examples: [
      {
        component: Radio,
        props: {
          options: ["apple", "banana", "grape"],
          color: '#c50eff',
          groupId: 'color1'
        },
      },
      {
        component: Radio,
        props: {
          options: ["red", "green", "blue"],
          color: '#ff00d9',
          groupId: 'color2'
        },
      },
      {
        component: Radio,
        props: {
          options: ['circle', 'square', 'triangle'],
          color: '#FF3579',
          groupId: 'color3'
        },
      },
      {
        component: Radio,
        props: {
          options: ['piano', 'guitar', 'drums'],
          color: '#FF8C4C',
          groupId: 'color4'
        },
        code: [
          '<Radio color={color} options={options} />'
        ]
      },
      {
        component: Radio,
        props: {
          options: ['sun', 'moon', 'stars'],
          color: '#FFC844',
          groupId: 'color5'
        },
      },
    ],
  },
  {
    id: 'labelColor',
    header: 'Label Color',
    description: 'You can change the color of the label.',
    type: 'components',
    examples: [
      {
        component: Radio,
        props: {
          options: ['red', 'green', 'blue'],
          labelColor: '#c50eff',
          groupId: 'labelColor1'
        }
      },
      {
        component: Radio,
        props: {
          options: ['circle', 'square', 'triangle'],
          labelColor: '#ff00d9',
          groupId: 'labelColor2'
        }
      },
      {
        component: Radio,
        props: {
          options: ['piano', 'guitar', 'drums'],
          labelColor: '#FF3579',
          groupId: 'labelColor3'
        }
      },
      {
        component: Radio,
        props: {
          options: ['sun', 'moon', 'stars'],
          labelColor: '#FF8C4C',
          groupId: 'labelColor4'
        }
      },
      {
        component: Radio,
        props: {
          options: ['apple', 'banana', 'grape'],
          labelColor: '#FFC844',
          groupId: 'labelColor5'
        }
      },
    ]
  },
  {
    id: 'size',
    header: 'Size',
    description: 'You can change the size of the radio button.',
    type: 'components',
    examples: [
      {
        component: Radio,
        props: {
          options: ['small', 'medium', 'large'],
          size: 'small',
          groupId: 'size1',
          selected: ['small']
        }
      },
      {
        component: Radio,
        props: {
          options: ['small', 'medium', 'large'],
          size: 'medium',
          groupId: 'size2',
          selected: ['medium']
        }
      },
      {
        component: Radio,
        props: {
          options: ['small', 'medium', 'large'],
          size: 'large',
          groupId: 'size3',
          selected: ['large']
        }
      }
    ]
  },
  {
    id: 'use',
    header: 'Use',
    description: 'You can use the radio button to select one or many options. (default: one)',
    type: 'components',
    examples: [
      {
        component: Radio,
        props: {
          groupId: 'use1',
          options: ['coffee', 'tea', 'water'],
          use: 'many',
        },
        code: [
          '<Radio use="many" options={options} />'
        ]
      }
    ]
  },
  {
    id: 'props',
    header: 'Props',
    description: 'Props for the Radio component.',
    type: 'table',
    table: {
      tableName: 'radios',
      rows: [
        {
          name: 'options!',
          description: 'Options is an array of strings that will be used to populate the radio buttons.',
          default: '[]',
          nav: false
        },
        {
          name: 'groupId!',
          description: 'Group ID is a string that is used to group radio buttons together.',
          default: '\'\'',
          nav: true
        },
        {
          name: 'color',
          description: 'Color is the color of the radio button.',
          default: '#000',
          nav: true
        },
        {
          name: 'labelColor',
          description: 'Label color is the color of the label.',
          default: '#000',
          nav: true
        },
        {
          name: 'size',
          description: 'Size is the size of the radio button.',
          default: 'medium',
          nav: true
        },
        {
          name: 'disabled',
          description: 'Disabled is a boolean that determines if the radio button is disabled.',
          default: 'false',
          nav: true
        },
        {
          name: 'use',
          description: 'Use is a string that determines if the radio button is used to select one or many options.',
          default: 'one',
          nav: true
        },
      ]
    },
    examples: [
      {
        component: null,
        props: {
          options: [],
          groupId: ''
        },
      },
    ],
  }
]