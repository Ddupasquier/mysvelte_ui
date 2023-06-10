import { Textarea } from '../src/lib';
  import type { TextareaDisplayData } from '../src/app.d.ts';

  export const textareas: TextareaDisplayData[] = [
    {
      id: `textarea_basics`,
      header: 'Textarea Basics',
      description: '',
      type: 'components',
      examples: [
        {
          component: Textarea,
          props: {},
          code: [''],
        },
      ],
    },
    {
      id: `textarea_props`,
      header: `Textarea Props`,
      description: 'Textarea Props',
      type: 'table',
      table: {
        tableName: 'textarea',
        rows: [
          
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