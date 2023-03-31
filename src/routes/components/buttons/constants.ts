import { Button } from '$lib';
import {
  defaultModalShown,
  defaultModalSlot,
} from '../../../stores/modalStore';

export const buttons: ButtonDisplayData[] = [
  {
    id: 'button_basics',
    header: 'Button Basics',
    description:
      'Buttons are used to trigger actions. They can be used in forms, in dialogs, or in standalone actions. They can be used as links, or used to submit forms. They can be styled in a variety of ways.',
    type: 'components',
    examples: [
      {
        component: Button,
        props: {
          text: 'Default',
        },
        code: '<Button>Default</Button>',
      },
    ]
  },
  {
    id: 'button_background',
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
    id: 'button_size',
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
          background: '#FFC844',
        },
        code: '<Button size="xsmall">XSmall</Button>',
      },
      {
        component: Button,
        props: {
          size: 'small',
          text: 'Small',
          background: '#FF8C4C',
        },
        code: '<Button size="small">Small</Button>',
      },
      {
        component: Button,
        props: {
          size: 'medium',
          text: 'Medium',
          background: '#FF3579'
        },
        code: '<Button size="medium">Medium</Button>',
      },
      {
        component: Button,
        props: {
          size: 'large',
          text: 'Large',
          background: '#ff00d9',
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
          background: '#ff00d9'
        },
      },
      {
        component: Button,
        props: {
          size: 'medium',
          text: 'Medium',
          background: '#FF3579'
        },
      },
      {
        component: Button,
        props: {
          size: 'small',
          text: 'Small',
          background: '#FF8C4C',
        },
      },
      {
        component: Button,
        props: {
          size: 'xsmall',
          text: 'XSmall',
          background: '#FFC844',
        },
      },
    ],
  },
  {
    id: 'button_color',
    header: 'Color Text Button',
    description:
      'You can easily change the color of the text by adding the color prop. (default: white)',
    type: 'components',
    examples: [
      {
        component: Button,
        props: {
          color: 'black',
          text: 'Color',
        },
        code: '<Button color={color}>Color</Button>',
      },
      {
        component: Button,
        props: {
          color: 'white',
          text: 'Color',
        },
      },
      {
        component: Button,
        props: {
          color: 'turquoise',
          text: 'Color',
        },
      },
    ],
  },
  {
    id: 'button_style',
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
    id: 'button_state',
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
    id: 'button_events',
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
    id: 'button_animated',
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
    id: 'button_icon',
    header: 'Icon Button',
    description:
      'You can add an icon to your button by adding the icon prop || the named icon slot. Preference is for an svg, but a png or other image type is acceptable. (default: null)',
    type: 'components',
    examples: [
      {
        component: Button.Icon,
        props: {
          text: 'Icon',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107 128"><title>svelte-logo</title><path d="M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157" style="fill:#c50eff"/><path d="M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287" style="fill:#fff"/></svg>`,
        } as ButtonIconProps,
      },
      {
        component: Button.Icon,
        props: {
          text: 'Icon',
          icon: `<svg fill="#000000" width="800px" height="800px" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" id="memory-email"><path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z" /></svg>`,
        } as ButtonIconProps,
        code: [
          '<Button.Icon icon={svg}>',
          'indent<span slot="text" />',
          '</Button.Icon>'],
      },
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
    id: 'button_props',
    header: 'Button Props',
    description: 'Here is a list of all the props you can use to customize your button. All props are optional.\nYou may also use all native HTML button attributes.',
    type: 'table',
    table: {
      tableName: 'buttons',
      rows: [
        {
          name: 'button_disabled',
          description: 'A boolean that indicates whether the button is disabled or not.',
          default: 'false',
          nav: false
        },
        {
          name: 'button_size',
          description: "A string that indicates the size of the button. The possible values are 'xsmall', 'small','medium', 'large', and 'xlarge'.",
          default: 'medium',
          nav: true
        },
        {
          name: 'button_background',
          description: "A string that indicates the background color of the button.",
          default: '#c50eff',
          nav: true
        },
        {
          name: 'button_color',
          description: "A string that indicates the text color of the button.",
          default: '#fff',
          nav: true
        },
        {
          name: 'button_isLoading',
          description: 'A boolean that indicates whether the button is in a loading state or not. When set to true, the button will be disabled and display a loading spinner.',
          default: 'false',
          nav: false
        },
        {
          name: 'button_isError',
          description: 'A boolean that indicates whether the button is in an error state or not. When set to true, the button will be disabled and display an error border.',
          default: 'false',
          nav: false
        },
        {
          name: 'button_events',
          description: 'You can add event listeners to your button by using the on:click, on:mouseover, on:mouseenter, on:mouseleave, on:focus, on:blur props. The event listener will be passed the event object as the first argument.',
          default: '',
          nav: true
        },
        {
          name: 'button_style',
          description: 'A string that sets additional styles to the button. This should be a valid CSS string.',
          default: '\'\'',
          nav: true
        },
        {
          name: 'button_animated',
          description: 'A boolean that indicates whether the button should animate on click.',
          default: 'false',
          nav: true
        },
      ]
    },
    examples: [
      {
        component: null,
        props: {},
      },
    ],
  },
  {
    id: 'button_icon_props',
    header: 'Icon Props extends Button Props',
    description:
      'The props of Icon are mostly the same as button. The only difference is the addition of the `icon` prop.\nYou may also use all native HTML button attributes.',
    type: 'table',
    table: {
      tableName: 'buttons',
      rows: [
        {
          name: 'button_icon',
          description: 'A string that contains the icon to display. This should be a valid html/xml string. This prop is optional, as you can also use the `icon` slot.',
          default: 'null',
          nav: true
        }
      ]
    },
    examples: [
      {
        component: null,
        props: {},
      },
    ],
  }
];
