<script>
  import DisplayCard from "../../../ui_components/displayCard/DisplayCard.svelte";
  import { textareas } from "../../../../docs/Textarea_docs";
</script>

<h1>Textareas</h1>

<h3>
  {"import { Textarea } from 'mysvelte-ui';"}
</h3>

{#each textareas as textarea}
  <DisplayCard
    id={textarea.id}
    header={textarea.header}
    examples={textarea.examples}
    description={textarea.description}
    table={textarea.table}
    type={textarea.type}
  />
{/each}
