import { mkdirSync, readFileSync, writeFileSync } from 'fs';

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
const creatLibComponent = async () => {
  mkdirSync(`./src/lib/${componentLower}s`);

  // Create a new Svelte file for the component in the new directory
  writeFileSync(
    `./src/lib/${componentLower}s/${componentUpper}.svelte`,
    `<h1>${componentName}</h1>`
  );
};

await creatLibComponent();

console.log(`Created a new component called ${componentName} in lib directory`);

const createRoutesComponent = async () => {
  // Create a new directory for the component in the routes directory
  mkdirSync(`./src/routes/components/${componentLower}s`);

  // Create a new Svelte file and constants.ts for the component in the new directory
  writeFileSync(
    `./src/routes/components/${componentLower}s/${componentUpper}s.svelte`,
    `<script>
  import DisplayCard from '../../../ui_components/displayCard/DisplayCard.svelte';
  import { ${componentLower}s} from './constants';
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
};

await createRoutesComponent();

console.log(
  `Created a new component called ${componentName} in routes directory`,
  `Created a new constants.ts file for ${componentName} in routes directory`
);

// Add the component to the componentStore.ts file
const storePath = readFileSync('./src/stores/componentStore.ts', 'utf-8');

const addComponent = async () => {
  const lastImport = storePath.lastIndexOf("constants';");
  const lastSemicolon = storePath.indexOf(';', lastImport);
  const componentsArr = storePath.lastIndexOf('[];');

  const newImport = `\nimport { ${componentLower}s } from '../routes/components/${componentLower}s/constants';`;

  const addToComponents = `\n${componentLower}s.forEach((${componentLower}) => {
    componentIds.push(\`\${${componentLower}.id}_${componentLower}\`);
  });`;

  const newContent =
    storePath.slice(0, lastSemicolon + 1) +
    newImport +
    storePath.slice(lastSemicolon + 1, componentsArr + 3) +
    addToComponents +
    storePath.slice(componentsArr + 3);

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

  const newImport = `\nimport ${componentUpper}s from './${componentLower}s/${componentUpper}s.svelte';`;

  const newIfElse = `{:else if items === '${componentLower}s'}\n<${componentUpper}s />\n`;

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
  const newConstant = `\n  {\n    name: '${componentUpper}s',\n    path: '?items=${componentLower}s',\n },`;

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
  const bottomOfFile = appPath.lastIndexOf('}');
  const newType = `\n\n// * ${componentUpper} TYPES\ninterface ${componentUpper}DisplayData {\n  id: string;\n  header: string;\n  examples: string[];\n  description: string;\n  table: string[][];\n  type: string;\n}`;

  const newContent =
    appPath.slice(0, bottomOfFile) + newType + appPath.slice(bottomOfFile);

  writeFileSync('./src/app.d.ts', newContent);
};

await addToApp();

console.log(`Added ${componentName} to app.d.ts`);
// big green text console log component added to library
console.log(
  '\x1b[32m%s\x1b[0m', // green
  `${componentName} has been added to the library!`
);
