import { Parallax } from '$lib';
import { city, desert, flower, beach, boat } from '../../assets';

export const parallaxes: ParallaxDisplayData[] = [
  {
    id: 'parallax_basics',
    header: 'Parallax Basics',
    description: 'Parallax is a component that allows you to create a parallax effect on any element.',
    type: 'components',
    examples: [
      {
        component: Parallax,
        props: {
          height: '300px',
          width: '100%',
          image: city,
          alt: 'parallax image',
          speed: 0.2,
        },
        code: [
          `<Parallax {height} {width} {image} {alt} {speed} />`,
        ],
      },
    ],
  },
  {
    id: 'parallax_size',
    header: 'Parallax Size',
    description: 'Parallax has a height and width prop that you can use to change the size of the parallax element.\n\nThe height and width props are strings that can be any valid css value.',
    type: 'components',
    examples: [
      {
        component: Parallax,
        props: {
          height: '150px',
          width: '100%',
          image: desert,
          alt: 'parallax image',
          speed: 0.2,
        },
      },
      {
        component: Parallax,
        props: {
          height: '200px',
          width: '100%',
          image: flower,
          alt: 'parallax image',
          speed: 0.2,
        }
      },
      {
        component: Parallax,
        props: {
          height: '250px',
          width: '100%',
          image: boat,
          alt: 'parallax image',
          speed: 0.2,
        },
      },
    ],
  },
  {
    id: 'parallax_speed',
    header: 'Parallax Speed',
    description: 'Parallax has a speed prop that you can use to change the speed of the parallax effect.\n\nThe speed prop is a number between -2 and 2. A positive number will move the image up and a negative number will move the image down.',
    type: 'components',
    examples: [
      {
        component: Parallax,
        props: {
          height: '300px',
          width: '100%',
          image: beach,
          alt: 'parallax image',
          speed: -0.2,
        },
        code: [
          `<Parallax {speed} />`,
        ]
      },
    ],
  },
  {
    id: 'parallax_props',
    header: 'Parallax Props',
    description: 'Parallax has a few props that you can use to customize the component.',
    type: 'table',
    table: {
      tableName: 'parallaxes',
      rows: [
        {
          name: 'parallax_image!',
          description: 'string',
          default: '',
          nav: false,
        },
        {
          name: 'parallax_alt!',
          description: 'string',
          default: '',
          nav: false,
        },
        {
          name: 'parallax_size',
          description: 'string',
          default: 'W: 100% H: 300px',
          nav: true,
        },
        {
          name: 'parallax_speed',
          description: 'number',
          default: '0.5',
          nav: true,
        }
      ]
    },
    examples: [
      {
        component: null,
        props: {
          alt: '',
          image: '',
        },
      },
    ],
  }
]