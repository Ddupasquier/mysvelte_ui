import { Button } from '$lib';
import {
  defaultModalShown,
  defaultModalSlot,
} from '../../../stores/modalStore';

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
          text: 'Purple'
        },
        code: '<Button background={background}>Purple</Button>',
      },
      {
        component: Button,
        props: {
          background: '#ff00d9',
          text: 'Pink',
        },
      },
      {
        component: Button,
        props: {
          background: '#FF3579',
          text: 'Salmon',
        },
      },
      {
        component: Button,
        props: {
          background: '#FF8C4C',
          text: 'Orange',
        },
      },
      {
        component: Button,
        props: {
          background: '#FFC844',
          text: 'Gold',
        },
      },
      {
        component: Button,
        props: {
          background: '#F9F871',
          text: 'Yellow',
        },
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
        code: '<Button color={color}>Color</Button>',
      },
      {
        component: Button,
        props: {
          background: 'gray',
          color: 'turquoise',
          text: 'Turquoise',
        },
      },
      {
        component: Button,
        props: {
          background: 'black',
          color: 'red',
          text: 'Red',
        },
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
        code: '<Button style={style}>Custom</Button>',
      },
      {
        component: Button,
        props: {
          text: 'Custom',
          style: 'border-radius: 2rem; padding: 10px; background: #FFC844;',
        },
      },
      {
        component: Button,
        props: {
          text: 'Custom',
          style:
            'border-radius: 5px; padding: .4rem; height: 4rem; width: 6rem; background: #F9F871; color: black; display: flex; justify-content: flex-end; align-items: flex-start;',
        },
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
          'on:click': () => {
            defaultModalShown.set(true);
            defaultModalSlot.set('Woah, just like magic!');
          },
        },
        code: '<Button on:click={() => alert("Woah, just like magic!")}>Click Me</Button>',
      },
    ],
  },
  {
    id: 'animated',
    header: 'Animated Button',
    description:
      'You can animate your button by adding the animated prop. (default: false)',
    type: 'components',
    examples: [
      {
        component: Button,
        props: {
          text: 'Animated',
          animated: true,
        },
        code: '<Button animated={true} />',
      },
    ],
  },
  {
    id: 'icon',
    header: 'Icon Button',
    description:
      'You can add an icon to your button by adding the icon prop. (default: null)',
    type: 'components',
    examples: [
      {
        component: Button.Icon,
        props: {
          text: 'Icon',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 30 30">
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2ZM0 12C0 5.3726 5.3726 0 12 0C18.6274 0 24 5.3726 24 12C24 18.6274 18.6274 24 12 24C5.3726 24 0 18.6274 0 12Z"
		stroke="none"
    fill="currentColor"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M9.59162 22.7357C9.49492 22.6109 9.49492 21.4986 9.59162 19.399C8.55572 19.4347 7.90122 19.3628 7.62812 19.1833C7.21852 18.9139 6.80842 18.0833 6.44457 17.4979C6.08072 16.9125 5.27312 16.8199 4.94702 16.6891C4.62091 16.5582 4.53905 16.0247 5.84562 16.4282C7.15222 16.8316 7.21592 17.9303 7.62812 18.1872C8.04032 18.4441 9.02572 18.3317 9.47242 18.1259C9.91907 17.9201 9.88622 17.1538 9.96587 16.8503C10.0666 16.5669 9.71162 16.5041 9.70382 16.5018C9.26777 16.5018 6.97697 16.0036 6.34772 13.7852C5.71852 11.5669 6.52907 10.117 6.96147 9.49369C7.24972 9.07814 7.22422 8.19254 6.88497 6.83679C8.11677 6.67939 9.06732 7.06709 9.73672 7.99999C9.73737 8.00534 10.6143 7.47854 12.0001 7.47854C13.386 7.47854 13.8777 7.90764 14.2571 7.99999C14.6365 8.09234 14.94 6.36699 17.2834 6.83679C16.7942 7.79839 16.3844 8.99999 16.6972 9.49369C17.0099 9.98739 18.2372 11.5573 17.4833 13.7852C16.9807 15.2706 15.9927 16.1761 14.5192 16.5018C14.3502 16.5557 14.2658 16.6427 14.2658 16.7627C14.2658 16.9427 14.4942 16.9624 14.8233 17.8058C15.0426 18.368 15.0585 19.9739 14.8708 22.6234C14.3953 22.7445 14.0254 22.8257 13.7611 22.8673C13.2924 22.9409 12.7835 22.9822 12.2834 22.9982C11.7834 23.0141 11.6098 23.0123 10.9185 22.948C10.4577 22.9051 10.0154 22.8343 9.59162 22.7357Z"
		stroke="none"
    fill="currentColor"
	/>
</svg>`,
          animated: true,
          color: "white",
        } as ButtonIconProps,
        code: [
          '<Button.Icon>', 
          'indent<svg slot="icon" />', 
          'indent<span slot="text" />', 
          '</Button.Icon>'],
      },
    ],
  },
  {
    id: 'props',
    header: 'Button Props',
    description:
      'Here is a list of all the props you can use to customize your button. All props are optional.\nYou may also use all native HTML button attributes.',
    type: 'table',
    table: {
      disabled:
        'A boolean that indicates whether the button is disabled or not. Defaults to false.',
      size: "A string that indicates the size of the button. The possible values are 'xsmall', 'small','medium', 'large', and 'xlarge'. Defaults to 'medium'.",
      background:
        "A string that indicates the background color of the button. Defaults to '#c50eff'.",
      color:
        "A string that indicates the text color of the button. Defaults to '#fff'.",
      isLoading:
        'A boolean that indicates whether the button is in a loading state or not. When set to true, the button will be disabled and display a loading spinner. Defaults to false.',
      isError:
        'A boolean that indicates whether the button is in an error state or not. When set to true, the button will be disabled and display an error border. Defaults to false.',
      on: 'An object that contains event listeners for the button. See the events section for more information.',
      style:
        'A string that sets additional styles to the button. This should be a valid CSS string.',
    },
    examples: [
      {
        component: null,
        props: {},
      },
    ],
  },
];
