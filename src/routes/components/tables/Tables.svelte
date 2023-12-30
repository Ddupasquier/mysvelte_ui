<script lang="ts">
  import DisplayCard from "../../ui_components/displayCard/DisplayCard.svelte";
  import { tables } from "../../../../docs/Table_docs";
  import { Table } from "$lib";

  const sampleColumns = ["ID", "Name", "Email", "Role"];
  const colors = [
    "#C50EFF", // --purple
    "#FF00D9", // --pink
    "#FF3579", // --salmon
    "#FF8C4C", // --orange
    "#FFC844", // --gold
    "#F9F871", // --yellow
  ];

  const getColor = (index: number) => {
    return colors[index % colors.length];
  };

  const createRow = (
    id: number,
    name: string,
    email: string,
    role: string,
    index: number
  ) => {
    return {
      id,
      name: { type: "text", text: name },
      email: {
        type: "link",
        text: email,
        url: `mailto:${email}`,
      },
      role: {
        type: "button",
        text: role,
        url: `https://www.google.com/search?q=${role}`,
        action: () => {
          alert(role);
        },
        props: {
          background: getColor(index),
          color: "#fff",
          size: "small",
        },
      },
    };
  };

  const names = [
    "Alice Smith",
    "John Doe",
    "Bob Johnson",
    "Charlie Brown",
    "Eve Martin",
    "Frank Ocean",
    "Grace Lee",
    "Hannah Baker",
    "Isaac Newton",
    "Jack Daniels",
    "Katherine Johnson",
    "Larry Page",
    "Mary Curie",
    "Nina Williams",
    "Oscar Wilde",
  ];
  const emails = names.map(
    (name) => `${name.split(" ").join(".").toLowerCase()}@example.com`
  );
  const roles = [
    "Admin",
    "User",
    "Editor",
    "Admin",
    "User",
    "Editor",
    "Admin",
    "User",
    "Editor",
    "Admin",
    "User",
    "Editor",
    "Admin",
    "User",
    "Editor",
  ];

  // Create the rows
  const sampleRows = names.map((name, index) =>
    createRow(index + 1, name, emails[index], roles[index], index)
  );

  const pagination = true;
  const rowsPerPage = 5;
</script>

<h1>Tables</h1>

<h3>
  {"import { Table } from 'mysvelte-ui';"}
</h3>

{#each tables as table}
  <DisplayCard
    id={table.id}
    header={table.header}
    description={table.description}
    table={table.table}
    type={table.type}
    columns={table.columns}
    rows={table.rows}
  />
{/each}

<DisplayCard
  id="table"
  header="Table"
  description="A table component that can be used to display data in a tabular format."
  table={undefined}
  type="tableComp"
  columns={sampleColumns}
  rows={sampleRows}
  {pagination}
  {rowsPerPage}
>
  <Table {pagination} rowsPerPage={5}>
    <Table.Head columns={sampleColumns} />
    {#each sampleRows as row, i}
      <Table.Row {row} index={i}>
        {#each Object.values(row) as value}
          <Table.Cell {value} />
        {/each}
      </Table.Row>
    {/each}
  </Table>
</DisplayCard>
