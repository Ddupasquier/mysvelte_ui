import { Input } from '../src/lib';
import type { InputDisplayData, NumberProps } from '../src/app';
import { InputNumberPropRows } from './generated/InputNumber.props';

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
        color: '#C50EFF',
      } as NumberProps,
      code: '<Input.Number {min} {max} {step} />',
    },
    {
      component: Input.Number,
      props: {
        color: '#FF00D9',
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
    rows: InputNumberPropRows,
  },
  examples: null,
}
