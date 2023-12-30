import type { TableDisplayData } from '../src/app.d.ts';

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
        background: "#fff",
        color: "red",
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
    description: 'Table Props',
    type: 'table',
    table: {
      tableName: 'table',
      rows: [

      ],
    },
  },
];