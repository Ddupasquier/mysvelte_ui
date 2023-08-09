<script lang="ts">
  import type { PropsTable } from "../../../app";

  export let table: PropsTable | undefined;
  export let isDarkMode: boolean;

  function handleAnchorClick(event: {
    preventDefault: () => void;
    currentTarget: any;
  }) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    window.scrollTo({
      top: anchor?.offsetTop,
      behavior: "smooth",
    });
  }

  const getStringAfterFirstUnderscore = (str: string): string => {
    const underscoreIndex = str.indexOf("_");
    return str.substring(underscoreIndex + 1);
  };

  $: textColor = isDarkMode ? "#fff" : "#000";
</script>

{#if table}
  <table>
    <thead>
      <tr>
        <th style="color: {textColor}">Prop</th>
        <th style="color: {textColor}">Description</th>
        <th style="color: {textColor}" class="default-head">Default</th>
      </tr>
    </thead>
    <tbody style="color: {textColor}">
      {#each Object.keys(table.rows) as key (key)}
        <tr>
          <td
            class="left-col"
            style="color: {table.rows[key].name.includes('!')
              ? '#C50EFF'
              : textColor}"
          >
            {#if table.rows[key].nav === true}
              <a
                href={`/components?items=${table.tableName}#${table.rows[
                  key
                ].name.replace("!", "")}`}
                on:click={handleAnchorClick}
              >
                {getStringAfterFirstUnderscore(
                  table.rows[key].name.replace("!", "")
                )}
              </a>
            {:else}
              {getStringAfterFirstUnderscore(
                table.rows[key].name.replace("!", "")
              )}
            {/if}
          </td>
          <td>
            {@html table.rows[key].description}
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
      <span class="key-item-color" style="background-color: #C50EFF" />
      <span style="color: {textColor}" class="key-item-text">Required</span>
    </span>
  </div>
{/if}

<style lang="scss">
  @use "src/routes/breakpoints.scss" as breakpoints;
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

  .default-head {
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
    border-radius: 3px;
  }

  @media screen and (max-width: breakpoints.$sm-mobile-breakpoint) {
    table {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: breakpoints.$xs-mobile-breakpoint) {
    .defaults,
    .default-head {
      display: none;
    }
  }
</style>
