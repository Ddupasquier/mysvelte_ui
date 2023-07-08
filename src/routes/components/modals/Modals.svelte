<script>
  import DisplayCard from "../../ui_components/displayCard/DisplayCard.svelte";
  import { modals } from "../../../../docs/Modal_docs";
</script>

<h1>Modals</h1>

<h3>
  {"import { Modal } from 'mysvelte-ui';"}
</h3>

{#each modals as modal}
  <DisplayCard
    id={modal.id}
    header={modal.header}
    examples={modal.examples}
    description={modal.description}
    table={modal.table}
    type={modal.type}
  />
{/each}
