import { mkdir, access, writeFile, readFile } from 'fs/promises';
import { resolve, basename } from 'path';
import readline from 'readline';
import pluralize from 'pluralize';

let fileCreated = false;

export async function checkFileExists(componentPath) {
  if (fileCreated) {
    return;
  }

  try {
    await access(componentPath); // Check if component file exists
    await createDocumentationFile(componentPath); // if it exists, call createDocumentationFile
    fileCreated = true; // Set the flag to true after file is created
  } catch {
    // if it doesn't exist, wait for 1 second and check again
    setTimeout(() => checkFileExists(componentPath), 1000);
  }
}

export async function createDocumentationFile(componentPathInput) {
  const componentPath = componentPathInput;
  const pathComponents = componentPath.split(/[\\\/]/);
  const tempName = basename(pathComponents[pathComponents.length - 1]).split('.')[0];
  const componentName = tempName.charAt(0).toUpperCase() + tempName.slice(1).toLowerCase();
  const componentNameLower = componentName.toLowerCase();

  const docsPath = resolve('docs');
  const docFilePath = resolve(docsPath, `${componentName}_docs.ts`);

  try {
    await access(componentPath); // Check if component file exists
  } catch (err) {
    throw new Error(`Component file not found at ${componentPath}. Please check the path and try again.`);
  }

  try {
    await mkdir(docsPath, { recursive: true });

    try {
      await access(docFilePath);

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question('That file already exists. Would you like to completely overwrite the file? Or just update the props table? (full/props). You can cancel by pressing Ctrl+C. ', async (answer) => {
        rl.close();
        const componentContent = await readFile(componentPath, 'utf8');

        if (answer.toLowerCase() === 'full') {
          await createFile(docFilePath, generateTSCode(componentContent));
        } else if (answer.toLowerCase() === 'props') {
          const existingContent = await readFile(docFilePath, 'utf8');
          const updatedContent = existingContent.replace(/rows: \[\s*(\{[\s\S]*?\})?\s*\]/, `rows: [${generatePropRows(componentContent)}]`);
          await createFile(docFilePath, updatedContent);
        } else {
          console.log('Invalid response. Please enter either "full" or "props".');
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
      console.log('\x1b[32m%s\x1b[0m', 'YOU WILL NEED TO MANUALLY UPDATE THE NAVIGATION BOOLS AND THE REQUIRED FIELDS IN THE DOCS TEMPORARILY!');
      console.log('\x1b[33m%s\x1b[0m', 'To require a prop, add "!" to the end of the row name in the props table.');
      console.log('\x1b[33m%s\x1b[0m', 'The nav key determines whether or not the user is able to click the name to navigate to the usage summary.');
    } catch (err) {
      console.error(err);
    }
  }

  function escapeSpecialChars(str) {
    return str.replace(/[\\]/g, '\\\\')
      .replace(/[\/]/g, '\\/')
      .replace(/[\b]/g, '\\b')
      .replace(/[\f]/g, '\\f')
      .replace(/[\n]/g, '\\n')
      .replace(/[\r]/g, '\\r')
      .replace(/[\t]/g, '\\t')
      .replace(/[\"]/g, '\\"')
      .replace(/[\'']/g, '\\\'');
  }

  function generateTSCode(componentContent) {
    const commentBlock = componentContent.match(/\/\*\*([\s\S]*?)\*\//)?.[0];

    const propRows = commentBlock ? generatePropRows(componentContent) : [];

    const code = `import { ${componentName} } from '../src/lib';
  import type { ${componentName}DisplayData } from '../src/app.d.ts';

  export const ${pluralize(componentNameLower)}: ${componentName}DisplayData[] = [
    {
      id: \`${componentNameLower}_basics\`,
      header: '${componentName} Basics',
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
          ${propRows}
        ],
      },
      examples: null,
    },
  ];`;

    return code;
  }


  function generatePropRows(componentContent) {
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

    console.log(props);
    const propRows = props.map((prop) => {
      const { name, description, type, default: defaultValue } = prop;
      const escapedDescription = escapeSpecialChars(description);
      const escapedDefaultValue = escapeSpecialChars(defaultValue);
      return `{
    name: \`${componentNameLower}_${name}\`,
    description: '${escapedDescription}',
    type: '${type}',
    default: '${escapedDefaultValue}',
    nav: true,
  }`;
    });

    return propRows.join(',\n          ');
  }

}

// createDocumentationFile(process.argv[2])
checkFileExists(process.argv[2])

// usage example
// createDocumentationFile('./path/to/component.ts');
