import { Loader } from '$lib';

export const loaders: LoaderDisplayData[] = [
  {
    id: 'loader',
    header: 'Loader',
    description: 'A simple loader component',
    type: 'components',
    examples: [
      {
        component: Loader,
        props: {
          color: '#c50eff',
        },
        code: [
          `<Loader size={size} />`,
        ],
      },
      {
        component: Loader,
        props: {
          color: '#ff00d9',
        },
      },
      {
        component: Loader,
        props: {
          color: '#FF3579',
        },
      },
      {
        component: Loader,
        props: {
          color: '#FF8C4C',
        },
      },
      {
        component: Loader,
        props: {
          color: '#FFC844',
        },
      }
    ],
  },
  {
    id: 'loader-elips',
    header: 'Loader Elips',
    description: 'A simple loader component',
    type: 'components',
    examples: [
      {
        component: Loader.Elips,
        props: {
          color: '#c50eff',
        },
        code: [
          `<Loader.Elips size={size} />`,
        ],
      },
      {
        component: Loader.Elips,
        props: {
          color: '#ff00d9',
        },
      },
      {
        component: Loader.Elips,
        props: {
          color: '#FF3579',
        },
      },
      {
        component: Loader.Elips,
        props: {
          color: '#FF8C4C',
        },
      },
      {
        component: Loader.Elips,
        props: {
          color: '#FFC844',
        },
      }
    ],
  },
  {
    id: 'loader-bounce-icon',
    header: 'Loader Bounce Icon',
    description: 'A simple loader component',
    type: 'components',
    examples: [
      {
        component: Loader.BounceIcon,
        props: {
          color: '#c50eff',
        },
        code: [
          `<Loader.BounceIcon size={size} />`,
        ],
      },
    ],
  },
  {
    id: 'loader-roll',
    header: 'Loader Roll',
    description: 'A simple loader component',
    type: 'components',
    examples: [
      {
        component: Loader.Roll,
        props: {},
        code: [
          `<Loader.Roll size={size} />`,
        ],
      },
    ],
  },
];

