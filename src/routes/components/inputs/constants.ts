import { Input, Spacer } from '$lib';

export const inputs = [
  {
    id: 'use',
    header: 'Use',
    description: 'Input is a simple input component.',
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          value: '',
          placeholder: 'Search',
        } as InputProps,
        code: ['$: val', "<Input placeholder='search' bind:value={val} />"],
      },
    ],
  },
  {
    id: 'background',
    header: 'Background',
    description:
      'You can easily change the background of a button by adding the background prop. (default: white)',
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          background: '#c50eff',
        } as InputProps,
        code: '<Input background="#c50eff" />',
      },
      {
        component: Input,
        props: {
          background: '#ff00d9',
        } as InputProps,
        code: '<Input background="#ff00d9" />',
      },
      {
        component: Input,
        props: {
          background: '#ff3579',
        } as InputProps,
        code: '<Input background="#ff3579" />',
      },
    ],
  },
  {
    id: 'color',
    header: 'Color',
    description:
      'You can easily change the color of a button by adding the color prop. (default: black)\nThe outline of the input defaults to whatever color your text is. This can be overidden using the style tag.',
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          color: '#c50eff',
        } as InputProps,
        code: '<Input color="#c50eff" />',
      },
      {
        component: Input,
        props: {
          color: '#ff00d9',
        } as InputProps,
        code: '<Input color="#ff00d9" />',
      },
      {
        component: Input,
        props: {
          color: '#ff3579',
        } as InputProps,
        code: '<Input color="#ff3579" />',
      },
    ],
  },
  {
    id: 'label',
    header: 'Label',
    description:
      'You can add a label to an input by adding the label prop. \nIf label={true} you will need to provide an id as a prop which will automatically assign that label to your input.\nIf labelIn={true}, your placeholder prop will be overridden by the label prop.',
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          id: 'label',
          label: true,
          placeholder: 'Search',
          labelIn: true,
        } as InputProps,
        code: '<Input id="testLabel" label={true} labelIn={true} placeholder="Search" />',
      },
      {
        component: Input,
        props: {
          label: true,
          labelIn: true,
          placeholder: 'Search',
        } as InputProps,
        code: [
          '<Input label={true} labelIn={true} placeholder="Search" />',
          '// label will be undefined if no id is provided',
        ],
      },
      { component: Spacer },
      {
        component: Input,
        props: {
          id: 'label2',
          label: true,
          placeholder: 'Search',
          labelIn: false,
        } as InputProps,
        code: '<Input id="testLabel1" label={true} labelIn={false} placeholder="Search" />',
      },
      {
        component: Input,
        props: {
          label: true,
          placeholder: 'Search',
          labelIn: false,
        } as InputProps,
        code: [
          '<Input label={true} labelIn={false} placeholder="Search" /> ',
          '// label will be undefined if no id is provided',
        ],
      },
    ],
  },
  {
    id: 'variants',
    header: 'Variants',
    description:
      'There are 3 variants of input: outline, line, and default. (default: default)',
    type: 'components',
    examples: [
      {
        component: Input,
        props: {
          placeholder: 'Search',
          variant: 'default',
          color: '#c50eff',
        } as InputProps,
        code: '<Input variant="default" color="#c50eff" placeholder="Search" />',
      },
      {
        component: Input,
        props: {
          placeholder: 'Search',
          variant: 'outline',
          color: '#ff00d9',
        } as InputProps,
        code: '<Input variant="outline" color="#ff00d9" placeholder="Search" />',
      },
      {
        component: Input,
        props: {
          placeholder: 'Search',
          variant: 'line',
          color: '#ff3579',
          background: 'transparent',
        } as InputProps,
        code: '<Input variant="line" color="#ff3579" background="transparent" placeholder="Search" />',
      },
    ],
  },
  {
    id: 'prefix',
    header: 'Prefix',
    description:
      'You can add a prefix the this input by using dot notation IE. Input.Prefix. \nYou can also change the prefix from the default using the prefix prop. (default: @)\n\nconst prefix = "@" \n$: val = "example"\n\nconst handleSubmit = (e) => {\n  e.preventDefault();\n  console.log(`${prefix}@{val}`); // @example\n};\n\n<form on:submit={handleSubmit}>\n  <Input.Prefix prefix={prefix} placeholder="Search" bind:value={val} />\n</form>',
    type: 'components',
    examples: [
      {
        component: Input.Prefix,
        props: {
          prefix: '@',
        } as PrefixProps,
        code: '<Input.Prefix prefix="@" placeholder="Search" />',
      },
      {
        component: Input.Prefix,
        props: {
          prefix: '#',
        } as PrefixProps,
        code: '<Input.Prefix prefix="#" placeholder="Search" />',
      },
      {
        component: Input.Prefix,
        props: {
          prefix: '¯_(ツ)_/¯',
        } as PrefixProps,
        code: '<Input.Prefix prefix="¯_(ツ)_/¯" placeholder="Search" />',
      },
    ],
  },
];
