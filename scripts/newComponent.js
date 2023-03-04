import { mkdirSync, readFileSync, writeFileSync } from 'fs';

// Get the component name from the command line argument
const componentName = process.argv[2];
// first letter of the component name is capitalized
const componentUpper =
  componentName.charAt(0).toUpperCase() + componentName.slice(1);
const componentLower = componentName.toLowerCase();

if (componentName) {
  console.log(`Creating a new component called ${componentName}`);
}

// Create a new directory for the component in the lib directory
mkdirSync(`./src/lib/${componentLower}s`);

// Create a new Svelte file for the component in the new directory
writeFileSync(
  `./src/lib/${componentLower}s/${componentUpper}.svelte`,
  `<h1>${componentName}</h1>`
);

console.log(`Created a new component called ${componentName} in lib directory`);

// Create a new directory for the component in the routes directory
mkdirSync(`./src/routes/components/${componentLower}s`);

// Create a new Svelte file and constants.ts for the component in the new directory
writeFileSync(
  `./src/routes/components/${componentLower}s/${componentUpper}.svelte`,
  `<script>
  import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
  import { ${componentLower}s from './constants';
</script>

<h1>${componentUpper}s</h1>

<h3>
  {"import { ${componentUpper} } from 'mysvelte-ui';"}
</h3>

{#each ${componentLower}s as ${componentLower}}
  <DisplayCard
    id={${componentLower}.id}
    header={${componentLower}.header}
    examples={${componentLower}.examples}
    description={${componentLower}.description}
    table={${componentLower}.table}
    type={${componentLower}.type}
  />
{/each}`
);
writeFileSync(
  `./src/routes/components/${componentLower}s/constants.ts`,
  `import ${componentUpper} from '$lib/${componentLower}s/${componentUpper}.svelte';
  
  export const ${componentLower}s: ${componentUpper}DisplayData[] = []`
);

console.log(
  `Created a new component called ${componentName} in routes directory`,
  `Created a new constants.ts file for ${componentName} in routes directory`
);

// import store from '../stores/componentStore.ts'
// readFileSync(
//       `./src/routes/components/${componentLower}s/constants.ts`,
//       `import ${componentUpper} from '$lib/${componentLower}s/${componentUpper}.svelte';

// )

const store = readFileSync('./src/stores/componentStore.ts', 'utf-8');