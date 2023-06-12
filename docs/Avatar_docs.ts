import { Avatar } from '../src/lib';
import type { AvatarDisplayData } from '../src/app.d.ts';

const image1 = 'https://images.unsplash.com/photo-1681052027179-5471edd589c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
const image2 = 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
const image3 = 'https://images.unsplash.com/photo-1492447046925-35d93a19f006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';

export const avatars: AvatarDisplayData[] = [
  {
    id: 'avatar_basics',
    header: 'Avatar Basics',
    description: 'Avatars are widely used to visually represent individuals or entities in various contexts such as user profiles, contact lists, or comment sections. They provide a quick and recognizable visual identifier. Avatars can be customized by displaying either images or icons that represent the individual or entity being depicted.',
    type: 'components',
    examples: [
      {
        component: Avatar,
        props: {
          image: image1,
          alt: 'Avatar',
          size: 'xlarge'
        },
        code: [
          `<Avatar {image} alt="Avatar" />`,
        ],
      },
    ],
  },
  {
    id: 'avatar_image',
    header: 'Avatar Image',
    description: 'You can easily display an avatar image by providing the URL of the image source. The image should represent the individual or entity associated with the avatar.',
    type: 'components',
    examples: [
      {
        component: Avatar,
        props: {
          image: image1,
          alt: 'Avatar',
        },
        code: [
          `<Avatar {image} alt="Avatar" />`,
        ],
      },
      {
        component: Avatar,
        props: {
          image: image2,
          alt: 'Avatar',
        },
      },
      {
        component: Avatar,
        props: {
          image: image3,
          alt: 'Avatar',
        },
      },
    ],
  },
  {
    id: 'avatar_size',
    header: 'Avatar Size',
    description: 'Avatars can be displayed in different sizes to suit your layout and design requirements. Choose from "xsmall", "small", "medium", "large", or "xlarge" to adjust the dimensions of the avatar.',
    type: 'components',
    examples: [
      {
        component: Avatar,
        props: {
          image: image3,
          alt: 'Avatar',
          size: 'xsmall',
        },
      },
      {
        component: Avatar,
        props: {
          image: image1,
          alt: 'Avatar',
          size: 'small',
        },
        code: [
          `<Avatar {image} alt="Avatar" {size} />`,
        ],
      },
      {
        component: Avatar,
        props: {
          image: image2,
          alt: 'Avatar',
          size: 'medium',
        },
      },
      {
        component: Avatar,
        props: {
          image: image3,
          alt:

            'Avatar',
          size: 'large',
        },
      },
      {
        component: Avatar,
        props: {
          image: image2,
          alt: 'Avatar',
          size: 'medium',
        },
      },
      {
        component: Avatar,
        props: {
          image: image1,
          alt: 'Avatar',
          size: 'small',
        },
      },
      {
        component: Avatar,
        props: {
          image: image3,
          alt: 'Avatar',
          size: 'xsmall',
        },
      },
    ],
  },
  {
    id: 'avatar_shape',
    header: 'Avatar Shape',
    description: 'Customize the shape of the avatar to match your design aesthetic. Choose from "square", "rounded", or "circ" (circular) to define the border shape of the avatar. The default shape is "rounded".',
    type: 'components',
    examples: [
      {
        component: Avatar,
        props: {
          image: image1,
          alt: 'Avatar',
          shape: 'square',
        },
        code: [
          `<Avatar {image} alt="Avatar" {shape} />`,
        ],
      },
      {
        component: Avatar,
        props: {
          image: image2,
          alt: 'Avatar',
          shape: 'rounded',
        },
      },
      {
        component: Avatar,
        props: {
          image: image3,
          alt: 'Avatar',
          shape: 'circ',
        },
      }
    ],
  },
  {
    id: 'avatar_filter',
    header: 'Avatar Filters',
    description: 'Apply visual filters to enhance the appearance of avatars. Choose from "gray" for grayscale effect, "sepia" for a vintage look, or "invert" to invert the colors. The default filter is "none".',
    type: 'components',
    examples: [
      {
        component: Avatar,
        props: {
          image: image1,
          alt: 'Avatar',
          filter: 'gray',
        },
        code: [
          `<Avatar {image} alt="Avatar" {filter} />`,
        ],
      },
      {
        component: Avatar,
        props: {
          image: image2,
          alt: 'Avatar',
          filter: 'sepia',
        },
      },
      {
        component: Avatar,
        props: {
          image: image3,
          alt: 'Avatar',
          filter: 'invert',
        },
      }
    ],
  },
  {
    id: `avatar_props`,
    header: `Avatar Props`,
    type: 'table',
    table: {
      tableName: 'avatar',
      rows: [
        {
          name: 'avatar_image!',
          description: 'The URL of the avatar image. Provide the path to the image you want to display as the avatar.',
          type: '{string}',
          default: '\"\"',
          nav: true,
        },
        {
          name: 'avatar_alt!',
          description: 'The alternative text for the avatar image. This text is displayed when the image cannot be loaded or accessed by screen readers.',
          type: '{string}',
          default: '\"\"',
          nav: false,
        },
        {
          name: 'avatar_size',
          description: 'The size of the avatar. Choose from \"xsmall\", \"small\", \"medium\", \"large\", or \"xlarge\" to control the dimensions of the avatar.',
          type: '{"xsmall" | "small" | "medium" | "large" | "xlarge"}',
          default: '\"medium\"',
          nav: true,
        },
        {
          name: 'avatar_shape',
          description: 'The shape of the avatar. Select either \"circ\", \"rounded\", or \"square\" to define the border shape of the avatar.',
          type: '{"circ" | "rounded" | "square"}',
          default: '\"rounded\"',
          nav: true,
        },
        {
          name: 'avatar_filter',
          description: 'The filter applied to the avatar image. Apply visual effects such as \"gray\" for grayscale, \"sepia\" for a vintage look, or \"invert\" for an inverted color scheme.',
          type: '{"none" | "gray" | "sepia" | "invert"}',
          default: '\"none\"',
          nav: true,
        }],
    },
    examples: [
      {
        component: null,
        props: {
          image: '',
          alt: '',
        },
      },
    ],
  },
];