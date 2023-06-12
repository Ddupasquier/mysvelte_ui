import { Textarea } from '../src/lib';
import type { TextareaDisplayData } from '../src/app.d.ts';

export const textareas: TextareaDisplayData[] = [
  {
    id: `textarea_basics`,
    header: 'Textarea Basics',
    description: '',
    type: 'components',
    examples: [
      {
        component: Textarea,
        props: {},
        code: [''],
      },
    ],
  },
  {
    id: `textarea_props`,
    header: `Textarea Props`,
    type: 'table',
    table: {
      tableName: 'textarea',
      rows: [
        {
          name: `textarea_variant`,
          description: 'Determines the style variant of the textarea. Choose from \"default\", \"line\", or \"outline\" to customize the appearance.',
          type: '{"default" | "line" | "outline"}',
          default: '\"default\"',
          nav: true,
        },
        {
          name: `textarea_size`,
          description: 'Specifies the size of the textarea. Options include \"xsmall\", \"small\", \"medium\", \"large\", or \"xlarge\" to control its dimensions.',
          type: '{"xsmall" | "small" | "medium" | "large" | "xlarge"}',
          default: '\"medium\"',
          nav: true,
        },
        {
          name: `textarea_background`,
          description: 'Sets the background color of the textarea. Accepts any valid CSS color value.',
          type: '{string}',
          default: '\"white\"',
          nav: true,
        },
        {
          name: `textarea_color`,
          description: 'Determines the text color of the textarea. Accepts any valid CSS color value.',
          type: '{string}',
          default: '\"#000\"',
          nav: true,
        },
        {
          name: `textarea_placeholder`,
          description: 'Specifies the placeholder text displayed in the textarea. Enter any valid string value.',
          type: '{string}',
          default: '\"Enter text\"',
          nav: true,
        },
        {
          name: `textarea_value`,
          description: 'Sets the initial value of the textarea. Provide any valid string value.',
          type: '{string}',
          default: '\"\"',
          nav: true,
        },
        {
          name: `textarea_style`,
          description: 'Applies custom CSS styles to the textarea. Use any valid CSS value to customize its appearance.',
          type: '{string}',
          default: '\"\"',
          nav: true,
        },
        {
          name: `textarea_label`,
          description: 'Determines whether to display a label for the textarea. Provide a boolean value to control its visibility.',
          type: '{boolean}',
          default: 'false',
          nav: true,
        },
        {
          name: `textarea_labelIn`,
          description: 'Determines the position of the label within the textarea. Provide a boolean value to control its placement.',
          type: '{boolean}',
          default: 'false',
          nav: true,
        },
        {
          name: `textarea_labelColor`,
          description: 'Sets the color of the label text in the textarea. Accepts any valid CSS color value.',
          type: '{string}',
          default: '\"#000\"',
          nav: true,
        },
        {
          name: `textarea_disabled`,
          description: 'Disables the textarea if set to `true`. Provide a boolean value to control its availability.',
          type: '{boolean}',
          default: 'false',
          nav: true,
        },
        {
          name: `textarea_clearable`,
          description: 'Enables the clearable feature for the textarea. If `true`, a clear button will be displayed to remove the text.',
          type: '{boolean}',
          default: 'false',
          nav: true,
        },
        {
          name: `textarea_isError`,
          description: 'Indicates whether the textarea has an error. If `true`, it visually highlights the input as erroneous.',
          type: '{boolean}',
          default: 'false',
          nav: true,
        },
        {
          name: `textarea_isLoading`,
          description: 'Indicates whether the textarea is in a loading state. If `true`, it displays a loading spinner.',
          type: '{boolean}',
          default: 'false',
          nav: true,
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