import { Input } from '../src/lib';
import type { InputDisplayData } from '../src/app';

export const inputcolors: InputDisplayData =
{
  id: 'input_colorpicker',
  header: 'Color Picker',
  description:
    'You can easily add a color picker to your input by adding the Input.Color component.',
  type: 'components',
  examples: [
    {
      component: Input.Color,
      props: {
        size: 'xlarge',
        value: '#c50eff',
      },
      code: ['let value', '<Input.Color bind:{value} />'],
    },
    {
      component: Input.Color,
      props: {
        size: 'large',
        value: '#ff00d9',
      },
    },
    {
      component: Input.Color,
      props: {
        size: 'medium',
        value: '#ff3579',
      },
    },
    {
      component: Input.Color,
      props: {
        size: 'small',
        value: '#ff8c4c',
      },
    },
    {
      component: Input.Color,
      props: {
        size: 'xsmall',
        value: '#ffc844',
      },
    },
  ],
}


export const inputcolorProps: InputDisplayData =
{
  id: `inputColorPicker_props`,
  header: `Inputcolor Props`,
  description: 'Inputcolor Props',
  type: 'table',
  table: {
    tableName: 'inputcolor',
    rows: [{
      name: `inputcolor_size`,
      description: 'Determines the size of the component. Options are \"xsmall\", \"small\", \"medium\", \"large\", or \"xlarge\".',
      type: '{"xsmall" | "small" | "medium" | "large" | "xlarge"}',
      default: '\"medium\"',
      nav: false,
    },
    {
      name: `inputcolor_value`,
      description: 'Sets the value of the component.',
      type: '{string}',
      default: '\"#000000\"',
      nav: false,
    },
    {
      name: `inputcolor_style`,
      description: 'Customizes the style of the component.',
      type: '{string}',
      default: '\"\"',
      nav: false,
    },
    {
      name: `inputcolor_label`,
      description: 'If true, a label is displayed.',
      type: '{boolean}',
      default: 'false',
      nav: false,
    },
    {
      name: `inputcolor_labelColor`,
      description: 'Sets the color of the label.',
      type: '{string}',
      default: '\"#000\"',
      nav: false,
    },
    {
      name: `inputcolor_disabled`,
      description: 'If true, the component is disabled and users cannot interact with it.',
      type: '{boolean}',
      default: 'false',
      nav: false,
    }],
  },
  examples: [
    {
      component: null,
      props: {},
    },
  ],
}