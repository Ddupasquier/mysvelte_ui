<script lang="ts">
  export let table: PropsTable | undefined;
</script>

{#if table}
  <table>
    <tbody>
      {#each Object.keys(table) as key}
        <tr>
          <td>{key}</td>
          <td>{table[key]}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

<style lang="scss">
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  td {
    padding: 0.5rem;
    border-bottom: 1px solid #e1e4e8;
  }

  td:last-child {
    border-right: 1px solid #e1e4e8;
  }

  td:first-child {
    border-left: 1px solid #e1e4e8;
  }

  tr:last-child td {
    border-bottom: 0;
  }

  tr:hover td {
    background-color: #f6f8fa;
  }
</style>
