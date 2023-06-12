import { Textarea } from '../src/lib';
import type { TextareaDisplayData } from '../src/app.d.ts';

export const textareas: TextareaDisplayData[] = [
  {
    id: 'textarea_basics',
    header: 'Textarea Basics',
    description: 'The Textarea component allows text input from user. It is customizable with different styles, sizes and additional features like clearable text.',
    type: 'components',
    examples: [
      {
        component: Textarea,
        props: {
          placeholder: 'Type something here...'
        },
        code: ['<Textarea placeholder="Type something here..." />'],
      },
    ],
  },
  {
    id: 'textarea_background',
    header: 'Textarea Background',
    description: 'The \'background\' prop is used to set the background color of the textarea. It accepts any valid CSS color value.',
    type: 'components',
    examples: [
      {
        component: Textarea,
        props: {
          background: '#c50eff',
          placeholder: 'Purple background',
        },
        code: ['<Textarea {background} />'],
      },
      {
        component: Textarea,
        props: {
          background: '#ff00d9',
          placeholder: 'Pink background',
        },
      },
      {
        component: Textarea,
        props: {
          background: '#FF3579',
          placeholder: 'Salmon background',
        },
      },
      {
        component: Textarea,
        props: {
          background: '#FF8C4C',
          placeholder: 'Orange background',
        },
      },
      {
        component: Textarea,
        props: {
          background: '#FFC844',
          placeholder: 'Gold background',
        },
      },
      {
        component: Textarea,
        props: {
          background: '#F9F871',
          placeholder: 'Yellow background',
        },
      },
    ],
  },
  {
    id: 'textarea_color',
    header: 'Textarea Color',
    description: 'The \'color\' prop is used to set the text color of the textarea. It accepts any valid CSS color value.',
    type: 'components',
    examples: [
      {
        component: Textarea,
        props: {
          color: '#c50eff',
          placeholder: 'Purple text',
        },
        code: ['<Textarea {color} />'],
      },
      {
        component: Textarea,
        props: {
          color: '#ff00d9',
          placeholder: 'Pink text',
        },
      },
      {
        component: Textarea,
        props: {
          color: '#FF3579',
          placeholder: 'Salmon text',
        },
      },
    ],
  },
  {
    id: 'textarea_size',
    header: 'Textarea Sizes',
    description: 'These are examples of textareas in different sizes.',
    type: 'components',
    examples: [
      {
        component: Textarea,
        props: {
          size: 'xsmall',
          placeholder: 'Extra small textarea'
        },
        code: ['<Textarea size="xsmall" />'],
      },
      {
        component: Textarea,
        props: {
          size: 'small',
          placeholder: 'Small textarea'
        },
        code: ['<Textarea size="small" />'],
      },
      {
        component: Textarea,
        props: {
          size: 'large',
          placeholder: 'Large textarea'
        },
        code: ['<Textarea size="large" />'],
      },
      {
        component: Textarea,
        props: {
          size: 'xlarge',
          placeholder: 'Extra large textarea'
        },
        code: ['<Textarea size="xlarge" />'],
      },
    ],
  },
  {
    id: 'textarea_label',
    header: 'Textarea Label',
    description: 'The \'label\', \'labelIn\', and \'labelColor\' props are used to manage the label in the textarea. If \'label\' is set to \'true\', an \'id\' is required. Otherwise, the label will be undefined. \'labelIn\' determines the position of the label within the textarea. \'labelColor\' sets the color of the label text.',
    type: 'components',
    examples: [
      {
        component: Textarea,
        props: {
          id: 'myTextarea',
          label: true,
          labelIn: false,
          labelColor: '#F57F17',
          placeholder: 'Textarea with label outside and custom label color'
        },
        code: ['<Textarea id="myTextarea" label={true} labelIn={false} labelColor="#F57F17" />'],
      },
      {
        component: Textarea,
        props: {
          id: 'myTextareaIn',
          label: true,
          labelIn: true,
          labelColor: '#FF3579',
          placeholder: 'Textarea with label inside and custom label color'
        },
        code: ['<Textarea id="myTextareaIn" label={true} labelIn={true} labelColor="#FF3579" />'],
      },
    ],
  },
  {
    id: 'textarea_labelColor',
    header: 'Textarea with custom label color',
    description: 'This is an example of a textarea with a custom label color.',
    type: 'components',
    examples: [
      {
        component: Textarea,
        props: {
          labelColor: '#F57F17',
          placeholder: 'Textarea with custom label color'
        },
        code: ['<Textarea labelColor="#F57F17" />'],
      },
    ],
  },
  {
    id: 'textarea_variant',
    header: 'Textarea Variant',
    description: 'The \'variant\' prop is used to determine the style variant of the textarea. It can be set to "default", "line", or "outline".',
    type: 'components',
    examples: [
      {
        component: Textarea,
        props: {
          variant: 'default',
          placeholder: 'Default variant'
        },
        code: ['<Textarea variant="default" />'],
      },
      {
        component: Textarea,
        props: {
          variant: 'line',
          placeholder: 'Line variant',
        },
        code: ['<Textarea variant="line" />'],
      },
      {
        component: Textarea,
        props: {
          variant: 'outline',
          placeholder: 'Outline variant'
        },
        code: ['<Textarea variant="outline" />'],
      },
    ],
  },
  {
    id: 'textarea_style',
    header: 'Textarea with custom Style',
    description: 'This is an example of a textarea with custom CSS style.',
    type: 'components',
    examples: [
      {
        component: Textarea,
        props: {
          style: 'border: 2px dashed #795548; border-radius: 10px;',
          placeholder: 'Textarea with custom style'
        },
        code: ['<Textarea style="border: 2px dashed #795548; border-radius: 10px;" />'],
      },
    ],
  },
  {
    id: 'textarea_state',
    header: 'Textarea State',
    description: 'These are examples of textarea in different states (disabled, loading, error).',
    type: 'components',
    examples: [
      {
        component: Textarea,
        props: {
          disabled: true,
          placeholder: 'Disabled textarea'
        },
        code: ['<Textarea disabled={true} />'],
      },
      {
        component: Textarea,
        props: {
          isLoading: true,
          placeholder: 'Textarea in loading state'
        },
        code: ['<Textarea isLoading={true} />'],
      },
      {
        component: Textarea,
        props: {
          isError: true,
          placeholder: 'Textarea with error'
        },
        code: ['<Textarea isError={true} />'],
      },
    ],
  },
  {
    id: 'textarea_clearable',
    header: 'Clearable Textarea',
    description: 'This is an example of a clearable textarea.',
    type: 'components',
    examples: [
      {
        component: Textarea,
        props: {
          clearable: true,
          placeholder: 'Clearable textarea'
        },
        code: ['<Textarea clearable={true} />'],
      },
    ],
  },
  {
    id: 'textarea_props',
    header: 'Textarea Props',
    type: 'table',
    table: {
      tableName: 'textarea',
      rows: [
        {
          name: 'textarea_variant',
          description: 'Determines the style variant of the textarea. Choose from \"default\", \"line\", or \"outline\" to customize the appearance.',
          type: '{"default" | "line" | "outline"}',
          default: '\"default\"',
          nav: true,
        },
        {
          name: 'textarea_size',
          description: 'Specifies the size of the textarea. Options include \"xsmall\", \"small\", \"medium\", \"large\", or \"xlarge\" to control its dimensions.',
          type: '{"xsmall" | "small" | "medium" | "large" | "xlarge"}',
          default: '\"medium\"',
          nav: true,
        },
        {
          name: 'textarea_background',
          description: 'Sets the background color of the textarea. Accepts any valid CSS color value.',
          type: '{string}',
          default: '\"#fff\"',
          nav: true,
        },
        {
          name: 'textarea_color',
          description: 'Determines the text color of the textarea. Accepts any valid CSS color value.',
          type: '{string}',
          default: '\"#000\"',
          nav: true,
        },
        {
          name: 'textarea_placeholder',
          description: 'Specifies the placeholder text displayed in the textarea. Enter any valid string value.',
          type: '{string}',
          default: '\"Enter text\"',
          nav: false,
        },
        {
          name: 'textarea_value',
          description: 'Sets the initial value of the textarea. Provide any valid string value.',
          type: '{string}',
          default: '\"\"',
          nav: false,
        },
        {
          name: 'textarea_style',
          description: 'Applies custom CSS styles to the textarea. Use any valid CSS value to customize its appearance.',
          type: '{string}',
          default: '\"\"',
          nav: true,
        },
        {
          name: 'textarea_label',
          description: 'Determines whether to display a label for the textarea. Provide a boolean value to control its visibility.',
          type: '{boolean}',
          default: 'false',
          nav: true,
        },
        {
          name: 'textarea_labelIn',
          description: 'Determines the position of the label within the textarea. Provide a boolean value to control its placement.',
          type: '{boolean}',
          default: 'false',
          nav: false,
        },
        {
          name: 'textarea_labelColor',
          description: 'Sets the color of the label text in the textarea. Accepts any valid CSS color value.',
          type: '{string}',
          default: '\"#000\"',
          nav: false,
        },
        {
          name: 'textarea_clearable',
          description: 'Enables the clearable feature for the textarea. If \'true\', a clear button will be displayed to remove the text.',
          type: '{boolean}',
          default: 'false',
          nav: true,
        },
        {
          name: 'textarea_disabled',
          description: 'Disables the textarea if set to \'true\'. Provide a boolean value to control its availability.',
          type: '{boolean}',
          default: 'false',
          nav: false,
        },
        {
          name: 'textarea_isError',
          description: 'Indicates whether the textarea has an error. If \'true\', it visually highlights the input as erroneous.',
          type: '{boolean}',
          default: 'false',
          nav: false,
        },
        {
          name: 'textarea_isLoading',
          description: 'Indicates whether the textarea is in a loading state. If \'true\', it displays a loading spinner.',
          type: '{boolean}',
          default: 'false',
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