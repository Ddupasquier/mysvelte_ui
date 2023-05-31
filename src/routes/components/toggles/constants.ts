import { Toggle } from '$lib';

export const toggles: ToggleDisplayData[] = [
  {
    id: 'toggle_basics',
    header: 'Toggle Basics',
    description: `A toggle allows a user to switch a setting on or off. The 'id' prop is essential; it links the label to the input element, enabling the toggle functionality via CSS. Without a unique 'id', clicking the label won't change the input state, rendering the toggle ineffective.`,
    type: 'components',
    examples: [
      {
        component: Toggle,
        props: {
          size: 'medium',
          disabled: false,
          isChecked: false,
          style: '',
          color: '#000',
          id: 'toggle',
        },
        code: [
          'let value = false;',
          '',
          `<Toggle size='medium' disabled={false} bind:isChecked={value} color='#000' />`,
        ],
      },
    ],
  },
  {
    id: 'toggle_size',
    header: 'Toggle Size',
    description: 'Toggles can be small, medium, large, xsmall, or xlarge.',
    type: 'components',
    examples: [
      {
        component: Toggle,
        props: {
          size: 'xsmall',
          disabled: false,
          isChecked: true,
          color: '#c50eff',
          id: 'toggle_size_xsmall'
        },
      },
      {
        component: Toggle,
        props: {
          size: 'small',
          disabled: false,
          isChecked: true,
          color: '#ff00d9',
          id: 'toggle_size_small'
        },
        code: [
          `<Toggle size='small' disabled={false} isChecked={false} />`,
        ],
      },
      {
        component: Toggle,
        props: {
          size: 'medium',
          disabled: false,
          isChecked: true,
          color: '#FF3579',
          id: 'toggle_size_medium'
        },
      },
      {
        component: Toggle,
        props: {
          size: 'large',
          disabled: false,
          isChecked: true,
          color: '#FF8C4C',
          id: 'toggle_size_large'
        },
      },
      {
        component: Toggle,
        props: {
          size: 'xlarge',
          disabled: false,
          isChecked: true,
          color: '#FFC844',
          id: 'toggle_size_xlarge'
        },
      },
    ],
  },
  {
    id: 'toggle_color',
    header: 'Toggle Color',
    description: 'You can change the color of the toggle when it\'s checked.',
    type: 'components',
    examples: [
      {
        component: Toggle,
        props: {
          size: 'medium',
          disabled: false,
          isChecked: true,
          color: '#c50eff',
          id: 'toggle_color_purple'
        },
      },
      {
        component: Toggle,
        props: {
          size: 'medium',
          disabled: false,
          isChecked: true,
          color: '#ff00d9',
          id: 'toggle_color_pink'
        },
      },
      {
        component: Toggle,
        props: {
          size: 'medium',
          disabled: false,
          isChecked: true,
          color: '#FF3579',
          id: 'toggle_color_red'
        },
      },
      {
        component: Toggle,
        props: {
          size: 'medium',
          disabled: false,
          isChecked: true,
          color: '#FF8C4C',
          id: 'toggle_color_orange'
        },
      },
      {
        component: Toggle,
        props: {
          size: 'medium',
          disabled: false,
          isChecked: true,
          color: '#FFC844',
          id: 'toggle_color_yellow'
        },
      },
    ],
  },
  {
    id: 'toggle_disabled',
    header: 'Toggle Disabled',
    description: 'Toggles can be disabled to prevent user interactions.',
    type: 'components',
    examples: [
      {
        component: Toggle,
        props: {
          size: 'medium',
          disabled: true,
          isChecked: false,
          id: 'toggle_disabled_example'
        },
        code: [
          `<Toggle size='medium' disabled={true} isChecked={false} />`,
        ],
      },
    ],
  },
  {
    id: 'toggle_props',
    header: 'Toggle Props',
    description: 'Here\'s a breakdown of the props you can pass into the Toggle component.',
    type: 'table',
    table: {
      tableName: 'toggles',
      rows: [
        {
          name: 'toggle_size',
          description: 'Determines the size of the toggle. Options are: "xsmall", "small", "medium", "large", "xlarge".',
          default: '"medium"',
          nav: true,
        },
        {
          name: 'toggle_disabled',
          description: 'If true, the toggle will be disabled and can\'t be interacted with.',
          default: 'false',
          nav: true,
        },
        {
          name: 'toggle_isChecked',
          description: 'Determines the state of the toggle. If true, toggle will be in "checked" state.',
          default: 'false',
          nav: true,
        },
        {
          name: 'toggle_style',
          description: 'Enables inline styles to be passed to the component.',
          default: '""',
          nav: false,
        },
        {
          name: 'toggle_color',
          description: 'Sets the color of the toggle when it\'s checked.',
          default: '"#fff"',
          nav: true,
        },
      ],
    },
    examples: [
      {
        component: null,
        props: {
          size: 'medium',
          disabled: false,
          isChecked: false,
        },
      },
    ],
  },
];
