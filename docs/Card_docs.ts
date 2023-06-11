import { Card } from '../src/lib';
import type { CardDisplayData } from '../src/app.d.ts';

export const cards: CardDisplayData[] = [
  {
    id: 'card_basics',
    header: 'Card Basics',
    description:
      'Card is a container, primarily for holding a header, main content, and footer.\nThere are 3 slots available for the card component. Alternatively, you can choose not to use any of the 3 slots and insert your own components as children.\n\nCard.Head, Card.Content, and Card.Foot. These 3 slots accept any component as a child, as well as background and color as props.',
    type: 'nested',
    examples: [
      {
        component: Card,
        props: {
          nested: [
            {
              component: Card.Head,
              props: {
                slot: 'Card.Head',
                background: '#c50eff',
                color: 'white',
              },
            },
            {
              component: Card.Content,
              props: {
                color: 'black',
                background: 'rgb(246, 237, 247, .9)',
                slot: 'Card.Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas urna ut posuere condimentum. Ut molestie vel mi nec lobortis. Nam ac elit interdum, rhoncus enim ut, posuere nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed bibendum libero.',
                style: 'max-height: 150px; overflow: auto;',
              },
            },
            {
              component: Card.Foot,
              props: {
                background: '#c50eff',
                slot: 'Card.Foot',
                color: 'white',
              },
            },
          ],
        },
        code: [
          '<Card {background}>',
          'indent<Card.Head>Card.Head</Card.Head>',
          'indent<Card.Content {background} {color} {style}>Card.Content</Card.Content>',
          'indent<Card.Foot {background}>Card.Foot</Card.Foot>',
          '</Card>',
        ],
      },
      {
        component: Card,
        props: {
          nested: [
            {
              component: Card.Head,
              props: {
                background: '#ff00d9',
                slot: 'Card.Head',
                color: 'white',
              },
            },
            {
              component: Card.Content,
              props: {
                background: 'rgb(246, 237, 247, .9)',
                color: 'black',
                slot: 'Card.Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas urna ut posuere condimentum. Ut molestie vel mi nec lobortis. Nam ac elit interdum, rhoncus enim ut, posuere nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed bibendum libero.',
                style: 'max-height: 150px; overflow: auto;',
              },
            },
            {
              component: Card.Foot,
              props: {
                slot: 'Card.Foot',
                background: '#ff00d9',
                color: 'white',
              },
            },
          ],
        },
      },
    ],
  },
  {
    id: 'card_style',
    header: 'Card Style',
    description:
      'Adding custom styling is easy as pie. Just do your usual style="..." in string format. \nYour styles can override || accompany the default styles.',
    type: 'nested',
    examples: [
      {
        component: Card,
        props: {
          nested: [
            {
              component: Card.Head,
              props: {
                slot: 'Card.Head',
                background: 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);',
                color: 'white',
              },
            },
            {
              component: Card.Content,
              props: {
                color: 'black',
                background: 'rgb(246, 237, 247, )',
                slot: 'Card.Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas urna ut posuere condimentum. Ut molestie vel mi nec lobortis. Nam ac elit interdum, rhoncus enim ut, posuere nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed bibendum libero.',
                style: 'max-height: 150px; overflow: auto;',
              },
            },
            {
              component: Card.Foot,
              props: {
                background: 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);',
                slot: 'Card.Foot',
                color: 'white',
              },
            },
          ],
        },
        code: [
          '<Card {background}>',
          'indent<Card.Head>Card.Head</Card.Head>',
          'indent<Card.Content {background} {color} {style}>Card.Content</Card.Content>',
          'indent<Card.Foot {background}>Card.Foot</Card.Foot>',
          '</Card>',
        ],
      }
    ],
  },
  {
    id: 'card_events',
    header: 'Card Events',
    description:
      'Card events are easy to use. Just add an event listener to the card component. \nCard events are: on:click, on:mouseover, on:mouseenter, on:mouseleave, on:focus, on:blur.',
    type: 'nested',
    examples: [],
  },
  {
    id: 'card_hover',
    header: 'Card Hover',
    description:
      'Card hover is easy to use. Just add the hover prop to the card component. \n(default: false)',
    type: 'nested',
    examples: [
      {
        component: Card,
        props: {
          hover: true,
          nested: [
            {
              component: Card.Head,
              props: {
                slot: 'Card.Head',
                background: '#FF3579',
                color: 'white',
              },
            },
            {
              component: Card.Content,
              props: {
                color: 'black',
                background: 'rgb(246, 237, 247, )',
                slot: 'Card.Content: Hover over me!',
                style: 'max-height: 150px; overflow: auto;',
              },
            },
            {
              component: Card.Foot,
              props: {
                background: '#FF3579',
                slot: 'Card.Foot',
                color: 'white',
              },
            },
          ],
        },
        code: [
          '<Card {background}>',
          'indent<Card.Head>Card.Head</Card.Head>',
          'indent<Card.Content {background} {color} {style}>Card.Content</Card.Content>',
          'indent<Card.Foot {background}>Card.Foot</Card.Foot>',
          '</Card>',
        ],
      }
    ],
  },
  {
    id: 'card_images',
    header: 'Card with Images',
    description:
      'Card can also be used to display images. You can use the Card.Image as the parent component. Card.Image accepts an image as a child, as well as background and color as props.',
    type: 'gallery',
    examples: [
      {
        component: Card.Image,
        props: {
          image:
            'https://i0.hippopx.com/photos/324/623/626/cat-black-and-white-animals-black-preview.jpg',
          nested: [
            {
              component: Card.Head,
              props: {
                background:
                  'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6474964985994398) 100%)',
                slot: 'Purrlock Holmes',
                color: 'white',
              },
            },
            {
              component: Card.Content,
              props: {
                slot: '',
                style: 'height: 150px; overflow: auto;',
              },
            },
            {
              component: Card.Foot,
              props: {
                style: 'backdrop-filter: blur(.2rem)',
                slot: 'Card.Foot',
                color: 'white',
              },
            },
          ],
        },
        code: [
          '<Card.Image {background} image={url}>',
          'indent<Card.Head {background}>Card.Head</Card.Head>',
          'indent<Card.Content {style} />',
          'indent<Card.Foot {style}>Card.Foot</Card.Foot>',
          '</Card.Image>',
        ],
      },
      {
        component: Card.Image,
        props: {
          image:
            'https://i0.hippopx.com/photos/405/86/365/cat-black-cat-thoughtful-pet-preview.jpg',
          nested: [
            {
              component: Card.Head,
              props: {
                background:
                  'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6474964985994398) 100%)',
                slot: 'Catserole Delight',
                color: 'white',
              },
            },
            {
              component: Card.Content,
              props: {
                slot: '',
                style: 'height: 150px; overflow: auto;',
              },
            },
            {
              component: Card.Foot,
              props: {
                style: 'backdrop-filter: blur(.2rem)',
                slot: 'Card.Foot',
                color: 'white',
              },
            },
          ],
        },
      },
      {
        component: Card.Image,
        props: {
          image:
            'https://img.rawpixel.com/private/static/images/website/2022-05/upwk61856994-wikimedia-image-kowduagi.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2e3d9ade5e2b744c4b8c2f2a44c6294a',
          nested: [
            {
              component: Card.Head,
              props: {
                background:
                  'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6474964985994398) 100%)',
                slot: 'Whiskerella Fuzzypaws',
                color: 'white',
              },
            },
            {
              component: Card.Content,
              props: {
                slot: '',
                style: 'height: 150px; overflow: auto;',
              },
            },
            {
              component: Card.Foot,
              props: {
                style: 'backdrop-filter: blur(.2rem)',
                slot: 'Card.Foot',
                color: 'white',
              },
            },
          ],
        },
      },
      {
        component: Card.Image,
        props: {
          image:
            'https://i0.hippopx.com/photos/149/81/199/cat-black-cat-snow-black-color-preview.jpg',
          nested: [
            {
              component: Card.Head,
              props: {
                background:
                  'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6474964985994398) 100%)',
                slot: 'Sir Fluffington Meowster',
                color: 'white',
              },
            },
            {
              component: Card.Content,
              props: {
                slot: '',
                style: 'height: 150px; overflow: auto;',
              },
            },
            {
              component: Card.Foot,
              props: {
                style: 'backdrop-filter: blur(.2rem)',
                slot: 'Card.Foot',
                color: 'white',
              },
            },
          ],
        },
      },
      {
        component: Card.Image,
        props: {
          image:
            'https://images.pexels.com/photos/37337/cat-silhouette-cats-silhouette-cat-s-eyes.jpg',
          nested: [
            {
              component: Card.Head,
              props: {
                background:
                  'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6474964985994398) 100%)',
                slot: 'Kitty Purrfurst',
                color: 'white',
              },
            },
            {
              component: Card.Content,
              props: {
                slot: '',
                style: 'height: 150px; overflow: auto;',
              },
            },
            {
              component: Card.Foot,
              props: {
                style: 'backdrop-filter: blur(.2rem)',
                slot: 'Card.Foot',
                color: 'white',
              },
            },
          ],
        },
      },
    ],
  },
  {
    id: `card_props`,
    header: `Card Props`,
    type: 'table',
    table: {
      tableName: 'card',
      rows: [
        {
          name: `card_background`,
          description: 'Defines the background color of the Card component. This can be any valid CSS color. The default color is transparent, allowing the Card to seamlessly blend into any background.',
          type: '{string}',
          default: '\"transparent\"',
          nav: false,
        },
        {
          name: `card_style`,
          description: 'Sets additional custom CSS styles for the Card component. This can be used to further customize the Card\'s appearance beyond the provided props.',
          type: '{string}',
          default: '\"\"',
          nav: true,
        },
        {
          name: `card_color`,
          description: 'Specifies the text color within the Card component. This can be any valid CSS color, offering full flexibility over the Card\'s text styling.',
          type: '{string}',
          default: '\"#000\"',
          nav: false,
        },
        {
          name: `card_hover`,
          description: 'Activates a hover effect on the Card component when set to true. This effect includes a subtle shadow and a slight upwards shift to give a floating impression, adding depth and interactivity to your interface.',
          type: '{boolean}',
          default: 'false',
          nav: true,
        }
      ],
    },
    examples: [
      {
        component: null,
        props: {},
      },
    ],
  },
];