import Button from '$lib/buttons/Button.svelte';

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
    id: 'background',
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
    id: 'color',
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
    id: 'size',
    header: 'Resize Button',
    description:
      'By adding the size prop you can grow || shrink your button with small, medium, large, and xlarge (default: medium)',
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
    id: 'css',
    header: 'Custom Button',
    description:
      'Adding custom styling is easy as pie. Just do your usual style="..." in string format. Your styles can override || accompany the default styles.',
    examples: [
      {
        component: Button,
        props: {
          text: 'Custom',
          style: 'border: 1px solid black; border-radius: 5px; padding: 10px;',
        } as ButtonProps,
        code: '<Button style="border: 1px solid black; border-radius: 5px; padding: 10px;">Custom</Button>',
      },
      {
        component: Button,
        props: {
          text: 'Custom',
          style: 'border-radius: 2rem; padding: 10px; background: #FFC844;',
        } as ButtonProps,
        code: '<Button style="border-radius: 2rem; padding: 10px; background: #FFC844;">Custom</Button>',
      },
      {
        component: Button,
        props: {
          text: 'Custom',
          style:
            'border-radius: 5px; padding: .4rem; height: 4rem; width: 6rem; background: #F9F871; color: black; display: flex; justify-content: flex-end; align-items: flex-start;',
        } as ButtonProps,
        code: '<Button style="border-radius: 5px; padding: .4rem; height: 4rem; width: 6rem; background: #F9F871; color: black; display: flex; justify-content: flex-end; align-items: start;">Custom</Button>',
      },
    ],
  },
  {
    id: 'state',
    header: 'Stateful Button',
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
