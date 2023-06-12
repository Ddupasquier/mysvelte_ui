import { Input } from '../src/lib';
import type { InputDisplayData } from '../src/app';

export const inputcolors: InputDisplayData =
{
  id: 'input.color_',
  header: 'Input.Color',
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
  id: `input.color_props`,
  header: `Input.Color Props`,
  type: 'table',
  table: {
    tableName: 'inputcolor',
    rows: [{
    name: `inputcolor_size`,
    description: 'Choose the size of the color input field. You have options from \"xsmall\" up to \"xlarge\", with \"small\", \"medium\", and \"large\" in between.',
    type: '{"xsmall" | "small" | "medium" | "large" | "xlarge"}',
    default: '\"medium\"',
    nav: false,
  },
          {
    name: `inputcolor_value`,
    description: 'Set the default color value for the color input field. This should be in a recognized color format, such as hex code.',
    type: '{string}',
    default: '\"#000000\"',
    nav: false,
  },
          {
    name: `inputcolor_style`,
    description: 'Apply additional inline CSS styles to the color input field.',
    type: '{string}',
    default: '\"\"',
    nav: false,
  },
          {
    name: `inputcolor_label`,
    description: 'Decide whether to display a label with the color input field. If set to true, you must also provide an associated \'id\' for accessibility.',
    type: '{boolean}',
    default: 'false',
    nav: false,
  },
          {
    name: `inputcolor_labelColor`,
    description: 'Specify the color of the label text, if a label is used.',
    type: '{string}',
    default: '\"#000\"',
    nav: false,
  },
          {
    name: `inputcolor_disabled`,
    description: 'Enable or disable the color input field. When set to true, the field becomes read-only and users can\'t interact with it.',
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