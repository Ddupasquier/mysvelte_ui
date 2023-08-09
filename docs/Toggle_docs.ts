import { Toggle } from '../src/lib';
import type { ToggleDisplayData } from '../src/app.d.ts';

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
          color: '#C50EFF',
          id: 'toggle_size_xsmall'
        },
      },
      {
        component: Toggle,
        props: {
          size: 'small',
          disabled: false,
          isChecked: true,
          color: '#FF00D9',
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
          color: '#C50EFF',
          id: 'toggle_color_purple'
        },
      },
      {
        component: Toggle,
        props: {
          size: 'medium',
          disabled: false,
          isChecked: true,
          color: '#FF00D9',
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
    id: `toggle_props`,
    header: `Toggle Props`,
    description: 'Toggle Props',
    type: 'table',
    table: {
      tableName: 'toggle',
      rows: [
        {
          name: `toggle_disabled`,
          description: 'Disables the toggle if set to `true`. Provide a boolean value to control its availability.',
          type: '{boolean}',
          default: 'false',
          nav: true,
        },
        {
          name: `toggle_size`,
          description: 'Specifies the size of the toggle. Options include \"xsmall\", \"small\", \"medium\", \"large\", or \"xlarge\" to control its dimensions.',
          type: '{"xsmall" | "small" | "medium" | "large" | "xlarge"}',
          default: '\"medium\"',
          nav: true,
        },
        {
          name: `toggle_color`,
          description: 'Determines the color of the toggle handle. Accepts any valid CSS color value.',
          type: '{string}',
          default: '\"#C50EFF\"',
          nav: true,
        },
        {
          name: `toggle_style`,
          description: 'Applies custom CSS styles to the toggle. Use any valid CSS value to customize its appearance.',
          type: '{string}',
          default: '\"\"',
          nav: false,
        },
        {
          name: `toggle_isChecked`,
          description: 'Indicates the checked state of the toggle. If `true`, the toggle will be in the \"on\" position by default.',
          type: '{boolean}',
          default: 'false',
          nav: false,
        },
        {
          name: `toggle_id`,
          description: 'Provides a unique identifier for the toggle. Enter any valid string value.',
          type: '{string}',
          default: '\"\"',
          nav: false,
        }
      ],
    },
    examples: [
      {
        component: null,
        props: {},
      },
    ],
  },
];