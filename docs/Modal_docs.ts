import { Modal } from '../src/lib';
  import type { ModalDisplayData } from '../src/app.d.ts';

  export const modals: ModalDisplayData[] = [
    {
      id: `modal_basics`,
      header: 'Modal Basics',
      description: '',
      type: 'components',
      examples: [
        {
          component: Modal,
          props: {},
          code: [''],
        },
      ],
    },
    {
      id: `modal_props`,
      header: `Modal Props`,
      description: 'Modal Props',
      type: 'table',
      table: {
        tableName: 'modal',
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