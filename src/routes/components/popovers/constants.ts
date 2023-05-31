import Popover from '$lib/popovers/Popover.svelte';

export const popovers: PopoverDisplayData[] = [
  {
    id: 'popover_basics',
    header: 'Popover',
    description:
      'Popover is a component that displays a popup beside the trigger.',
    type: 'components',
    examples: [
      {
        component: Popover,
        props: {
          direction: 'right',
          text: 'Hover Me',
        },
        code: [
          '<Popover direction={direction}>',
          'indent<Button slot="trigger">Hover Me</Button>',
          'indent<span slot="content">Popover Content</span>',
          '</Popover>',
        ],
      },
    ],
  },
  {
    id: 'popover_direction',
    header: 'Direction',
    description: 'Popover can be positioned in 4 different directions.',
    type: 'components',
    examples: [
      {
        component: Popover,
        props: {
          direction: 'left',
          text: 'Left'
        },
      },
      {
        component: Popover,
        props: {
          direction: 'top',
          text: 'Top'
        },
        code: [
          '<Popover direction={direction}>',
          'indent<Button slot="trigger">Hover Me</Button>',
          'indent<span slot="content">Popover Content</span>',
          '</Popover>',
        ],
      },
      {
        component: Popover,
        props: {
          direction: 'bottom',
          text: 'Bottom'
        },
      },
      {
        component: Popover,
        props: {
          direction: 'right',
          text: 'Right'
        },
      },
    ],
  },
  {
    id: 'popover_trigger',
    header: 'Trigger',
    description: 'Popover can be triggered by click or hover.',
    type: 'components',
    examples: [
      {
        component: Popover,
        props: {
          direction: 'top',
          trigger: 'click',
          content: 'Popover Content',
          text: 'Click Me',
        },
        code: [
          '<Popover direction={direction} trigger={trigger}>',
          'indent<Button slot="trigger">Click Me</Button>',
          'indent<span slot="content">Popover Content</span>',
          '</Popover>',
        ],
      },
      {
        component: Popover,
        props: {
          direction: 'right',
          trigger: 'hover',
          content: 'Popover Content',
          text: 'Hover Me',
        },
        code: [
          '<Popover direction={direction} trigger={trigger}>',
          'indent<Button slot="trigger">Hover Me</Button>',
          'indent<span slot="content">Popover Content</span>',
          '</Popover>',
        ],
      },
    ],
  },
  {
    id: 'popover_flyIn',
    header: 'Popover FlyIn',
    description: 'The `flyIn` prop determines if the popover will have a fly-in transition effect when it is triggered. This can add a nice visual touch to your popovers.',
    type: 'components',
    examples: [
      {
        component: Popover,
        props: {
          direction: 'top',
          trigger: 'hover',
          flyIn: true,
          content: 'Fly-in enabled',
          text: 'Enabled!'
        },
        code: [
          `<Popover direction="top" trigger="hover" flyIn={true} content="Fly-in enabled" />`,
        ],
      },
      {
        component: Popover,
        props: {
          direction: 'top',
          trigger: 'hover',
          flyIn: false,
          content: 'Fly-in disabled',
          text: 'Disabled!'
        },
        code: [
          `<Popover direction="top" trigger="hover" flyIn={false} content="Fly-in disabled popover content" text="Hover me!" />`,
        ],
      },
    ],
  },
  {
    id: 'popover_props',
    header: 'Popover Props',
    description: 'Here\'s a breakdown of the props you can pass into the Popover component.',
    type: 'table',
    table: {
      tableName: 'popovers',
      rows: [
        {
          name: 'popover_direction!',
          description: 'The direction of the popover. It can be "top", "bottom", "left", or "right".',
          default: '"right"',
          nav: true
        },
        {
          name: 'popover_trigger',
          description: 'The trigger method for the popover. It can be "hover" or "click".',
          default: '"hover"',
          nav: true
        },
        {
          name: 'popover_flyIn',
          description: 'Determines if the popover should have a fly in transition effect. It can be true or false.',
          default: 'true',
          nav: true
        },
      ]
    },
    examples: [
      {
        component: null,
        props: {
          direction: 'right',
        },
      },
    ],
  }
]
