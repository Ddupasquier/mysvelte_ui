import { mkdir, access, writeFile, readFile } from 'fs/promises';
import { resolve, basename } from 'path';
import readline from 'readline';

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error('Usage: node create_doc.js -- componentPath');
  console.log('Remember to use forward slashes ("/") in your path, even on Windows.');
  process.exit(1);
}

const componentPath = args[0];
const pathComponents = componentPath.split(/[\\\/]/);
const componentName = basename(pathComponents[pathComponents.length - 1]).split('.')[0];

const docsPath = resolve('docs');
const docFilePath = resolve(docsPath, `${componentName}_docs.ts`);

try {
  await access(componentPath);
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
        await createFile(docFilePath, `\`${componentContent}\``);
      }
    });
  } catch {
    const componentContent = await readFile(componentPath, 'utf8');
    await createFile(docFilePath, `\`${componentContent}\``);
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
