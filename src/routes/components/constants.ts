import Button from '$lib/buttons/Button.svelte';

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
        },
        code: '<Button background="#c50eff">Purple</Button>',
      },
      {
        component: Button,
        props: {
          background: '#ff00d9',
          text: 'Pink',
        },
        code: '<Button background="#ff00d9">Pink</Button>',
      },
      {
        component: Button,
        props: {
          background: '#FF3579',
          text: 'Salmon',
        },
        code: '<Button background="#FF3579">Salmon</Button>',
      },
      {
        component: Button,
        props: {
          background: '#FF8C4C',
          text: 'Orange',
        },
        code: '<Button background="#FF8C4C">Orange</Button>',
      },
      {
        component: Button,
        props: {
          background: '#FFC844',
          text: 'Gold',
        },
        code: '<Button background="#FFC844">Gold</Button>',
      },
      {
        component: Button,
        props: {
          background: '#F9F871',
          text: 'Yellow',
        },
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
        },
        code: '<Button color="black">Purple</Button>',
      },
      {
        component: Button,
        props: {
          background: 'gray',
          color: 'turquoise',
          text: 'Turquoise',
        },
        code: '<Button color="turquoise">Turquoise</Button>',
      },
      {
        component: Button,
        props: {
          background: 'black',
          color: 'red',
          text: 'Red',
        },
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
        },
        code: '<Button size="xsmall">XSmall</Button>',
      },
      {
        component: Button,
        props: {
          size: 'small',
          text: 'Small',
        },
        code: '<Button size="small">Small</Button>',
      },
      {
        component: Button,
        props: {
          size: 'medium',
          text: 'Medium',
        },
        code: '<Button size="medium">Medium</Button>',
      },
      {
        component: Button,
        props: {
          size: 'large',
          text: 'Large',
        },
        code: '<Button size="large">Large</Button>',
      },
      {
        component: Button,
        props: {
          size: 'xlarge',
          text: 'XLarge',
        },
        code: '<Button size="xlarge">XLarge</Button>',
      },
      {
        component: Button,
        props: {
          size: 'large',
          text: 'Large',
        },
      },
      {
        component: Button,
        props: {
          size: 'medium',
          text: 'Medium',
        },
      },
      {
        component: Button,
        props: {
          size: 'small',
          text: 'Small',
        },
      },
      {
        component: Button,
        props: {
          size: 'xsmall',
          text: 'XSmall',
        },
      },
    ],
  },
  {
    header: 'Disable Button',
    description:
      'Disabling a button is as simple as adding the disabled prop. You can make this dynamic by binding to a boolean value. (default: false)',
    examples: [
      {
        component: Button,
        props: {
          disabled: true,
          text: 'Disabled',
        },
        code: '<Button disabled>Disabled</Button>',
      },
    ],
  },
];
