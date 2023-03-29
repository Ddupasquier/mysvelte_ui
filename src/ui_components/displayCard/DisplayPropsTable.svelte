<script lang="ts">
  export let table: PropsTable | undefined;
  export let isDarkMode: boolean;
</script>

{#if table}
  <table>
    <thead>
      <tr>
        <th>Prop</th>
        <th>Description</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody style="color: {isDarkMode ? 'white' : 'black'}">
      {#each Object.keys(table.rows) as key (key)}
        <tr>
          <td
            class="left-col"
            style="color: {table.rows[key].name.includes('!')
              ? '#c50eff'
              : isDarkMode
              ? 'white'
              : 'black'}"
          >
            {#if table.rows[key].nav === true}
              <a
                href={`/components?items=${table.tableName}#${table.rows[
                  key
                ].name.replace("!", "")}`}
              >
                {table.rows[key].name.replace("!", "")}
              </a>
            {:else}
              {table.rows[key].name.replace("!", "")}
            {/if}
          </td>
          <td>
            {table.rows[key].description}
          </td>
          <td class="defaults">
            {table.rows[key].default}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="key">
    <span class="key-item">
      <span class="key-item-color" style="background-color: #c50eff" />
      <span class="key-item-text">Required</span>
    </span>
  </div>
{/if}

<style lang="scss">
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  th {
    text-align: left;
    padding: 0.5rem;
    border-bottom: 1px solid #e1e4e8;
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

  .left-col {
    font-weight: bold;
  }

  .defaults {
    font-style: italic;
    text-align: right;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }

  .key {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 1rem;
  }

  .key-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 0.5rem;
  }

  .key-item-color {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
</style>
