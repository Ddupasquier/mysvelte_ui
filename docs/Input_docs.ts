import { Input, Spacer } from '../src/lib';
import type { InputDisplayData } from '../src/app.d.ts';
import { inputcolors, inputcolorProps } from './InputColor_docs';
import { inputdates, inputtimes, inputdatetimes, inputdateProps } from './InputDateTime_docs';
import { inputnumbers, inputnumberProps } from './InputNumber_docs';
import { inputprefixes, inputprefixProps } from './InputPrefix_docs';

export const inputs: InputDisplayData[] = [
  {
    id: 'input_basics',
    header: 'Input Basics',
    description: 'Input is a simple input component.',
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          value: '',
          placeholder: 'Input',
        },
        code: ['let value', "<Input {placeholder} bind:value={val} />"],
      },
    ],
  },
  {
    id: 'input_background',
    header: 'Background',
    description:
      `You can easily change the background of a button by adding the background prop. (default: #fff)`,
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          background: '#C50EFF',
          placeholder: '#C50EFF'
        },
        code: '<Input background="#C50EFF" />',
      },
      {
        component: Input,
        props: {
          background: '#FF00D9',
          placeholder: '#FF00D9'
        },
        code: '<Input background="#FF00D9" />',
      },
      {
        component: Input,
        props: {
          background: '#ff3579',
          placeholder: '#ff3579'
        },
        code: '<Input background="#ff3579" />',
      },
    ],
  },
  {
    id: 'input_size',
    header: 'Input Size',
    description: 'The size of the InputField. Can be \"xsmall\", \"small\", \"medium\", \"large\", or \"xlarge\".',
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          size: 'xsmall',
          placeholder: 'xsmall',
        },
        code: '<Input {size} />',
      },
      {
        component: Input,
        props: {
          size: 'small',
          placeholder: 'small',
        },
      },
      {
        component: Input,
        props: {
          size: 'medium',
          placeholder: 'medium',
        },
      },
      {
        component: Input,
        props: {
          size: 'large',
          placeholder: 'large',
        },
      },
      {
        component: Input,
        props: {
          size: 'xlarge',
          placeholder: 'xlarge',
        },
      },
    ],
  },
  {
    id: 'input_color',
    header: 'Color',
    description:
      `You can easily change the color of a button by adding the color prop. (default: #000)
    The outline of the input defaults to whatever color your text is. This can be overidden using the style tag.`,
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          color: '#C50EFF',
          placeholder: '#C50EFF'
        },
        code: '<Input color="#C50EFF" />',
      },
      {
        component: Input,
        props: {
          color: '#FF00D9',
          placeholder: '#FF00D9'
        },
        code: '<Input color="#FF00D9" />',
      },
      {
        component: Input,
        props: {
          color: '#ff3579',
          placeholder: '#ff3579'
        },
        code: '<Input color="#ff3579" />',
      },
    ],
  },
  {
    id: 'input_clearable',
    header: 'Clearable',
    description:
      `You can add a clear button to the input by adding the clearable prop`,
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          clearable: true,
          placeholder: 'Clearable',
        },
        code: '<Input clearable={true} />',
      },
    ],
  },
  {
    id: 'input_type',
    header: 'Type',
    description: `You can change the type of input by adding the type prop.
    Acceptable values are 'text' || 'password'. (default: 'text')`,
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          type: 'text',
          placeholder: 'Text',
        },
        code: '<Input type="text" />',
      },
      {
        component: Input,
        props: {
          type: 'password',
          placeholder: 'Password',
        },
        code: '<Input type="password" />',
      },
    ],
  },
  {
    id: 'input_label',
    header: 'Label',
    description:
      `You can add a label to an input by adding the label prop.
    If label={true} you will need to provide an id as a prop which will automatically assign that label to your input.
    If labelIn={true}, your placeholder prop will be overridden by the label prop.`,
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          id: 'label',
          label: true,
          placeholder: 'Search',
          labelIn: true,
        },
        code: '<Input id="testLabel" label={true} labelIn={true} />',
      },
      {
        component: Input,
        props: {
          label: true,
          labelIn: true,
          placeholder: 'Search',
        },
        code: [
          '<Input label={true} labelIn={true} />',
          '// label will be undefined if no id is provided',
        ],
      },
      { component: Spacer } as never,
      {
        component: Input,
        props: {
          id: 'label2',
          label: true,
          placeholder: 'Search',
          labelIn: false,
        },
        code: '<Input id="testLabel1" label={true} labelIn={false} />',
      },
      {
        component: Input,
        props: {
          label: true,
          placeholder: 'Search',
          labelIn: false,
        },
        code: [
          '<Input label={true} labelIn={false} /> ',
          '// label will be undefined if no id is provided',
        ],
      },
    ],
  },
  {
    id: 'input_variant',
    header: 'Variants',
    description:
      `There are 3 variants of input: outline, line, and default. (default: default)`,
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          placeholder: 'Default',
          variant: 'default',
          color: '#C50EFF',
        },
        code: '<Input variant="default" />',
      },
      {
        component: Input,
        props: {
          placeholder: 'Outline',
          variant: 'outline',
          color: '#FF00D9',
        },
        code: '<Input variant="outline" color="#FF00D9" />',
      },
      {
        component: Input,
        props: {
          placeholder: 'Line',
          variant: 'line',
          color: '#ff3579',
          background: 'transparent',
        },
        code: '<Input variant="line" color="#ff3579" background="transparent" />',
      },
    ],
  },
  {
    id: 'input_state',
    header: 'Input State',
    description:
      'Inputs can be in different states including "disabled", "isLoading", and "isError", each affecting its appearance and functionality. The "disabled" state makes the Input unresponsive, while "isLoading" indicates background processing. The "isError" state is used to highlight incorrect input. If the Input is disabled, any custom background is nullified. To change the background color in the disabled state, use the "background-color" property.',
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          disabled: true,
          placeholder: 'Disabled Input',
        },
        code: '<Input disabled placeholder="Disabled Input"/>',
      },
      {
        component: Input,
        props: {
          isLoading: true,
          placeholder: 'Loading Input',
        },
        code: '<Input isLoading={true} placeholder="Loading Input"/>',
      },
      {
        component: Input,
        props: {
          isError: true,
          placeholder: 'Error Input',
        },
        code: '<Input isError={true} placeholder="Error Input"/>',
      },
    ],
  },
  {
    id: `input_props`,
    header: `Input Props`,
    type: 'table',
    table: {
      tableName: 'input',
      rows: [
        {
          name: `input_variant`,
          description: 'The style variant for the InputField. Can be \"default\", \"line\", or \"outline\".',
          type: '{"default" | "line" | "outline"}',
          default: '\"default\"',
          nav: true,
        },
        {
          name: `input_size`,
          description: 'The size of the InputField. Can be \"xsmall\", \"small\", \"medium\", \"large\", or \"xlarge\".',
          type: '{"xsmall" | "small" | "medium" | "large" | "xlarge"}',
          default: '\"medium\"',
          nav: true,
        },
        {
          name: `input_type`,
          description: 'The type of the input. Can be \"text\" or \"password\".',
          type: '{"text" | "password"}',
          default: '\"text\"',
          nav: true,
        },
        {
          name: `input_background`,
          description: 'The background color of the InputField.',
          type: '{string}',
          default: '\"#fff\"',
          nav: true,
        },
        {
          name: `input_color`,
          description: 'The text color of the InputField.',
          type: '{string}',
          default: '\"#000\"',
          nav: true,
        },
        {
          name: `input_placeholder`,
          description: 'The placeholder text in the InputField.',
          type: '{string}',
          default: '\"Search\"',
          nav: false,
        },
        {
          name: `input_value`,
          description: 'The current value of the InputField.',
          type: '{string}',
          default: '\"\"',
          nav: false,
        },
        {
          name: `input_style`,
          description: 'Inline CSS styles to apply to the InputField.',
          type: '{string}',
          default: '\"\"',
          nav: false,
        },
        {
          name: `input_label`,
          description: 'If true, the InputField will display a label.',
          type: '{boolean}',
          default: 'false',
          nav: true,
        },
        {
          name: `input_labelIn`,
          description: 'If true, the label will be displayed inside the InputField.',
          type: '{boolean}',
          default: 'false',
          nav: false,
        },
        {
          name: `input_labelColor`,
          description: 'The color of the label text.',
          type: '{string}',
          default: '\"#000\"',
          nav: false,
        },
        {
          name: `input_clearable`,
          description: 'If true, the InputField will display a clear button when it has input.',
          type: '{boolean}',
          default: 'false',
          nav: true,
        },
        {
          name: `input_disabled`,
          description: 'If true, the InputField will be disabled and users cannot interact with it.',
          type: '{boolean}',
          default: 'false',
          nav: false,
        },
        {
          name: `input_isError`,
          description: 'If true, the InputField will display in an error state.',
          type: '{boolean}',
          default: 'false',
          nav: false,
        },
        {
          name: `input_isLoading`,
          description: 'If true, the InputField will display a loading spinner.',
          type: '{boolean}',
          default: 'false',
          nav: false,
        }
      ],
    },
    examples: null,
  },
  inputprefixes,
  inputprefixProps,
  inputnumbers,
  inputnumberProps,
  inputdates,
  inputtimes,
  inputdatetimes,
  inputdateProps,
  inputcolors,
  inputcolorProps,
];