import Button from '$lib/for-package/buttons/Button.svelte';

interface ButtonProps {
  background?: string;
  color?: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  disabled?: boolean;
  text?: string;
  isLoading?: boolean;
}

export const buttons = [
  {
    header: 'Background Button',
    description:
      'You can easily change the background of a button by adding the background prop. (default: purple)',
    examples: [
      {
        component: Button,
        props: {
          background: '#c50eff',
          text: 'Purple',
        } as ButtonProps,
        code: '<Button background="#c50eff">Purple</Button>',
      },
      {
        component: Button,
        props: {
          background: '#ff00d9',
          text: 'Pink',
        } as ButtonProps,
        code: '<Button background="#ff00d9">Pink</Button>',
      },
      {
        component: Button,
        props: {
          background: '#FF3579',
          text: 'Salmon',
        } as ButtonProps,
        code: '<Button background="#FF3579">Salmon</Button>',
      },
      {
        component: Button,
        props: {
          background: '#FF8C4C',
          text: 'Orange',
        } as ButtonProps,
        code: '<Button background="#FF8C4C">Orange</Button>',
      },
      {
        component: Button,
        props: {
          background: '#FFC844',
          text: 'Gold',
        } as ButtonProps,
        code: '<Button background="#FFC844">Gold</Button>',
      },
      {
        component: Button,
        props: {
          background: '#F9F871',
          text: 'Yellow',
        } as ButtonProps,
        code: '<Button background="#F9F871">Yellow</Button>',
      },
    ],
  },
  {
    header: 'Color Text Button',
    description:
      'You can easily change the color of the text by adding the color prop. (default: white)',
    examples: [
      {
        component: Button,
        props: {
          color: 'black',
          text: 'Black',
        } as ButtonProps,
        code: '<Button color="black">Purple</Button>',
      },
      {
        component: Button,
        props: {
          background: 'gray',
          color: 'turquoise',
          text: 'Turquoise',
        } as ButtonProps,
        code: '<Button color="turquoise">Turquoise</Button>',
      },
      {
        component: Button,
        props: {
          background: 'black',
          color: 'red',
          text: 'Red',
        } as ButtonProps,
        code: '<Button color="red">Salmon</Button>',
      },
    ],
  },
  {
    header: 'Resize Button',
    description:
      'By adding the size prop you can grow or shrink your button with small, medium, large, and xlarge (default: medium)',
    examples: [
      {
        component: Button,
        props: {
          size: 'xsmall',
          text: 'XSmall',
        } as ButtonProps,
        code: '<Button size="xsmall">XSmall</Button>',
      },
      {
        component: Button,
        props: {
          size: 'small',
          text: 'Small',
        } as ButtonProps,
        code: '<Button size="small">Small</Button>',
      },
      {
        component: Button,
        props: {
          size: 'medium',
          text: 'Medium',
        } as ButtonProps,
        code: '<Button size="medium">Medium</Button>',
      },
      {
        component: Button,
        props: {
          size: 'large',
          text: 'Large',
        } as ButtonProps,
        code: '<Button size="large">Large</Button>',
      },
      {
        component: Button,
        props: {
          size: 'xlarge',
          text: 'XLarge',
        } as ButtonProps,
        code: '<Button size="xlarge">XLarge</Button>',
      },
      {
        component: Button,
        props: {
          size: 'large',
          text: 'Large',
        } as ButtonProps,
      },
      {
        component: Button,
        props: {
          size: 'medium',
          text: 'Medium',
        } as ButtonProps,
      },
      {
        component: Button,
        props: {
          size: 'small',
          text: 'Small',
        } as ButtonProps,
      },
      {
        component: Button,
        props: {
          size: 'xsmall',
          text: 'XSmall',
        } as ButtonProps,
      },
    ],
  },
  {
    header: 'Disable Button',
    description:
      'There are multiple states a button can be in. Here is my rendition of some fun UI for them. (default all: false)',
    examples: [
      {
        component: Button,
        props: {
          disabled: true,
          text: 'Disabled',
        } as ButtonProps,
        code: '<Button disabled>Disabled</Button>',
      },
      {
        component: Button,
        props: {
          isLoading: true,
          text: 'Loading',
        } as ButtonProps,
        code: '<Button isLoading={true}>Loading</Button>',
      },
      {
        component: Button,
        props: {
          isError: true,
          text: 'Error',
        } as ButtonProps,
        code: '<Button isError={true}>Error</Button>',
      },
    ],
  },
];
