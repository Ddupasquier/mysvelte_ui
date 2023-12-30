import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import pluralize from 'pluralize';
import { checkFileExists } from './create_doc.js';

const componentName = process.argv[2];

if (!componentName) {
  console.error('Component name must be provided as a command line argument.');
  process.exit(1);
}

const componentUpper = componentName.charAt(0).toUpperCase() + componentName.slice(1);
const componentLower = componentName.toLowerCase();

const paths = {
  libComponentDir: `./src/lib/${pluralize(componentLower)}`,
  routesComponentDir: `./src/routes/components/${pluralize(componentLower)}`,
  componentStore: './src/stores/componentStore.ts',
  page: './src/routes/components/+page.svelte',
  constants: './src/routes/constants.ts',
  index: './src/lib/index.ts',
  app: './src/app.d.ts'
};

const templates = {
  libComponent: `<script lang="ts">
    // Imports\n// Props\n// Variables\n// Constants\n// Lifecycle Hooks\n// Functions\n// Reactive Statements\n// Refs
    </script>
    
    <h1>${componentName}</h1>
    
    <style lang="scss">
    
    </style>`,
  routesComponent: `<script>
    import DisplayCard from '../../ui_components/displayCard/DisplayCard.svelte';
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
    {/each}`,

  componentStoreImport: `\nimport { ${pluralize(componentLower)} } from '../../docs/${componentUpper}_docs';`,
  componentStoreMapping: `\n  ${pluralize(componentLower)},`,

  pageImport: `\nimport ${pluralize(componentUpper)} from './${pluralize(componentLower)}/${pluralize(componentUpper)}.svelte';`,
  pageIfElse: `{:else if items === '${pluralize(componentLower)}'}\n<${pluralize(componentUpper)} />\n`,

  constantsNewConstant: `\n  {\n    name: '${pluralize(componentUpper)}',\n    path: '?items=${pluralize(componentLower)}',\n },`,

  indexComponentImport: `\n \/\/ * ${componentName.toUpperCase()} \n \n import ${componentUpper}Default from './${pluralize(componentLower)}/${componentUpper}.svelte';\n`,
  indexComponentExport: `\n export const ${componentUpper} = Object.assign(${componentUpper}Default, {});\n`,

  appNewType: `\n\n// * ${componentUpper} TYPES\nexport interface ${componentUpper}DisplayData extends BaseDisplayData {\n  examples: ${componentUpper}Example[];\n}`
};

async function main() {
  try {
    console.log(`Creating a new component called ${componentName}`);
    await createDirectory(paths.libComponentDir);
    await createDirectory(paths.routesComponentDir);
    await createFile(paths.libComponentDir, componentUpper, templates.libComponent);
    await createFile(paths.routesComponentDir, pluralize(componentUpper), templates.routesComponent);
    await updateComponentStore(paths.componentStore, componentUpper, componentLower);
    await updatePage(paths.page, componentUpper, componentLower);
    await updateConstants(paths.constants, componentUpper, componentLower);
    await updateIndex(paths.index, componentUpper, componentLower);
    await updateApp(paths.app, componentUpper);
    console.log('\x1b[32m%s\x1b[0m', `${componentName} has been added to the library!`);
    checkFileExists(`src/lib/${pluralize(componentLower)}/${componentName}.svelte`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

const createDirectory = async (dirPath) => {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath);
  }
};

const createFile = async (dirPath, fileName, content) => {
  const filePath = `${dirPath}/${fileName}.svelte`;
  if (!existsSync(filePath)) {
    writeFileSync(filePath, content);
  }
};

const updateComponentStore = async (filePath, componentName, componentLower) => {
  const fileContent = readFileSync(filePath, 'utf-8');
  const newImport = `\nimport { ${pluralize(componentLower)} } from '../../docs/${componentName}_docs';`;
  const addToComponentMapping = `\n  ${pluralize(componentLower)},`;

  const newContent = fileContent.replace("constants';", `constants';${newImport}`)
    .replace('componentMapping = {', `componentMapping = {${addToComponentMapping}`);
  writeFileSync(filePath, newContent);
};

const updatePage = async (filePath, componentName, componentLower) => {
  const fileContent = readFileSync(filePath, 'utf-8');
  const newImport = `\nimport ${pluralize(componentName)} from './${pluralize(componentLower)}/${pluralize(componentName)}.svelte';`;
  const newIfElse = `{:else if items === '${pluralize(componentLower)}'}\n<${pluralize(componentName)} />\n`;

  const updatedContent = fileContent.replace("import Cards from \"./cards/Cards.svelte\";", `import Cards from "./cards/Cards.svelte";${newImport}`)
    .replace("{:else}", `${newIfElse}{:else}`);
  writeFileSync(filePath, updatedContent);
};

const updateConstants = async (filePath, componentName, componentLower) => {
  const fileContent = readFileSync(filePath, 'utf-8');
  const newConstant = `\n  {\n    name: '${pluralize(componentName)}',\n    path: '?items=${pluralize(componentLower)}',\n },`;

  const newContent = fileContent.replace('[', `[${newConstant}`);
  writeFileSync(filePath, newContent);
};

const updateIndex = async (filePath, componentName, componentLower) => {
  const fileContent = readFileSync(filePath, 'utf-8');
  const newComponentImport = `import ${componentName}Default from './${pluralize(componentLower)}/${componentName}.svelte';\n`;
  const newComponentExport = `export const ${componentName} = Object.assign(${componentName}Default, {});\n`;

  const newContent = `${fileContent}${newComponentImport}${newComponentExport}`;
  writeFileSync(filePath, newContent);
};

const updateApp = async (filePath, componentName) => {
  const fileContent = readFileSync(filePath, 'utf-8');
  const newType = `\n\n// * ${componentName} TYPES\nexport interface ${componentName}DisplayData extends BaseDisplayData {\n  examples: ${componentName}Example[];\n} | null`;

  const newContent = `${fileContent}${newType}`;
  writeFileSync(filePath, newContent);
};

main();
