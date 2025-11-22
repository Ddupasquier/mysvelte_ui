import { Spacer } from '../src/lib';
import type { SpacerDisplayData } from '../src/app.d.ts';
import { SpacerPropRows } from './generated/Spacer.props';

export const spacers: SpacerDisplayData[] = [
  {
    id: 'spacer_basics',
    header: 'Spacer Basics',
    description:
      'Spacer inserts empty vertical space. Set height via style or by passing inline styles; defaults to zero height unless you define it.',
    type: 'components',
    examples: [
      {
        component: Spacer,
        props: { style: 'height: 1rem;' },
        code: '<Spacer style="height: 1rem;" />',
      },
      {
        component: Spacer,
        props: { style: 'height: 2rem; background: rgba(255,53,121,0.1);' },
        code: '<Spacer style="height: 2rem; background: rgba(255,53,121,0.1);" />',
      },
    ],
  },
  {
    id: `spacer_props`,
    header: `Spacer Props`,
    type: 'table',
    table: {
      tableName: 'spacer',
      rows: SpacerPropRows,
    },
    examples: null,
  },
];
