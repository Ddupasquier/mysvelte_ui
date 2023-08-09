import { Loader } from '../src/lib';
import type { LoaderDisplayData } from '../src/app.d.ts';
import { loaderbounceicons, loaderBounceProps } from './LoaderBounceIcon_docs';

export const loaders: LoaderDisplayData[] = [
  {
    id: 'loader_basics',
    header: 'Loader',
    description:
      'A simple loader component. The props available are size, speed and color. \nThe size prop can be set to small, medium or large. The speed prop can be fast, medium, or slow. The color prop can be set to any valid CSS color value. \n(default size: medium, default color: #C50EFF, default speed: medium)',
    type: 'components',
    examples: [
      {
        component: Loader,
        props: {
          color: '#C50EFF',
          size: 'small',
        },
        code: [`<Loader {size} {color} {speed} />`],
      },
      {
        component: Loader,
        props: {
          color: '#FF00D9',
          size: 'medium',
        },
      },
      {
        component: Loader,
        props: {
          color: '#FF3579',
          size: 'large',
        },
      },
      {
        component: Loader,
        props: {
          color: '#FF8C4C',
          size: 'medium',
        },
      },
      {
        component: Loader,
        props: {
          color: '#FFC844',
          size: 'small',
        },
      },
    ],
  },
  {
    id: 'loader_elips',
    header: 'Loader.Elips',
    type: 'components',
    examples: [
      {
        component: Loader.Elips,
        props: {
          color: '#C50EFF',
          size: 'small',
        },
        code: [`<Loader.Elips {size} {color} {speed} />`],
      },
      {
        component: Loader.Elips,
        props: {
          color: '#FF00D9',
          size: 'medium',
        },
      },
      {
        component: Loader.Elips,
        props: {
          color: '#FF3579',
          size: 'large',
        },
      },
      {
        component: Loader.Elips,
        props: {
          color: '#FF8C4C',
          size: 'medium',
        },
      },
      {
        component: Loader.Elips,
        props: {
          color: '#FFC844',
          size: 'small',
        },
      },
    ],
  },
  {
    id: 'loader_progress',
    header: 'Loader.Progress',
    type: 'components',
    examples: [
      {
        component: Loader.Progress,
        props: {
          size: 'small',
        },
        code: [`<Loader.Progress {size} {color} {speed} />`],
      },
      {
        component: Loader.Progress,
        props: {
          color: '#FF00D9',
          size: 'medium',
        },
      },
      {
        component: Loader.Progress,
        props: {
          color: '#FF3579',
          size: 'large',
        },
      },
    ],
  },
  {
    id: 'loader_pie',
    header: 'Loader.Pie',
    type: 'components',
    examples: [
      {
        component: Loader.Pie,
        props: {
          size: 'small',
          color: '#C50EFF',
        },
        code: [`<Loader.Pie {size} {color} {speed} />`],
      },
      {
        component: Loader.Pie,
        props: {
          size: 'medium',
          color: '#FF00d9',
        },
      },
      {
        component: Loader.Pie,
        props: {
          size: 'large',
          color: '#FF3579',
        },
      },
      {
        component: Loader.Pie,
        props: {
          size: 'medium',
          color: '#FF8C4C',
        },
      },
      {
        component: Loader.Pie,
        props: {
          size: 'small',
          color: '#FFC700',
        },
      }
    ],
  },
  {
    id: `loader_props`,
    header: `Loader Props`,
    type: 'table',
    table: {
      tableName: 'loader',
      rows: [{
        name: `loader_color`,
        description: 'Choose the color of the loader. This should be in a recognized color format, such as hex code.',
        type: '{string}',
        default: '\"#C50EFF\"',
        nav: true,
      },
      {
        name: `loader_size`,
        description: 'Choose the size of the loader. You have options from \"small\" up to \"large\", with \"medium\" in between.',
        type: '{"small" | "medium" | "large"}',
        default: '\"medium\"',
        nav: true,
      },
      {
        name: `loader_style`,
        description: 'Apply additional inline CSS styles to the loader.',
        type: '{string}',
        default: '\"\"',
        nav: true,
      },
      {
        name: `loader_speed`,
        description: 'Choose the speed of the loader. You have options from \"fast\" up to \"slow\", with \"medium\" in between.',
        type: '{"fast" | "medium" | "slow"}',
        default: '\"medium\"',
        nav: true,
      }],
    },
    examples: [
      {
        component: null,
        props: {},
      },
    ],
  },
  loaderbounceicons,
  loaderBounceProps,
];