import { Parallax } from '../src/lib';
import type { ParallaxDisplayData } from '../src/app.d.ts';
import { parallaxVideos, parallaxvideoProps } from './ParallaxVideo_docs';
import { city, desert, flower, beach, boat, jungle, forest } from './assets';

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
    id: 'parallax_position',
    header: 'Parallax Position',
    description: 'The Parallax component allows for precise control over the starting position of the parallax image via the `position` prop. This prop takes in an array of two numbers representing the x and y coordinates. This is useful when you want to focus on a specific part of your image right from the start.',
    type: 'components',
    examples: [
      {
        component: Parallax,
        props: {
          height: '100px',
          width: '100%',
          image: forest,
          alt: 'parallax image',
          speed: 0.2,
          position: [0, -40],
        },
        code: [
          `<Parallax {height} {width} {image} {alt} {speed} position={[x, y]} />`,
        ],
      },
      {
        component: Parallax,
        props: {
          height: '100px',
          width: '100%',
          image: forest,
          alt: 'parallax image',
          speed: 0.2,
          position: [10, -38],
        },
      },
      {
        component: Parallax,
        props: {
          height: '100px',
          width: '100%',
          image: forest,
          alt: 'parallax image',
          speed: 0.2,
          position: [20, -36],
        },
      },
      {
        component: Parallax,
        props: {
          height: '100px',
          width: '100%',
          image: forest,
          alt: 'parallax image',
          speed: 0.2,
          position: [10, -34],
        },
      },
      {
        component: Parallax,
        props: {
          height: '100px',
          width: '100%',
          image: forest,
          alt: 'parallax image',
          speed: 0.2,
          position: [0, -32],
        },
      },
    ],
  },
  {
    id: 'parallax_loadobserver',
    header: 'Parallax Load Observer',
    description: 'The Parallax component provides an option to use a load observer for the parallax image through the `loadObserver` prop. When enabled, this feature allows for tracking the loading state of the image, and displaying a loading indicator. You can either use the default loading indicator provided, or you can add a custom loader to the "loader" slot for a more personalized user experience.',
    type: 'components',
    examples: [
      {
        component: Parallax,
        props: {
          height: '300px',
          width: '100%',
          image: jungle,
          alt: 'parallax image',
          speed: 0.2,
          position: [0, -35],
        },
        code: [
          `<Parallax {image} {alt} loadObserver={true}>`,
          `indent<Loader slot="loader" />`,
          `</Parallax>`,
        ],
      },
    ],
  },
  // {
  //   id: 'parallax_video',
  //   header: 'Parallax Video',
  //   description: 'Parallax has a video component that you can use to create a parallax effect on a video element.',
  //   type: 'components',
  //   examples: [
  //     {
  //       component: Parallax.Video,
  //       props: {
  //         height: '300px',
  //         width: '100%',
  //         video: cityVideo,
  //         alt: 'parallax video',
  //         speed: 0.2,
  //         position: [0, -35],
  //       } as VideoParallaxProps,
  //       code: [
  //         `<Parallax.Video {video} {speed} />`,
  //       ],
  //     },
  //   ],
  // },
  {
    id: `parallax_props`,
    header: `Parallax Props`,
    description: 'Parallax Props',
    type: 'table',
    table: {
      tableName: 'parallax',
      rows: [{
        name: `parallax_image!`,
        description: 'The URL of the image you want to use for the parallax effect.',
        type: '{string}',
        default: '\"\"',
        nav: false,
      },
      {
        name: `parallax_alt!`,
        description: 'Alternative text for the parallax image for better accessibility and SEO.',
        type: '{string}',
        default: '\"\"',
        nav: false,
      },
      {
        name: `parallax_height`,
        description: 'The height of the parallax area on your page.',
        type: '{string}',
        default: '\"300px\"',
        nav: false,
      },
      {
        name: `parallax_width`,
        description: 'The width of the parallax area. It defaults to full width.',
        type: '{string}',
        default: '\"100%\"',
        nav: false,
      },
      {
        name: `parallax_speed`,
        description: 'Controls the rate at which the parallax effect takes place. Adjust this to get the right feel for your design.',
        type: '{number}',
        default: '0.5',
        nav: true,
      },
      {
        name: `parallax_position`,
        description: 'Sets the starting position of the parallax image. Useful for making sure the focus of the image is visible.',
        type: '{[number, number]}',
        default: '[0, 0]',
        nav: true,
      },
      {
        name: `parallax_loadObserver`,
        description: 'Option to use a load observer for the parallax image. This allows you to display a custom loader while the image is being loaded. If enabled, the default loader will be used unless you provide a custom loader in the \"loader\" slot.',
        type: '{boolean}',
        default: 'false',
        nav: true,
      }],
    },
    examples: [
      {
        component: null,
        props: {
          image: "",
          alt: "",
        },
      },
    ],
  },
  parallaxVideos,
  parallaxvideoProps,
];