import { Input, Spacer } from '$lib';

export const inputs = [
  {
    id: 'use',
    header: 'Use',
    description: 'Input is a simple input component.',
    examples: [
      {
        component: Input.Prefix,
        props: {
          value: '',
          size: 'xsmall',
          placeholder: 'Search',
          style: 'width: 20rem',
          background: 'lightgray',
        } as InputProps,
        code: [
          '$: val',
          "<Input size='large' placeholder='search' style='width: 20rem' bind:value={val} />",
        ],
      },
    ],
  },
  {
    id: 'background',
    header: 'Background',
    description:
      'You can easily change the background of a button by adding the background prop. (default: purple)',
    examples: [
      {
        component: Input,
        props: {
          background: '#c50eff',
          color: 'white',
        } as InputProps,
        code: '<Input background="#c50eff" color="white" />',
      },
      {
        component: Input,
        props: {
          background: '#FF8C4C',
        } as InputProps,
        code: '<Input background="#FF8C4C" />',
      },
      {
        component: Input,
        props: {
          background: '#FFC844',
        } as InputProps,
        code: '<Input background="#FFC844" />',
      },
    ],
  },
  {
    id: 'label',
    header: 'Label',
    description:
      'You can add a label to an input by adding the label prop. \nIf label={true} you will need to provide an id as a prop which will automatically assign that label to your input.\nIf labelIn={true}, your placeholder prop will be overridden by the label prop.',
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
        code: '<Input label={true} labelIn={true} placeholder="Search" /> // label will be undefined if no id is provided',
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
        code: '<Input label={true} labelIn={false} placeholder="Search" /> // label will be undefined if no id is provided',
      },
    ],
  },
  {
    id: 'size',
    header: 'Size',
    description: 'You can change the size of an input by adding the size prop.',
    examples: [
      {
        component: Input.Prefix,
        props: {
          size: 'xsmall',
          placeholder: 'Search',
        } as InputProps,
        code: '<Input.Prefix size="xsmall" placeholder="Search" />',
      },
      {
        component: Input.Prefix,
        props: {
          size: 'small',
          placeholder: 'Search',
        } as InputProps,
        code: '<Input.Prefix size="small" placeholder="Search" />',
      },
      {
        component: Input.Prefix,
        props: {
          size: 'medium',
          placeholder: 'Search',
        } as InputProps,
        code: '<Input.Prefix size="medium" placeholder="Search" />',
      },
      {
        component: Input.Prefix,
        props: {
          size: 'large',
          placeholder: 'Search',
          variant: 'outline',
          label: true,
          labelIn: true,
          id: 'testLabel1',
        } as InputProps,
        code: '<Input.Prefix size="large" placeholder="Search" />',
      },
      {
        component: Input.Prefix,
        props: {
          size: 'xlarge',
          placeholder: 'Search',
          variant: 'line',
          background: 'transparent',
          label: true,
          labelIn: true,
          id: 'testLabel2',
        } as InputProps,
        code: '<Input.Prefix size="xlarge" placeholder="Search" />',
      },
    ],
  },
];
