import { Accordion } from '$lib';

const accordionData: AccordionData[] = [
  {
    title: 'Accordion Item 1',
    content: 'This is the content for Accordion Item 1.This is the content for Accordion Item 1.This is the content for Accordion Item 1.This is the content for Accordion Item 1.This is the content for Accordion Item 1.This is the content for Accordion Item 1.This is the content for Accordion Item 1.'
  },
  {
    title: 'Accordion Item 2',
    content: 'This is the content for Accordion Item 2.'
  },
  {
    title: 'Accordion Item 3',
    content: 'This is the content for Accordion Item 3.'
  },
];

export const accordions: AccordionDisplayData[] = [
  {
    id: 'accordion_basics',
    header: 'Accordion Basics',
    description: 'Accordions are used to display a large amount of content in a compact space, by showing only one collapsible item at a time.',
    type: 'components',
    examples: [
      {
        component: Accordion,
        props: {
          data: accordionData,
          orientation: 'horizontal',
          animated: true,
          headerStyle: 'height: 20rem'
        },
        code: [
          `<Accordion {data} />`,
        ],
      },
    ],
  },
  {
    id: 'accordion_collapse',
    header: 'Accordion Collapse',
    description: 'By setting the `collapse` prop to false, you can allow multiple accordion items to be expanded at the same time.',
    type: 'components',
    examples: [
      {
        component: Accordion,
        props: {
          data: accordionData,
          collapse: false,
          tabBg: '#ff00d9'
        },
        code: [
          `<Accordion {data} collapse={false} />`,
        ],
      },
    ],
  },
  {
    id: 'accordion_animated',
    header: 'Animated Accordion',
    description: 'You can animate the accordion transitions by setting the `animated` prop to true.',
    type: 'components',
    examples: [
      {
        component: Accordion,
        props: {
          data: accordionData,
          animated: true,
          tabBg: '#FF3579'
        },
        code: [
          `<Accordion {data} animated={true} />`,
        ],
      },
    ],
  },
  {
    id: 'accordion_styling',
    header: 'Styling Accordion',
    description: 'You can style the header and content of each accordion item separately using `headerStyle` and `contentStyle` props. Additionally, you can use the `tabBg`, `tabColor`, `background`, and `color` props to control the color of the tab background, tab text, accordion background, and accordion text, respectively.',
    type: 'components',
    examples: [
      {
        component: Accordion,
        props: {
          data: accordionData,
          headerStyle: "background-color: #FF8C4C; color: #000;",
          contentStyle: "color: #f00;",
          // tabBg: '#FF8C4C',
          // tabColor: '#FFFFFF',
          // background: '#FFFFFF',
          // color: '#333333',
        },
        code: [
          `<Accordion {data} headerStyle="background-color: #FF8C4C; color: #000;" contentStyle="color: #f00" />`,
        ],
      },
    ],
  },
  {
    id: 'accordion_disabled',
    header: 'Disabled Accordion',
    description: 'You can disable the accordion by setting the `disabled` prop to true.',
    type: 'components',
    examples: [
      {
        component: Accordion,
        props: {
          data: accordionData,
          disabled: true,
        },
        code: [
          `<Accordion {data} disabled={true} />`,
        ],
      },
    ],
  },
  {
    id: 'accordion_props',
    header: 'Accordion Props',
    description: 'Here\'s a breakdown of the props you can pass into the Accordion component.',
    type: 'table',
    table: {
      tableName: 'accordions',
      rows: [
        {
          name: 'accordion_data!',
          description: 'The array of accordion items. Each item should have a `title` and a `content`.',
          default: '[]',
          nav: false
        },
        {
          name: 'accordion_collapse',
          description: 'If true, only one item can be expanded at a time. Expanding another item will collapse the currently expanded item.',
          default: 'true',
          nav: true
        },
        {
          name: 'accordion_animated',
          description: 'If true, the accordion transitions will be animated.',
          default: 'false',
          nav: true
        },
        {
          name: 'accordion_disabled',
          description: 'If true, the accordion will be disabled and users cannot interact with it.',
          default: 'false',
          nav: true
        },
        {
          name: 'accordion_headerStyle',
          description: 'The CSS style for the accordion item headers.',
          default: '""',
          nav: false
        },
        {
          name: 'accordion_contentStyle',
          description: 'The CSS style for the accordion item content.',
          default: '""',
          nav: false
        },
        {
          name: 'tabBg',
          description: 'The background color for the tab.',
          default: '"#c50eff"',
          nav: false
        },
        {
          name: 'tabColor',
          description: 'The text color for the tab.',
          default: '"#fff"',
          nav: false
        },
        {
          name: 'background',
          description: 'The background color for the accordion.',
          default: '"#fff"',
          nav: false
        },
        {
          name: 'color',
          description: 'The text color for the accordion.',
          default: '"#000"',
          nav: false
        },
      ]
    },
    examples: [
      {
        component: null,
        props: {
          data: accordionData,
        },
      },
    ],
  }
];
