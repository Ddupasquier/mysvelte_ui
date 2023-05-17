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
];
