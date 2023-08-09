<script>
  import DisplayCard from "../../ui_components/displayCard/DisplayCard.svelte";
  import { loaders } from "../../../../docs/Loader_docs";
</script>

<h1>Loaders</h1>

<h3>
  {"import { Loader } from 'mysvelte-ui';"}<br />
  [.Elips, .BounceIcon, .Pie, .Progress]
</h3>

{#each loaders as loader}
  <DisplayCard
    id={loader.id}
    header={loader.header}
    examples={loader.examples}
    description={loader.description}
    table={loader.table}
    type={loader.type}
  />
{/each}
