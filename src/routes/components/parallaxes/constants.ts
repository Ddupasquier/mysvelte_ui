import { Parallax } from '$lib';
import { city, cityVideo, desert, flower, beach, boat } from '../../assets';

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
          `<Parallax {height} {width} {image} {alt} {speed} position={[x, y]} />`,
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
        code: [
          `<Parallax {image} {alt} {height} {width} />`,
        ]
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
          `<Parallax {image} {alt} {speed} />`,
        ]
      },
    ],
  },
  {
    id: 'parallax_video',
    header: 'Parallax Video',
    description: 'Parallax has a video component that you can use to create a parallax effect on a video element.',
    type: 'components',
    examples: [
      {
        component: Parallax.Video,
        props: {
          height: '300px',
          width: '100%',
          video: cityVideo,
          alt: 'parallax video',
          speed: 0.2,
          position: [0, -35],
        } as VideoParallaxProps,
        code: [
          `<Parallax.Video {video} {speed} />`,
        ],
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
          name: 'parallax_image/video!',
          description: 'The image prop is a string that is the path to the image you want to use. The image prop is required.',
          default: '""',
          nav: false,
        },
        {
          name: 'parallax_alt!',
          description: 'The alt prop is a string that is the alt text for the image. The alt prop is required.',
          default: '""',
          nav: false,
        },
        {
          name: 'parallax_size',
          description: 'The height and props are strings that can be any valid css value. IE "100px" or "100%".',
          default: 'W: 100% H: 300px',
          nav: true,
        },
        {
          name: 'parallax_speed',
          description: 'The speed prop is a number between -2 and 2. A positive number will move the image up and a negative number will move the image down.',
          default: '0.5',
          nav: true,
        },
        {
          name: 'parallax_position',
          description: 'The position prop is an array of numbers that is the position of the image or video. The first number is the x position and the second number is the y position. IE [0, 0] is the center, center position.',
          default: '[0, 0]',
          nav: false,
        },
        {
          name: 'parallax_video',
          description: 'The video variant of the parallax component allows you to create a parallax component with a video element.',
          default: '""',
          nav: true,
        },
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