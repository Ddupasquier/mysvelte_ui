import { Radio } from '../src/lib';
import type { RadioDisplayData } from '../src/app.d.ts';

export const radios: RadioDisplayData[] = [
  {
    id: 'radio_basics',
    header: 'Radio',
    description: 'Here\'s a breakdown of the props you can pass into the Radio component.',
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
    id: 'radio_color',
    header: 'Color',
    description: 'You can change the color of the radio button.',
    type: 'components',
    examples: [
      {
        component: Radio,
        props: {
          options: ["apple", "banana", "grape"],
          color: '#C50EFF',
          groupId: 'color1'
        },
      },
      {
        component: Radio,
        props: {
          options: ["red", "green", "blue"],
          color: '#FF00D9',
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
          '<Radio {color} {options} />'
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
    id: 'radio_labelColor',
    header: 'Label Color',
    description: 'You can change the color of the label.',
    type: 'components',
    examples: [
      {
        component: Radio,
        props: {
          options: ['red', 'green', 'blue'],
          labelColor: '#C50EFF',
          groupId: 'labelColor1'
        }
      },
      {
        component: Radio,
        props: {
          options: ['circle', 'square', 'triangle'],
          labelColor: '#FF00D9',
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
    id: 'radio_size',
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
    id: 'radio_use',
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
          '<Radio use="many" {options} />'
        ]
      }
    ]
  },
  {
    id: 'radio_disabled',
    header: 'Disabled State',
    description: 'Display radio buttons or checkboxes in a disabled state.',
    type: 'components',
    examples: [
      {
        component: Radio,
        props: {
          options: ['dog', 'cat', 'bird'],
          disabled: true,
          groupId: 'disabledExample'
        },
        code: [
          '<Radio disabled={true} {options} />'
        ]
      }
    ]
  },
  {
    id: 'radio_selected',
    header: 'Pre-selected Options',
    description: 'Set specific options as selected from the start.',
    type: 'components',
    examples: [
      {
        component: Radio,
        props: {
          options: ['orange', 'banana', 'apple'],
          selected: ['banana'],
          groupId: 'selectedExample'
        },
        code: [
          '<Radio {selected} {options} />'
        ]
      }
    ]
  },
  {
    id: 'radio_groupId',
    header: 'Group Identification',
    description: 'Assign a unique identifier to a radio or checkbox group. This is a required prop.',
    type: 'components',
    examples: [
      {
        component: Radio,
        props: {
          options: ['football', 'basketball', 'baseball'],
          groupId: 'customGroupId'
        },
        code: [
          '<Radio groupId="customGroupId" {options} />'
        ]
      }
    ]
  },
  {
    id: 'radio_checkbox',
    header: 'Checkbox',
    description: `You can use the radio component as a checkbox. 
    Note: use prop must be set to 'many' to use as a checkbox. 
    (default: false)`,
    type: 'components',
    examples: [
      {
        component: Radio,
        props: {
          options: [
            {
              id: 'red',
              label: 'red'
            },
            {
              id: 'green',
              label: 'green'
            },
            {
              id: 'blue',
              label: 'blue'
            }
          ],
          checkbox: true,
          groupId: 'checkboxExample',
          use: 'many',
        },
        code: [
          '<Radio {checkbox} {options} use={"many"} />'
        ]
      }
    ]
  },
  {
    id: `radio_props`,
    header: `Radio Props`,
    type: 'table',
    table: {
      tableName: 'radio',
      rows: [{
    name: `radio_options!`,
    description: 'An array of options where each option can be a string or an object. If an option is an object, it must have a \'label\' property which is used as the display text for the radio button or checkbox. The object can have any other custom properties.',
    type: '{OptionType[] | OptionType}',
    default: '[]',
    nav: true,
  },
          {
    name: `radio_selected!`,
    description: 'The currently selected option(s). For \"one\" use, this will be a single option object or null. For \"many\" use, this can be an array of option objects.',
    type: '{OptionType[] | OptionType}',
    default: '[]',
    nav: true,
  },
          {
    name: `radio_labelColor`,
    description: 'The color of the text label for each radio button or checkbox.',
    type: '{string}',
    default: '\"#000\"',
    nav: true,
  },
          {
    name: `radio_color`,
    description: 'The color for the border of the radio or checkbox indicator.',
    type: '{string}',
    default: '\"#000\"',
    nav: true,
  },
          {
    name: `radio_size`,
    description: 'Determines the size of the radio or checkbox indicator. Can take on values \"small\", \"medium\", or \"large\".',
    type: '{"small" | "medium" | "large"}',
    default: '\"medium\"',
    nav: true,
  },
          {
    name: `radio_disabled`,
    description: 'If set to true, all the radio buttons or checkboxes will be disabled.',
    type: '{boolean}',
    default: 'false',
    nav: true,
  },
          {
    name: `radio_groupId`,
    description: 'A unique identifier for the group of radio buttons or checkboxes.',
    type: '{string}',
    default: '\"radio-group\"',
    nav: true,
  },
          {
    name: `radio_use`,
    description: 'Determines if the component should behave as a group of radio buttons (\"one\") or checkboxes (\"many\").',
    type: '{"one" | "many"}',
    default: '\"one\"',
    nav: true,
  },
          {
    name: `radio_checkbox`,
    description: 'Determines if the visual representation of the selection is a checkbox (true) or radio (false) when in \"many\" mode. This property only affects visual styling and does not change functionality.',
    type: '{boolean}',
    default: 'false',
    nav: true,
  }],
    },
    examples: null,
  },
];