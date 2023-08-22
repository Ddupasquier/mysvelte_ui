<script lang="ts">
  import DisplayCard from "../../ui_components/displayCard/DisplayCard.svelte";
  import { tables } from "../../../../docs/Table_docs";
  import Table from "$lib/tables/Table.svelte";

  let sampleColumns = ["ID", "Name", "Email", "Role"];
  let sampleRows = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice.smith@example.com",
      role: "User",
    },
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
    // ... (you can add more data as needed)
  ];
</script>

<h1>Tables</h1>

<h3>
  {"import { Table } from 'mysvelte-ui';"}
</h3>

<Table columns={sampleColumns} rows={sampleRows} />
{#each tables as table}
  <DisplayCard
    id={table.id}
    header={table.header}
    examples={table.examples}
    description={table.description}
    table={table.table}
    type={table.type}
  />
{/each}
