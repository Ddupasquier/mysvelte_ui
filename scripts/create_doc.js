import { mkdir, access, writeFile, readFile } from 'fs/promises';
import { resolve, basename } from 'path';
import readline from 'readline';
import pluralize from 'pluralize';


const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error('Usage: node create_doc.js componentPath');
  console.log('Remember to use forward slashes ("/") in your path, even on Windows.');
  process.exit(1);
}

const componentPath = args[0];
const pathComponents = componentPath.split(/[\\\/]/);
const componentName = basename(pathComponents[pathComponents.length - 1]).split('.')[0];
const componentNameLower = componentName.toLowerCase();

const docsPath = resolve('docs');
const docFilePath = resolve(docsPath, `${componentName}_docs.ts`);

try {
  await access(componentPath); // Check if component file exists
} catch(err) {
  console.error(`Component file not found at ${componentPath}. Please check the path and try again.`);
  process.exit(1);
}

try {
  await mkdir(docsPath, { recursive: true });

  try {
    await access(docFilePath);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('File already exists. Do you want to overwrite it? (Y/n) ', async (answer) => {
      rl.close();
      
      if (answer.toLowerCase() === 'y') {
        const componentContent = await readFile(componentPath, 'utf8');
        await createFile(docFilePath, generateTSCode(componentContent));
      }
    });
  } catch {
    const componentContent = await readFile(componentPath, 'utf8');
    await createFile(docFilePath, generateTSCode(componentContent));
  }
} catch (err) {
  console.error(err);
}

async function createFile(path, content) {
  try {
    await writeFile(path, content);
    console.log(`Created documentation file for ${componentName} at ${path}`);
  } catch(err) {
    console.error(err);
  }
}

function generateTSCode(componentContent) {
  // Matches the comment block above the props
  const commentMatch = componentContent.match(/\/\*\*[\s\S]*?\*\//g);

  if (!commentMatch) {
    console.error('No comment block found above the props in the component file.');
    process.exit(1);
  }

  const commentBlock = commentMatch[0];
  // Matches each prop description line
  const propMatches = commentBlock.match(/@type {(.*?)} (.*?) - (.*?), "(.*?)"$/gm);

  if (!propMatches) {
    console.error('No prop descriptions found in the comment block.');
    process.exit(1);
  }

  const propRows = propMatches.map((prop) => {
    const [full, type, name, description, defaultValue] = prop.match(/@type {(.*?)} (.*?) - (.*?), "(.*?)"$/);
    return `{
      name: \`${name}\`,
      description: '${description}',
      default: '${defaultValue}',
      nav: true,
    }`;
  });

  const code = `import { ${componentName} } from '$lib';

  export const ${pluralize(componentNameLower)} = ${componentName}DisplayData[] = [
  {
    id: \`${componentNameLower}_basics\`,
    header: ${componentName},
    description: '',
    type: 'components',
    examples: [
      {
        component: ${componentName},
        props: {},
        code: [''],
      },
    ],
  },
  {
    id: \`${componentNameLower}_props\`,
    header: \`${componentName} Props\`,
    description: '${componentName} Props',
    type: 'table',
    table: {
      tableName: '${componentNameLower}',
      rows: [
        ${propRows.join(',\n        ')}
      ],
    },
    examples: [
      {
        component: null,
        props: {},
      },
    ],
  },
];`;

  return code;
}
