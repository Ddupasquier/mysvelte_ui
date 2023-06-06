import { Input, Spacer } from '$lib';

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
      `You can easily change the background of a button by adding the background prop. (default: white)`,
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          background: '#c50eff',
          placeholder: '#c50eff'
        },
        code: '<Input background="#c50eff" />',
      },
      {
        component: Input,
        props: {
          background: '#ff00d9',
          placeholder: '#ff00d9'
        },
        code: '<Input background="#ff00d9" />',
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
    id: 'input_color',
    header: 'Color',
    description:
      `You can easily change the color of a button by adding the color prop. (default: black)
    The outline of the input defaults to whatever color your text is. This can be overidden using the style tag.`,
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          color: '#c50eff',
          placeholder: '#c50eff'
        },
        code: '<Input color="#c50eff" />',
      },
      {
        component: Input,
        props: {
          color: '#ff00d9',
          placeholder: '#ff00d9'
        },
        code: '<Input color="#ff00d9" />',
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
    id: 'input_variants',
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
          color: '#c50eff',
        },
        code: '<Input variant="default" />',
      },
      {
        component: Input,
        props: {
          placeholder: 'Outline',
          variant: 'outline',
          color: '#ff00d9',
        },
        code: '<Input variant="outline" color="#ff00d9" />',
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
    id: 'input_prefix',
    header: 'Prefix',
    description:
      `You can add a prefix the this input by using dot notation IE. Input.Prefix. 
      You can also change the prefix from the default using the prefix prop. (default: @)
      
      const prefix = "@" 
      let val = "example"
      
      const handleSubmit = (e) => {
      e.preventDefault();
      console.log(\`\${prefix}@{val}\`); // @example
      };
      
      <form on:submit={handleSubmit}>
      <Input.Prefix {prefix} bind:value={val} />
      </form>`,
    type: 'components',
    examples: [
      {
        component: Input.Prefix,
        props: {
          prefix: '@',
          placeholder: 'Woah',
        },
        code: '<Input.Prefix prefix="@" />',
      },
      {
        component: Input.Prefix,
        props: {
          prefix: '#',
          placeholder: 'Pretty',
        },
        code: '<Input.Prefix prefix="#" />',
      },
      {
        component: Input.Prefix,
        props: {
          prefix: '¯_(ツ)_/¯',
          placeholder: 'Cool',
        },
        code: '<Input.Prefix prefix="¯_(ツ)_/¯" />',
      },
    ],
  },
  {
    id: 'input_number',
    header: 'Number',
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
  },
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
  },
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
  },
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
  },
  {
    id: 'input_colorPicker',
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
  },
  {
    id: 'input_props',
    header: 'Props',
    description: 'Input accepts all native input props.',
    type: 'table',
    table: {
      tableName: 'inputs',
      rows: [
        {
          name: 'input_background',
          description: 'Accepts a string value for the background color of the input.',
          default: '#fff',
          nav: true
        },
        {
          name: 'input_color',
          description: 'Accepts a string value for the color of the input.',
          default: '#000',
          nav: true
        },
        {
          name: 'input_label',
          description: 'Accepts a boolean value for the label of the input.',
          default: 'false',
          nav: true
        },
        {
          name: 'input_labelIn',
          description: 'Accepts a boolean value for the label to be inside the input.',
          default: 'false',
          nav: false
        },
        {
          name: 'input_placeholder',
          description: 'Accepts a string value for the placeholder of the input.',
          default: '""',
          nav: true
        },
        {
          name: 'input_variants',
          description: 'Accepts a string value for the variant of the input. Variants include: default, outline, and line.',
          default: 'default',
          nav: true
        },
        {
          name: 'input_prefix',
          description: 'You can use dot notation to change the input to the prefixed input component. Use: Input.Prefix',
          default: '',
          nav: true
        },
        {
          name: 'input_date',
          description: 'You can use dot notation to change the input to the date input component. Use: Input.Date',
          default: '',
          nav: true
        },
        {
          name: 'input_time',
          description: 'You can use dot notation to change the input to the time input component. Use: Input.Time',
          default: '',
          nav: true
        },
        {
          name: 'input_dateTime',
          description: 'You can use dot notation to change the input to the date and time input component. Use: Input.DateTime',
          default: '',
          nav: true
        },
      ],
    },
    examples: [
      {
        component: null,
        props: {},
      },
    ],
  }
];
