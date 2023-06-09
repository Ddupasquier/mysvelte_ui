import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import pluralize from 'pluralize';
import { exec } from 'child_process'; // add this import for executing scripts

// Get the component name from the command line argument
const componentName = process.argv[2];

// Capitalize the first letter of the component name
const componentUpper =
  componentName.charAt(0).toUpperCase() + componentName.slice(1);

// Convert the component name to lowercase
const componentLower = componentName.toLowerCase();

if (componentName) {
  console.log(`Creating a new component called ${componentName}`);
}

// Create a new directory for the component in the lib directory
const createLibComponent = async () => {
  mkdirSync(pluralize(`./src/lib/${componentLower}`));

  // Create a new Svelte file for the component in the new directory
  writeFileSync(
    `./src/lib/${pluralize(componentLower)}/${componentUpper}.svelte`,
    `<script lang="ts">
    // Imports\n// Props\n// Variables\n// Constants\n// Lifecycle Hooks\n// Functions\n// Reactive Statements\n// Refs
    </script>
    
    <h1>${componentName}</h1>
    
    <style lang="scss">
    
    </style>`
  );
};

await createLibComponent();

console.log(`Created a new component called ${componentName} in lib directory`);

const createRoutesComponent = async () => {
  // Create a new directory for the component in the routes directory
  mkdirSync(`./src/routes/components/${pluralize(componentLower)}`);

  // Create a new Svelte file and constants.ts for the component in the new directory
  writeFileSync(
    `./src/routes/components/${pluralize(componentLower)}/${pluralize(componentUpper)}.svelte`,
    `<script>
  import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
  import { ${pluralize(componentLower)}} from '../../../../docs/${componentName}_docs';
</script>

<h1>${pluralize(componentUpper)}</h1>

<h3>
  {"import { ${componentUpper} } from 'mysvelte-ui';"}
</h3>

{#each ${pluralize(componentLower)} as ${componentLower}}
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
};

await createRoutesComponent();

console.log(
  `Created a new component called ${componentName} in routes directory`,
  `Created a new constants.ts file for ${componentName} in routes directory`
);

// Add the component to the componentStore.ts file
const storePath = readFileSync('./src/stores/componentStore.ts', 'utf-8');

const addComponent = async () => {
  const lastImportIndex = storePath.lastIndexOf("constants';");
  const componentMappingStart = storePath.indexOf('componentMapping = {') + 'componentMapping = {'.length;

  const newImport = `\nimport { ${pluralize(componentLower)} } from '../routes/components/${pluralize(componentLower)}/constants';`;
  const addToComponentMapping = `\n  ${pluralize(componentLower)},`;

  const newContent =
    storePath.slice(0, lastImportIndex + "constants';".length) +
    newImport +
    storePath.slice(lastImportIndex + "constants';".length, componentMappingStart) +
    addToComponentMapping +
    storePath.slice(componentMappingStart, storePath.length);

  writeFileSync('./src/stores/componentStore.ts', newContent);
};

await addComponent();

console.log(`Added ${componentName} to componentStore.ts`);

// Add the component to the components/+page.svelte file
const pagePath = readFileSync('./src/routes/components/+page.svelte', 'utf-8');
const addToPage = async () => {
  const lastImport = pagePath.lastIndexOf("constants';");
  const lastSemicolon = pagePath.indexOf(';', lastImport);
  const componentsElseBlock = pagePath.lastIndexOf('{:else}');

  const newImport = `\nimport ${pluralize(componentUpper)} from './${pluralize(componentLower)}/${pluralize(componentUpper)}.svelte';`;

  const newIfElse = `{:else if items === '${pluralize(componentLower)}'}\n<${pluralize(componentUpper)} />\n`;

  const newContent =
    pagePath.slice(0, lastSemicolon + 1) +
    newImport +
    pagePath.slice(lastSemicolon + 1, componentsElseBlock) +
    newIfElse +
    pagePath.slice(componentsElseBlock);

  writeFileSync('./src/routes/components/+page.svelte', newContent);
};

await addToPage();

console.log(`Added ${componentName} to components/+page.svelte`);

// Add the component to the ./src/ui_components/constants.ts file
const constantsPath = readFileSync('./src/ui_components/constants.ts', 'utf-8');
const addToConstants = async () => {
  const firstBracket = constantsPath.indexOf('[');
  const newConstant = `\n  {\n    name: '${pluralize(componentUpper)}',\n    path: '?items=${pluralize(componentLower)}',\n },`;

  const newContent =
    constantsPath.slice(0, firstBracket + 1) +
    newConstant +
    constantsPath.slice(firstBracket + 1);

  writeFileSync('./src/ui_components/constants.ts', newContent);
};

await addToConstants();

console.log(`Added ${componentName} to ./src/ui_components/constants.ts`);

// Add new type to app.d.ts file
const appPath = readFileSync('./src/app.d.ts', 'utf-8');
const addToApp = async () => {
  // interface ParallaxDisplayData extends BaseDisplayData {
  // examples: ParallaxExample[];
  // }
  const newType = `\n\n// * ${componentUpper} TYPES\ninterface ${componentUpper}DisplayData extends BaseDisplayData {\n  examples: ${componentUpper}Example[];\n}`;

  const newContent = appPath + newType; // simply concatenate new content to the existing content

  writeFileSync('./src/app.d.ts', newContent);
};

await addToApp();

console.log(`Added ${componentName} to app.d.ts`);

// big green text console log component added to library
console.log(
  '\x1b[32m%s\x1b[0m', // green
  `${componentName} has been added to the library!`
);

// // Run create_doc.js with path to the created Component.svelte
// exec(`node create_doc.js -- src/lib/${pluralize(componentLower)}/${componentUpper}.svelte`, (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });

// console.log(
//   '\x1b[32m%s\x1b[0m', // green
//   `Documentation for ${componentName} has been created!`
// )