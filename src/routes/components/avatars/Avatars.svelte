<script>
  import DisplayCard from "../../../ui_components/displayCard/DisplayCard.svelte";
  import { avatars } from "../../../../docs/Avatar_docs";
</script>

<h1>Avatars</h1>

<h3>
  {"import { Avatar } from 'mysvelte-ui';"}
</h3>

{#each avatars as avatar}
  <DisplayCard
    id={avatar.id}
    header={avatar.header}
    examples={avatar.examples}
    description={avatar.description}
    table={avatar.table}
    type={avatar.type}
  />
{/each}
