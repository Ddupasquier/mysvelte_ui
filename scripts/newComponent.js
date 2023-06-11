import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import pluralize from 'pluralize';
import { checkFileExists } from './create_doc.js';

// Get the component name from the command line argument
const componentName = process.argv[2];

// Check if componentName exists
if (!componentName) {
  console.error('Component name must be provided as a command line argument.');
  process.exit(1);
}

// Capitalize the first letter of the component name
const componentUpper =
  componentName.charAt(0).toUpperCase() + componentName.slice(1);

// Convert the component name to lowercase
const componentLower = componentName.toLowerCase();

console.log(`Creating a new component called ${componentName}`);

try {
  await createLibComponent();
  console.log(`Created a new component called ${componentName} in lib directory`);

  await createRoutesComponent();
  console.log(
    `Created a new component called ${componentName} in routes directory`,
  );

  await addComponent();
  console.log(`Added ${componentName} to componentStore.ts`);

  await addToPage();
  console.log(`Added ${componentName} to components/+page.svelte`);

  await addToConstants();
  console.log(`Added ${componentName} to ./src/ui_components/constants.ts`);

  await addComponentToIndexFile();
  console.log(`Added ${componentName} to the index.ts file`);

  await addToApp();
  console.log(`Added ${componentName} to app.d.ts`);

  console.log(
    '\x1b[32m%s\x1b[0m', // green
    `${componentName} has been added to the library!`
  );

  checkFileExists(`src/lib/${pluralize(componentLower)}/${componentName}.svelte`);

} catch (error) {
  console.error('An error occurred:', error);
}

async function createLibComponent() {
  try {
    const dir = `./src/lib/${pluralize(componentLower)}`;

    // Check if directory already exists
    if (existsSync(dir)) {
      console.error('Directory already exists. Please choose a different component name.');
      process.exit(1);
    }

    mkdirSync(dir);

    const filePath = `./src/lib/${pluralize(componentLower)}/${componentUpper}.svelte`;

    // Check if file already exists
    if (existsSync(filePath)) {
      console.error('File already exists. Please choose a different component name.');
      process.exit(1);
    }

    writeFileSync(filePath, `<script lang="ts">
      // Imports\n// Props\n// Variables\n// Constants\n// Lifecycle Hooks\n// Functions\n// Reactive Statements\n// Refs
      </script>
      
      <h1>${componentName}</h1>
      
      <style lang="scss">
      
      </style>`
    );

  } catch (error) {
    throw error;
  }
}

async function createRoutesComponent() {
  try {
    const dir = `./src/routes/components/${pluralize(componentLower)}`;

    // Check if directory already exists
    if (existsSync(dir)) {
      console.error('Directory already exists. Please choose a different component name.');
      process.exit(1);
    }

    mkdirSync(dir);

    const filePath = `./src/routes/components/${pluralize(componentLower)}/${pluralize(componentUpper)}.svelte`;

    // Check if file already exists
    if (existsSync(filePath)) {
      console.error('File already exists. Please choose a different component name.');
      process.exit(1);
    }

    writeFileSync(filePath, `<script>
      import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
      import { ${pluralize(componentLower)}} from '../../../../docs/${componentUpper}_docs';
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

  } catch (error) {
    throw error;
  }
}

async function addComponent() {
  try {
    const filePath = './src/stores/componentStore.ts';
    const fileContent = readFileSync(filePath, 'utf-8');

    const newImport = `\nimport { ${pluralize(componentLower)} } from '../../docs/${componentUpper}_docs';`;
    const addToComponentMapping = `\n  ${pluralize(componentLower)},`;

    const newContent = fileContent.replace("constants';", `constants';${newImport}`).replace('componentMapping = {', `componentMapping = {${addToComponentMapping}`);

    writeFileSync(filePath, newContent);

  } catch (error) {
    throw error;
  }
}

async function addToPage() {
  try {
    const filePath = './src/routes/components/+page.svelte';
    const fileContent = readFileSync(filePath, 'utf-8');

    const newImport = `\nimport ${pluralize(componentUpper)} from './${pluralize(componentLower)}/${pluralize(componentUpper)}.svelte';`;
    const newIfElse = `{:else if items === '${pluralize(componentLower)}'}\n<${pluralize(componentUpper)} />\n`;

    const updatedContent = fileContent.replace("import Cards from \"./cards/Cards.svelte\";", `import Cards from "./cards/Cards.svelte";${newImport}`).replace("{:else}", `${newIfElse}{:else}`);

    writeFileSync(filePath, updatedContent);

  } catch (error) {
    throw error;
  }
}

async function addToConstants() {
  try {
    const filePath = './src/ui_components/constants.ts';
    const fileContent = readFileSync(filePath, 'utf-8');

    const newConstant = `\n  {\n    name: '${pluralize(componentUpper)}',\n    path: '?items=${pluralize(componentLower)}',\n },`;

    const newContent = fileContent.replace('[', `[${newConstant}`);

    writeFileSync(filePath, newContent);

  } catch (error) {
    throw error;
  }
}

async function addComponentToIndexFile() {
  try {
    const filePath = './src/lib/index.ts';
    const fileContent = readFileSync(filePath, 'utf-8');

    const newComponentImport = `import ${componentUpper}Default from './${pluralize(componentLower)}/${componentUpper}.svelte';\n`;
    const newComponentExport = `export const ${componentUpper} = Object.assign(${componentUpper}Default, {});\n`;

    const newContent = `${fileContent}${newComponentImport}${newComponentExport}`;

    writeFileSync(filePath, newContent);

  } catch (error) {
    throw error;
  }
}

async function addToApp() {
  try {
    const filePath = './src/app.d.ts';
    const fileContent = readFileSync(filePath, 'utf-8');

    const newType = `\n\n// * ${componentUpper} TYPES\nexport interface ${componentUpper}DisplayData extends BaseDisplayData {\n  examples: ${componentUpper}Example[];\n}`;

    const newContent = `${fileContent}${newType}`;

    writeFileSync(filePath, newContent);

  } catch (error) {
    throw error;
  }
}
