<script>
  import CodeBlock from '$lib/CodeBlock.svelte';
  import { buttons } from './constants';

  // * Required props for CodeBlock
  //  code, header, examples, description
</script>

<h1>Buttons</h1>

{#each buttons as button}
  <CodeBlock
    code={button.code}
    header={button.header}
    examples={button.examples}
    description={button.description}
  />
{/each}