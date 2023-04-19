import { Avatar } from '$lib';

const image1 = 'https://images.unsplash.com/photo-1681052027179-5471edd589c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
const image2 = 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
const image3 = 'https://images.unsplash.com/photo-1492447046925-35d93a19f006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';

export const avatars: AvatarDisplayData[] = [
  {
    id: 'avatar_basics',
    header: 'Avatar Basics',
    description: 'Avatars are used to represent a person or entity. They can be used in a variety of places, including lists and tables. Avatars can be either images or icons.',
    type: 'components',
    examples: [
      {
        component: Avatar,
        props: {
          image: image1,
          alt: 'Avatar',
        },
        code: [
          `<Avatar image={image} alt="Avatar" />`,
        ],
      },
    ],
  },
  {
    id: 'avatar_image',
    header: 'Avatar Image',
    description: 'Simple as passing in your src string!',
    type: 'components',
    examples: [
      {
        component: Avatar,
        props: {
          image: image1,
          alt: 'Avatar',
        },
        code: [
          `<Avatar image={image} alt="Avatar" />`,
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
    description: 'Avatars can be small, medium, or large.',
    type: 'components',
    examples: [
      {
        component: Avatar,
        props: {
          image: image1,
          alt: 'Avatar',
          size: 'small',
        },
        code: [
          `<Avatar image={image} alt="Avatar" size="small" />`,
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
          alt: 'Avatar',
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
    ],
  },
  {
    id: 'avatar_shape',
    header: 'Avatar Shape',
    description: 'Avatars can be square || rounded || circ. (default: rounded)',
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
          `<Avatar image={image} alt="Avatar" shape={shape} />`,
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
    description: 'Avatars can be filtered to grayscale, sepia, or invert. (default: none)',
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
          `<Avatar image={image} alt="Avatar" filter={filter} />`,
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
    id: 'avatar_props',
    header: 'Avatar Props',
    description: 'Here\'s a breakdown of the props you can pass into the Avatar component.',
    type: 'table',
    table: {
      tableName: 'avatars',
      rows: [
        {
          name: 'avatar_image!',
          description: 'The image source for the avatar.',
          default: '""',
          nav: true
        },
        {
          name: 'button_alt!',
          description: 'The alt text for the avatar.',
          default: '""',
          nav: false
        },
        {
          name: 'avatar_size',
          description: 'The size prop determines the size of the avatar. It can be "small", "medium", or "large".',
          default: '"medium"',
          nav: true
        },
        {
          name: 'avatar_shape',
          description: 'The shape of the avatar can be "square", "rounded", or "circ".',
          default: '"rounded"',
          nav: true
        },
        {
          name: 'avatar_filter',
          description: 'The filter prop determines the filter applied to the avatar. It can be "gray", "sepia", or "invert".',
          default: '"none"',
          nav: true
        },
      ]
    },
    examples: [
      {
        component: null,
        props: {
          image: image1,
          alt: 'Avatar',
        },
      },
    ],
  }
]