import { Card } from '$lib';

export const cards = [
  {
    id: 'basics',
    header: 'Card Basics',
    description:
      'Card is a container, primarily for holding a header, main content, and footer.\nThere are 3 slots available for the card component. Alternatively, you can choose not to use any of the 3 slots and insert your own components as children.\n\nCard.Head, Card.Content, and Card.Foot. These 3 slots accept any component as a child, as well as background and color as props.',
    examples: [
      {
        component: Card,
        props: {
          background: '#c50eff',
          nested: [
            {
              component: Card.Head,
              props: {
                slot: 'Card.Head',
              },
            },
            {
              component: Card.Content,
              props: {
                color: 'black',
                background: 'rgb(246, 237, 247)',
                slot: 'Card.Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas urna ut posuere condimentum. Ut molestie vel mi nec lobortis. Nam ac elit interdum, rhoncus enim ut, posuere nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed bibendum libero.',
                style: 'max-height: 150px; overflow: auto;',
              },
            },
            {
              component: Card.Foot,
              props: {
                background: '#333',
                slot: 'Card.Foot',
              },
            },
          ],
        },
        code: [
          '<Card background="#1c1c1c">',
          'indent<Card.Head>Card.Head</Card.Head>',
          'indent<Card.Content background="gray" color="black" style="max-height: 150px; overflow: auto;">Card.Content</Card.Content>',
          'indent<Card.Foot background="#333">Card.Foot</Card.Foot>',
          '</Card>',
        ],
      },
      {
        component: Card,
        props: {
          background: '#ff00d9',
          nested: [
            {
              component: Card.Head,
              props: {
                background: '#333',
                slot: 'Card.Head',
              },
            },
            {
              component: Card.Content,
              props: {
                background: 'rgb(246, 237, 247)',
                color: 'black',
                slot: 'Card.Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas urna ut posuere condimentum. Ut molestie vel mi nec lobortis. Nam ac elit interdum, rhoncus enim ut, posuere nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed bibendum libero.',
                style: 'max-height: 150px; overflow: auto;',
              },
            },
            {
              component: Card.Foot,
              props: {
                slot: 'Card.Foot',
              },
            },
          ],
        },
        code: [
          '<Card background="#1c1c1c">',
          'indent<Card.Head background="#333">Card.Head</Card.Head>',
          'indent<Card.Content background="gray" color="black" style="max-height: 150px; overflow: auto;">Card.Content</Card.Content>',
          'indent<Card.Foot>Card.Foot</Card.Foot>',
          '</Card>',
        ],
      },
    ],
  },
];
