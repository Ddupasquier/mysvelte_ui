import Button from '$lib/buttons/Button.svelte';

export const buttons: ButtonDisplayData[] = [
  {
    id: 'background',
    header: 'Background Button',
    description:
      'You can easily change the background of a button by adding the background prop. (default: purple)',
    type: 'components',
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
    id: 'size',
    header: 'Resize Button',
    description:
      'By adding the size prop you can grow || shrink your button with small, medium, large, and xlarge (default: medium)',
    type: 'components',
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
    id: 'color',
    header: 'Color Text Button',
    description:
      'You can easily change the color of the text by adding the color prop. (default: white)',
    type: 'components',
    examples: [
      {
        component: Button,
        props: {
          color: 'black',
          text: 'Black',
        },
        code: '<Button color="black">Black</Button>',
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
        code: '<Button color="red">Red</Button>',
      },
    ],
  },
  {
    id: 'css',
    header: 'Custom Button',
    description:
      'Adding custom styling is easy as pie. Just do your usual style="..." in string format. \nYour styles can override || accompany the default styles.',
    type: 'components',
    examples: [
      {
        component: Button,
        props: {
          text: 'Custom',
          style: 'border: 1px solid black; border-radius: 5px; padding: 10px;',
        },
        code: '<Button style="border: 1px solid black; border-radius: 5px; padding: 10px;">Custom</Button>',
      },
      {
        component: Button,
        props: {
          text: 'Custom',
          style: 'border-radius: 2rem; padding: 10px; background: #FFC844;',
        },
        code: '<Button style="border-radius: 2rem; padding: 10px; background: #FFC844;">Custom</Button>',
      },
      {
        component: Button,
        props: {
          text: 'Custom',
          style:
            'border-radius: 5px; padding: .4rem; height: 4rem; width: 6rem; background: #F9F871; color: black; display: flex; justify-content: flex-end; align-items: flex-start;',
        },
        code: '<Button style="border-radius: 5px; padding: .4rem; height: 4rem; width: 6rem; background: #F9F871; color: black; display: flex; justify-content: flex-end; align-items: start;">Custom</Button>',
      },
    ],
  },
  {
    id: 'state',
    header: 'Stateful Button',
    description:
      'There are multiple states a button can be in. Here is my rendition of some fun UI for them. (default all: false)\nWhile disabled, the background property in a custom style tag will be nullified. \nIf you still wish the alter the background color while disabled, use the background-color property.',
    type: 'components',
    examples: [
      {
        component: Button,
        props: {
          disabled: true,
          text: 'Disabled',
        },
        code: '<Button disabled>Disabled</Button>',
      },
      {
        component: Button,
        props: {
          isLoading: true,
          text: 'Loading',
        },
        code: '<Button isLoading={true}>Loading</Button>',
      },
      {
        component: Button,
        props: {
          isError: true,
          text: 'Error',
        },
        code: '<Button isError={true}>Error</Button>',
      },
    ],
  },
  {
    id: 'events',
    header: 'Button Events',
    description:
      'You can add event listeners to your button by using the on:click, on:mouseover, on:mouseenter, on:mouseleave, on:focus, on:blur props. \nThe event listener will be passed the event object as the first argument.',
    type: 'components',
    examples: [
      {
        component: Button,
        props: {
          text: 'Click Me',
          'on:click': () => alert('Woah, just like magic!'),
        },
        code: '<Button on:click={() => alert("Woah, just like magic!")}>Click Me</Button>',
      },
    ],
  },
  {
    id: 'props',
    header: 'Button Props',
    description:
      'Here is a list of all the props you can use to customize your button. All props are optional.',
    // table: propsTable,
    // {
    //   ref: 'A reference to the button element.',
    //   disabled:
    //     'A boolean that indicates whether the button is disabled or not. Defaults to false.',
    //   size: "A string that indicates the size of the button. The possible values are 'xsmall', 'small','medium', 'large', and 'xlarge'. Defaults to 'medium'.",
    //   background:
    //     "A string that indicates the background color of the button. Defaults to '#c50eff'.",
    //   color:
    //     "A string that indicates the text color of the button. Defaults to '#fff'.",
    //   text: 'A string that sets the text content of the button. Defaults to an empty string.',
    //   isLoading:
    //     'A boolean that indicates whether the button is in a loading state or not. When set to true, the button will be disabled and display a loading spinner. Defaults to false.',
    //   isError:
    //     'A boolean that indicates whether the button is in an error state or not. When set to true, the button will be disabled and display an error border. Defaults to false.',
    //   style:
    //     'A string that sets additional styles to the button. This should be a valid CSS string.',
    // },
    type: 'components',
    examples: [
      {
        component: null,
        props: {},
      },
    ],
  },
];
