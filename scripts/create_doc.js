import { mkdir, access, writeFile, readFile } from 'fs/promises';
import { resolve, basename } from 'path';

const componentPathArg = process.argv[2];

if (!componentPathArg) {
  console.error(
    'Usage: node scripts/create_doc.js <path-to-component.svelte>. Example: npm run createdoc -- src/lib/buttons/Button.svelte'
  );
  process.exit(1);
}

const generatedDir = resolve('docs/generated');

run(componentPathArg).catch((err) => {
  console.error(err);
  process.exit(1);
});

async function run(componentPath) {
  await ensureFile(componentPath);
  const { componentName, componentNameLower } = getNames(componentPath);
  const componentContent = await readFile(componentPath, 'utf8');
  const rows = generatePropRows(componentContent, componentNameLower);

  await mkdir(generatedDir, { recursive: true });
  const filePath = resolve(generatedDir, `${componentName}.props.ts`);
  const exportName = `${componentName}PropRows`;
  const fileContents = `// Auto-generated from ${componentPath} JSDoc. Do not edit by hand.
export const ${exportName} = [
${rows}
];
`;

  await writeFile(filePath, fileContents);
  console.log(`Props written to ${filePath} as ${exportName}`);
}

async function ensureFile(componentPath) {
  try {
    await access(componentPath);
  } catch {
    throw new Error(`Component file not found at ${componentPath}`);
  }
}

function getNames(componentPath) {
  const pathComponents = componentPath.split(/[\\\/]/);
  const tempName = basename(pathComponents[pathComponents.length - 1]).split('.')[0];
  const componentName = tempName.charAt(0).toUpperCase() + tempName.slice(1);
  const componentNameLower = componentName.toLowerCase();
  return { componentName, componentNameLower };
}

function escapeSpecialChars(str = '') {
  return str
    .replace(/[\\]/g, '\\\\')
    .replace(/[\/]/g, '\\/')
    .replace(/[\b]/g, '\\b')
    .replace(/[\f]/g, '\\f')
    .replace(/[\n]/g, '\\n')
    .replace(/[\r]/g, '\\r')
    .replace(/[\t]/g, '\\t')
    .replace(/[\"]/g, '\\"')
    .replace(/[\'']/g, "\\'");
}

function generatePropRows(componentContent, componentNameLower) {
  const commentBlock = componentContent.match(/\/\*\*([\s\S]*?)\*\//)?.[0];

  if (!commentBlock) {
    console.log('\x1b[31m%s\x1b[0m', 'No comment block found in the component file.');
    throw new Error('No comment block found in the component file.');
  }

  const commentBlockLines = commentBlock.split('\n');
  const propGroups = [];
  let propGroup = [];

  for (const line of commentBlockLines) {
    if (line.includes('@prop')) {
      if (propGroup.length !== 0) {
        propGroups.push(propGroup);
      }
      propGroup = [line];
    } else if (propGroup.length !== 0) {
      propGroup.push(line);
    }
  }

  if (propGroup.length !== 0) {
    propGroups.push(propGroup);
  }

  const props = propGroups.map((propGroup) => {
    const prop = {};

    for (const line of propGroup) {
      if (line.includes('@prop')) {
        prop.name = line.split('@prop')[1].trim();
      } else if (line.includes('@description')) {
        prop.description = line.split('@description')[1].trim();
      } else if (line.includes('@type')) {
        prop.type = line.split('@type')[1].trim();
      } else if (line.includes('@default')) {
        prop.default = line.split('@default')[1].trim();
      }
    }

    return prop;
  });

  const propRows = props.map((prop) => {
    const { name, description, type, default: defaultValue } = prop;
    const escapedDescription = escapeSpecialChars(description);
    const escapedDefaultValue = escapeSpecialChars(defaultValue);
    return `  {
    name: '${componentNameLower}_${name}',
    description: '${escapedDescription}',
    type: '${type}',
    default: '${escapedDefaultValue}',
    nav: true,
  }`;
  });

  return propRows.join(',\n');
}
