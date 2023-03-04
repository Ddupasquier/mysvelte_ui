import { mkdirSync, writeFileSync } from 'fs';

// Get the component name from the command line argument
const componentName = process.argv[2];
// first letter of the component name is capitalized
const componentUpper = componentName.charAt(0).toUpperCase() + componentName.slice(1);
const componentLower = componentName.toLowerCase();


if (componentName) {
      console.log(`Creating a new component called ${componentName}`);
}

// Create a new directory for the component
mkdirSync(`./src/lib/${componentUpper}s`);

// Create a new Svelte file for the component
writeFileSync(
  `./src/lib/${componentLower}s/${componentUpper}.svelte`,
  `<h1>${componentName}</h1>`
);

// Update the component store
// const storePath = './src/stores/componentStore.js';
// const componentStore = require(storePath);

// componentStore.push(componentName);

// writeFileSync(storePath, `module.exports = ${JSON.stringify(componentStore)}`);
