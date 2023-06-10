import { mkdir, access, writeFile, readFile } from 'fs/promises';
import { resolve, basename } from 'path';
import readline from 'readline';
import pluralize from 'pluralize';

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
    // Matches the comment block above the props
    const commentMatch = componentContent.match(/\/\*\*[\s\S]*?\*\//g);

    // Initialize an empty array to hold propRows and props
    let propRows = [];
    let props = [];

    if (commentMatch) {
      const commentBlock = commentMatch[0];
      // Matches each prop description line
      const propMatches = commentBlock.match(/@type {(.*?)} (.*?) - (.*?), (.*?)(,|$)/gm);

      if (!propMatches) {
        throw new Error('No prop descriptions found in the comment block.');
      }

      propRows = propMatches.map((prop) => {
        const [full, type, name, description, defaultValue] = prop.match(/@type {(.*?)} (.*?) - (.*?), (.*?)(,|$)/);
        props.push({ type, name, description, defaultValue });
        const escapedDescription = escapeSpecialChars(description);
        const escapedDefaultValue = escapeSpecialChars(defaultValue);
        return `{
        name: \`${componentNameLower}_${name}\`,
        description: '${escapedDescription}',
        default: '${escapedDefaultValue}',
        nav: true,
      }`;
      });
    } else {
      throw new Error('No comment block found in the component file.');
    }

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
            ${propRows.join(',\n          ')}
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

}

createDocumentationFile(process.argv[2])

// usage example
// createDocumentationFile('./path/to/component.ts');