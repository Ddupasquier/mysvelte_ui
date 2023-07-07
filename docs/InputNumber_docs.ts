import { Input } from '../src/lib';
import type { InputDisplayData, NumberProps } from '../src/app';

export const inputnumbers: InputDisplayData =
{
  id: 'input_number',
  header: 'Input.Number',
  description:
    `The number input can be accessed by using dot notation IE. Input.Number.
    You can also add a min, max, and step prop to the input.
      (default: min: -10,000, max: 10,000, step: 1)`,
  type: 'components',
  examples: [
    {
      component: Input.Number,
      props: {
        color: '#c50eff',
      } as NumberProps,
      code: '<Input.Number {min} {max} {step} />',
    },
    {
      component: Input.Number,
      props: {
        color: '#ff00d9',
        min: 20,
      } as NumberProps,
    },
    {
      component: Input.Number,
      props: {
        color: '#ff3579',
        min: -10,
        max: 10,
        step: 0.5,
      } as NumberProps,
    },
  ],
}

export const inputnumberProps: InputDisplayData =
{
  id: `input_number props_props`,
  header: `Input.Number Props`,
  type: 'table',
  table: {
    tableName: 'inputnumber',
    rows: [{
      name: `inputnumber_variant`,
      description: 'Choose the appearance of the input field. You can choose between \"default\", \"line\", or \"outline\" to best suit your design needs.',
      type: '{"default" | "line" | "outline"}',
      default: '\"default\"',
      nav: false,
    },
    {
      name: `inputnumber_size`,
      description: 'Select the size of the input field. It can be as small as \"xsmall\" or as large as \"xlarge\", with \"small\", \"medium\", and \"large\" options in between.',
      type: '{"xsmall" | "small" | "medium" | "large" | "xlarge"}',
      default: '\"medium\"',
      nav: false,
    },
    {
      name: `inputnumber_background`,
      description: 'Define the background color of the input field to match your UI theme.',
      type: '{string}',
      default: '\"#fff\"',
      nav: false,
    },
    {
      name: `inputnumber_color`,
      description: 'Define the text color inside the input field.',
      type: '{string}',
      default: '\"#000\"',
      nav: false,
    },
    {
      name: `inputnumber_value`,
      description: 'Specify the default numerical value of the input field.',
      type: '{number}',
      default: '0',
      nav: false,
    },
    {
      name: `inputnumber_style`,
      description: 'Apply additional inline CSS styles to the input field.',
      type: '{string}',
      default: '\"\"',
      nav: false,
    },
    {
      name: `inputnumber_label`,
      description: 'Decide whether or not to display a label along with the input field. If set to true, you must also provide an associated \'id\' for accessibility.',
      type: '{boolean}',
      default: 'false',
      nav: false,
    },
    {
      name: `inputnumber_labelColor`,
      description: 'Specify the color of the label text, if a label is used.',
      type: '{string}',
      default: '\"#000\"',
      nav: false,
    },
    {
      name: `inputnumber_disabled`,
      description: 'Use this to enable or disable the input field. When disabled, the input field can\'t be interacted with.',
      type: '{boolean}',
      default: 'false',
      nav: false,
    },
    {
      name: `inputnumber_isError`,
      description: 'Set this to true if you want to show the input field in an error state, such as when validation fails.',
      type: '{boolean}',
      default: 'false',
      nav: false,
    },
    {
      name: `inputnumber_isLoading`,
      description: 'Set this to true to show a loading state in the input field, useful when waiting for an action to complete.',
      type: '{boolean}',
      default: 'false',
      nav: false,
    },
    {
      name: `inputnumber_min`,
      description: 'Set the minimum value that can be entered into the input field.',
      type: '{number}',
      default: '-10000',
      nav: false,
    },
    {
      name: `inputnumber_max`,
      description: 'Set the maximum value that can be entered into the input field.',
      type: '{number}',
      default: '10000',
      nav: false,
    },
    {
      name: `inputnumber_step`,
      description: 'Define the increments for the numeric input field. For example, a step of 2 will increase or decrease the value by 2 with each step. \"any\" allows any numeric input.',
      type: '{number | "any"}',
      default: '1',
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
