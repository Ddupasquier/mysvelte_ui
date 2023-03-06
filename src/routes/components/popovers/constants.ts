import { Button } from '$lib';
import Popover from '$lib/popovers/Popover.svelte';

export const popovers: PopoverDisplayData[] = [
  {
    id: 'popover',
    header: 'Popover',
    description:
      'Popover is a component that displays a popup beside the trigger.',
    type: 'components',
    examples: [
      {
        component: Popover,
        props: {
          direction: 'right',
        },
        code: [
          '<Popover direction={direction}>',
          'indent<Button>Hover Me</Button>',
          'indent<span>Popover Content</span>',
          '</Popover>',
        ],
      },
    ],
  },
  {
    id: 'direction',
    header: 'Direction',
    description: 'Popover can be positioned in 4 different directions.',
    type: 'components',
    examples: [
      {
        component: Popover,
        props: {
          direction: 'left',
        },
      },
      {
        component: Popover,
        props: {
          direction: 'top',
        },
        code: [
          '<Popover direction={direction}>',
          'indent<Button>Hover Me</Button>',
          'indent<span>Popover Content</span>',
          '</Popover>',
        ],
      },
      {
        component: Popover,
        props: {
          direction: 'bottom',
        },
      },
      {
        component: Popover,
        props: {
          direction: 'right',
        },
      },
    ],
  },
  {
    id: 'trigger',
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
        },
        code: [
          '<Popover direction={direction} trigger={trigger}>',
          'indent<Button>Click Me</Button>',
          'indent<span>Popover Content</span>',
          '</Popover>',
        ],
      },
      {
        component: Popover,
        props: {
          direction: 'right',
          trigger: 'hover',
          content: 'Popover Content',
        },
        code: [
          '<Popover direction={direction} trigger={trigger}>',
          'indent<Button>Hover Me</Button>',
          'indent<span>Popover Content</span>',
          '</Popover>',
        ],
      },
    ],
  },
];
