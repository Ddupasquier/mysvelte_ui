import { Table } from '../src/lib';
  import type { TableDisplayData } from '../src/app.d.ts';

  export const tables: TableDisplayData[] = [
    {
      id: `table_basics`,
      header: 'Table Basics',
      description: '',
      type: 'components',
      examples: [
        {
          component: Table,
          props: {},
          code: [''],
        },
      ],
    },
    {
      id: `table_props`,
      header: `Table Props`,
      description: 'Table Props',
      type: 'table',
      table: {
        tableName: 'table',
        rows: [
          
        ],
      },
      examples: null,
    },
  ];