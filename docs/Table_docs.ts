import type { TableDisplayData } from '../src/app.d.ts';
import { Table } from '$lib'

const sampleColumns = ["ID", "Name", "Email", "Role"];
const sampleRows = [
  {
    id: 1,
    name: {
      type: "text",
      text: "Alice Smith",
    },
    email: {
      type: "link",
      text: "alice.smith@example.com",
      url: "mailto:alice.smith@example.com",
    },
    role: {
      type: "button",
      text: "Admin",
      url: "https://www.google.com/search?q=Admin",
      action: () => {
        alert("Admin");
      },
      props: {
        background: "#C50EFF",
        size: "small",
      },
    },
  },
  { id: 2, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "User",
  },
  {
    id: 4,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    role: "Editor",
  },
  {
    id: 5,
    name: "Eve Martin",
    email: "eve.martin@example.com",
    role: "Admin",
  },
  {
    id: 6,
    name: "Frank Ocean",
    email: "frank.ocean@example.com",
    role: "User",
  },
  {
    id: 7,
    name: "Grace Lee",
    email: "grace.lee@example.com",
    role: "Editor",
  },
  {
    id: 8,
    name: "Hannah Baker",
    email: "hannah.baker@example.com",
    role: "User",
  },
  {
    id: 9,
    name: "Isaac Newton",
    email: "isaac.newton@example.com",
    role: "Admin",
  },
  {
    id: 10,
    name: "Jack Daniels",
    email: "jack.daniels@example.com",
    role: "Editor",
  }
];

export const tables: TableDisplayData[] = [
  {
    id: `table_basics`,
    header: 'Table Basics',
    description: '',
    type: 'tableComp',
    columns: sampleColumns,
    rows: sampleRows
  },
  {
    id: `table_props`,
    header: `Table Props`,
    type: 'table',
    table: {
      tableName: 'table',
      rows: [{
        name: `table_rows!`,
        description: 'An array of row data to be displayed in the table.',
        type: '{any[]}',
        default: '[]',
        nav: true,
      },
      {
        name: `table_columns`,
        description: 'An array of column headers for the table.',
        type: '{string[]}',
        default: '[]',
        nav: true,
      },
      {
        name: `table_highlight`,
        description: 'A boolean value that determines if rows should be highlighted on hover.',
        type: '{boolean}',
        default: 'true',
        nav: true,
      },
      {
        name: `table_align`,
        description: 'Sets the text alignment for the cells of the table. Choose from \'left\', \'center\', or \'right\'.',
        type: '{"left" | "center" | "right"}',
        default: '\"left\"',
        nav: true,
      },
      {
        name: `table_border`,
        description: 'A boolean value that determines if the table should have borders or not.',
        type: '{boolean}',
        default: 'false',
        nav: true,
      },
      {
        name: `table_background`,
        description: 'Lets you personalize the table\'s background color with any valid CSS color.',
        type: '{string}',
        default: '\"rgba(250, 250, 250)\"',
        nav: true,
      },
      {
        name: `table_color`,
        description: 'Changes the color of the table\'s text. Use any valid CSS color.',
        type: '{string}',
        default: '\"#000\"',
        nav: true,
      },
      {
        name: `table_rowsPerPage`,
        description: 'Specifies the number of rows to be displayed per page when pagination is enabled. Set to null for displaying all rows on one page.',
        type: '{number | null}',
        default: 'null',
        nav: true,
      },
      {
        name: `table_pagination`,
        description: 'A boolean value that determines if the table should have pagination controls or not.',
        type: '{boolean}',
        default: 'false',
        nav: true,
      }],
    },
  },
];