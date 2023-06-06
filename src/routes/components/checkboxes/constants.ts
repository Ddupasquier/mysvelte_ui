import { Checkbox } from '$lib';

export const checkboxes: CheckboxDisplayData[] = [
  {
    id: 'checkbox_basics',
    header: 'Checkbox',
    description:
      'A checkbox is a form control that allows the user to select one or more options from a set.',
    type: 'components',
    examples: [
      {
        component: Checkbox,
        props: {
          id: 'checkbox',
          name: 'checkbox',
          value: 'checkbox',
          label: 'Checkbox',
          style: '',
          color: 'black',
        },
        code: [
          `$: val`,
          `$: checked`,
          `<Checkbox name="checkbox" value={val} label="Checkbox" />`,
        ],
      },
    ],
  },
  {
    id: 'checkbox_disabled',
    header: 'Checkbox Disabled',
    description:
      'Easily make any checkbox appear disabled by adding the disabled attribute. \nThe disabled attribute can be set to true or false. (default: false)',
    type: 'components',
    examples: [
      {
        component: Checkbox,
        props: {
          label: 'Disabled',
          disabled: true,
          checked: true,
        },
        code: [`<Checkbox label="Disabled" disabled={true} checked={true} />`],
      },
      {
        component: Checkbox,
        props: {
          label: 'Disabled',
          disabled: true,
          checked: false,
        },
        code: [`<Checkbox label="Disabled" disabled={true} checked={false} />`],
      },
    ],
  },
  {
    id: 'checkbox_color',
    header: 'Checkbox Color',
    description:
      'Easily change the color of the checkbox by adding the color attribute. \nThe color attribute can be set to any valid CSS color. (default: black)',
    type: 'components',
    examples: [
      {
        component: Checkbox,
        props: {
          label: 'Color',
          color: '#c50eff',
          checked: true,
        },
        code: [`<Checkbox label="Color" {color} />`],
      },
      {
        component: Checkbox,
        props: {
          label: 'Color',
          color: '#ff00d9',
          checked: true,
        },
      },
      {
        component: Checkbox,
        props: {
          label: 'Color',
          color: '#FF3579',
          checked: true,
        },
      },
      {
        component: Checkbox,
        props: {
          label: 'Color',
          color: '#FF8C4C',
          checked: true,
        },
      },
      {
        component: Checkbox,
        props: {
          label: 'Color',
          color: '#FFC844',
          checked: true,
        },
      },
    ],
  },
  {
    id: 'checkbox_label',
    header: 'Checkbox Label',
    description:
      'You can add a label to the checkbox by adding the label attribute. \nThe label attribute can be set to any valid string. (default: "")\nThe label color can be changed with the labelColor attribute. \nThe labelColor attribute can be set to any valid CSS color. (default: black)',
    type: 'components',
    examples: [
      {
        component: Checkbox,
        props: {
          label: 'Label',
          labelColor: '#c50eff',
          checked: true,
        },
        code: [`<Checkbox label="Label" {labelColor} />`],
      },
      {
        component: Checkbox,
        props: {
          label: 'Label',
          labelColor: '#ff00d9',
          checked: true,
        },
      },
      {
        component: Checkbox,
        props: {
          label: 'Label',
          labelColor: '#FF3579',
          checked: true,
        },
      },
      {
        component: Checkbox,
        props: {
          label: 'Label',
          labelColor: '#FF8C4C',
          checked: true,
        },
      },
      {
        component: Checkbox,
        props: {
          label: 'Label',
          labelColor: '#FFC844',
          checked: true,
        },
      },
    ],
  },
  {
    id: 'checkbox_size',
    header: 'Checkbox Size',
    description:
      'You can change the size of the checkbox by adding the size attribute. \nThe size attribute can be set to small, medium, or large. (default: medium)',
    type: 'components',
    examples: [
      {
        component: Checkbox,
        props: {
          label: 'Size',
          size: 'small',
          checked: true,
        },
        code: [`<Checkbox label="Size" {size} />`],
      },
      {
        component: Checkbox,
        props: {
          label: 'Size',
          size: 'medium',
          checked: true,
        },
      },
      {
        component: Checkbox,
        props: {
          label: 'Size',
          size: 'large',
          checked: true,
        },
      },
    ],
  },
  // {
  //   id: 'checkbox_animated',
  //   header: 'Checkbox Animated',
  //   description:
  //     '',
  //   type: 'components',
  //   examples: [
  //     {
  //       component: Checkbox.Animated,
  //       props: {
  //         label: 'Animated',
  //         checked: true,
  //       },
  //       code: [`<Checkbox.Animated label="Animated" checked={true} />`],
  //     },
  //   ]
  // },
  {
    id: 'checkbox_props',
    header: 'Checkbox Props',
    description: 'Checkbox Props',
    type: 'table',
    table: {
      tableName: 'checkboxes',
      rows: [
        {
          name: 'checkbox_label',
          description: 'The label of the checkbox.',
          default: 'Checkbox',
          nav: true
        },
        {
          name: 'checkbox_labelColor',
          description: 'The color of the checkbox label.',
          default: 'black',
          nav: false
        },
        {
          name: 'checkbox_disabled',
          description: 'The disabled state of the checkbox.',
          default: 'false',
          nav: true
        },
        {
          name: 'checkbox_checked',
          description: 'The checked state of the checkbox.',
          default: 'false',
          nav: false
        },
        {
          name: 'checkbox_color',
          description: 'The color of the checkbox.',
          default: 'black',
          nav: true
        },
        {
          name: 'checkbox_size',
          description: 'The size of the checkbox.',
          default: 'medium',
          nav: true
        },
      ]
    },
    examples: [
      {
        component: null,
        props: {},
      },
    ],
  }
];
