import { Input } from '../src/lib';
import type { InputDisplayData } from '../src/app';

export const inputdates: InputDisplayData =
{
  id: 'input.date_',
  header: 'Input.Date',
  description: `The date input can be accessed by using dot notation IE. Input.Date. 
    The 'min' and 'max' props should be in the format 'YYYY-MM-DD' (e.g., '2023-06-01').`,
  type: 'components',
  examples: [
    {
      component: Input.Date,
      props: {
        color: '#c50eff',
      },
      code: '<Input.Date {min} {max} />',
    },
    {
      component: Input.Date,
      props: {
        color: '#ff00d9',
        variant: "outline"
      },
    },
    {
      component: Input.Date,
      props: {
        color: '#ff3579',
        variant: "line",
        background: "transparent"
      },
    },
  ],
}

export const inputtimes: InputDisplayData =
{
  id: 'input.time_',
  header: 'Input.Time',
  description: `The time input can be accessed by using dot notation IE. Input.Time.
    The 'min' and 'max' props should be in the format 'HH:MM' (e.g., '13:30').`,
  type: 'components',
  examples: [
    {
      component: Input.Time,
      props: {
        color: '#c50eff',
      },
      code: '<Input.Time {min} {max} />',
    },
    {
      component: Input.Time,
      props: {
        color: '#ff00d9',
        variant: "outline"
      },
    },
    {
      component: Input.Time,
      props: {
        color: '#ff3579',
        variant: "line",
        background: "transparent"
      },
    },
  ],
}

export const inputdatetimes: InputDisplayData =
{
  id: 'input.date/time_',
  header: 'Input.Date/Time',
  description: `The date time input can be accessed by using dot notation IE. Input.DateTime.
    The 'min' and 'max' props should be in the format 'YYYY-MM-DDTHH:MM' (e.g., '2023-06-01T13:30').`,
  type: 'components',
  examples: [
    {
      component: Input.DateTime,
      props: {
        color: '#c50eff',
      },
      code: '<Input.DateTime {min} {max} />',
    },
    {
      component: Input.DateTime,
      props: {
        color: '#ff00d9',
        variant: "outline"
      },
    },
    {
      component: Input.DateTime,
      props: {
        color: '#ff3579',
        variant: "line",
        background: "transparent"
      },
    },
  ],
}

export const inputdateProps: InputDisplayData =
{
  id: `input.date/time_props`,
  header: `Input.Date/Time Props`,
  description: 'These props are the same for Input.Date, Input.Time, and Input.DateTime.',
  type: 'table',
  table: {
    tableName: 'inputdate',
    rows: [
      {
        name: `inputdate_variant`,
        description: 'Choose the appearance of the input field. Pick from \"default\", \"line\", or \"outline\" to fit your design needs.',
        type: '{"default" | "line" | "outline"}',
        default: '\"default\"',
        nav: false,
      },
      {
        name: `inputdate_size`,
        description: 'Select the size of the input field. It can be as small as \"xsmall\" or as large as \"xlarge\", with \"small\", \"medium\", and \"large\" options available.',
        type: '{"xsmall" | "small" | "medium" | "large" | "xlarge"}',
        default: '\"medium\"',
        nav: false,
      },
      {
        name: `inputdate_background`,
        description: 'Define the background color of the input field, suiting your UI theme.',
        type: '{string}',
        default: '\"white\"',
        nav: false,
      },
      {
        name: `inputdate_color`,
        description: 'Define the text color inside the input field.',
        type: '{string}',
        default: '\"#000\"',
        nav: false,
      },
      {
        name: `inputdate_value`,
        description: 'Specify the default value of the input field. For date and time components, this should be in a recognized date or time format.',
        type: '{string}',
        default: '\"\"',
        nav: false,
      },
      {
        name: `inputdate_style`,
        description: 'Apply additional inline CSS styles to the input field.',
        type: '{string}',
        default: '\"\"',
        nav: false,
      },
      {
        name: `inputdate_label`,
        description: 'Decide whether or not to display a label along with the input field. If set to true, you must also provide an associated \'id\' for accessibility.',
        type: '{boolean}',
        default: 'false',
        nav: false,
      },
      {
        name: `inputdate_labelColor`,
        description: 'Specify the color of the label text, if a label is used.',
        type: '{string}',
        default: '\"#000\"',
        nav: false,
      },
      {
        name: `inputdate_disabled`,
        description: 'Enable or disable the input field. When set to true, the field becomes read-only and cannot be interacted with.',
        type: '{boolean}',
        default: 'false',
        nav: false,
      },
      {
        name: `inputdate_isError`,
        description: 'Set this to true to show the input field in an error state, such as when validation fails.',
        type: '{boolean}',
        default: 'false',
        nav: false,
      },
      {
        name: `inputdate_isLoading`,
        description: 'Set this to true to show a loading state in the input field, useful when waiting for an action to complete.',
        type: '{boolean}',
        default: 'false',
        nav: false,
      },
      {
        name: `inputdate_min`,
        description: 'Specify the minimum value that can be inputted for numeric inputs. For date and time components, this should be in a recognized date or time format.',
        type: '{string}',
        default: '\"\"',
        nav: false,
      },
      {
        name: `inputdate_max`,
        description: 'Specify the maximum value that can be inputted for numeric inputs. For date and time components, this should be in a recognized date or time format.',
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
}