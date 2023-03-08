import Checkbox from '$lib/checkboxes/Checkbox.svelte';

export const checkboxes: CheckboxDisplayData[] = [
  {
    id: 'checkbox',
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
    id: 'disabled',
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
    id: 'color',
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
        code: [`<Checkbox label="Color" color={color} />`],
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
    id: 'label',
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
        code: [`<Checkbox label="Label" labelColor={labelColor} />`],
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
    id: 'size',
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
        code: [`<Checkbox label="Size" size={size} />`],
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
];
