import { Input } from '../src/lib';
import type { InputDisplayData } from '../src/app';

export const inputdates: InputDisplayData =
{
  id: 'input_date',
  header: 'Date',
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
  id: 'input_time',
    header: 'Time',
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
  id: 'input_dateTime',
    header: 'Date Time',
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
  id: `inputDate/Time_props`,
  header: `Input Date/Time Props`,
  type: 'table',
  table: {
    tableName: 'inputdate',
    rows: [{
      name: `inputdate_variant`,
      description: 'Determines the variant style of the component. Options are \"default\", \"line\", or \"outline\".',
      type: '{"default" | "line" | "outline"}',
      default: '\"default\"',
      nav: false,
    },
    {
      name: `inputdate_size`,
      description: 'Determines the size of the component. Options are \"xsmall\", \"small\", \"medium\", \"large\", or \"xlarge\".',
      type: '{"xsmall" | "small" | "medium" | "large" | "xlarge"}',
      default: '\"medium\"',
      nav: false,
    },
    {
      name: `inputdate_background`,
      description: 'Sets the background color of the component.',
      type: '{string}',
      default: '\"white\"',
      nav: false,
    },
    {
      name: `inputdate_color`,
      description: 'Sets the text color of the component.',
      type: '{string}',
      default: '\"#000\"',
      nav: false,
    },
    {
      name: `inputdate_value`,
      description: 'Sets the value of the component.',
      type: '{string}',
      default: '\"\"',
      nav: false,
    },
    {
      name: `inputdate_style`,
      description: 'Customizes the style of the component.',
      type: '{string}',
      default: '\"\"',
      nav: false,
    },
    {
      name: `inputdate_label`,
      description: 'If true, a label is displayed.',
      type: '{boolean}',
      default: 'false',
      nav: false,
    },
    {
      name: `inputdate_labelColor`,
      description: 'Sets the color of the label.',
      type: '{string}',
      default: '\"#000\"',
      nav: false,
    },
    {
      name: `inputdate_disabled`,
      description: 'If true, the component is disabled and users cannot interact with it.',
      type: '{boolean}',
      default: 'false',
      nav: false,
    },
    {
      name: `inputdate_isError`,
      description: 'If true, the component displays an error state.',
      type: '{boolean}',
      default: 'false',
      nav: false,
    },
    {
      name: `inputdate_isLoading`,
      description: 'If true, the component displays a loading state.',
      type: '{boolean}',
      default: 'false',
      nav: false,
    },
    {
      name: `inputdate_min`,
      description: 'Sets the minimum value for numeric inputs.',
      type: '{string}',
      default: '\"\"',
      nav: false,
    },
    {
      name: `inputdate_max`,
      description: 'Sets the maximum value for numeric inputs.',
      type: '{string}',
      default: '\"\"',
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