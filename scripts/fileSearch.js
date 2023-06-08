import fs from 'fs';
import path from 'path';

function findFilesWithoutString(directoryPath, searchString) {
    console.log(
        '\n\x1b[35m%s\x1b[0m',
        `***** Searching for files without '${searchString}' in ${directoryPath} *****\n`,
    );

    function traverseDirectory(dir) {
        const files = fs.readdirSync(dir);

        files.forEach((file) => {
            const filePath = path.join(dir, file);

            if (fs.statSync(filePath).isDirectory()) {
                traverseDirectory(filePath);
            } else if (path.extname(filePath) === '.ts' && path.basename(filePath) === 'constants.ts') {
                const fileContent = fs.readFileSync(filePath, 'utf8');

                if (!fileContent.includes(searchString)) {
                    console.log(`*** ${filePath} ***`);
                }
            }
        });
    }

    traverseDirectory(directoryPath);
}

const targetPath = process.argv[2];
const searchString = process.argv[3];
findFilesWithoutString(targetPath, searchString);

console.log('\n\x1b[31m%s\x1b[0m', `***** The '${searchString}' string was not found in the above files. *****\n`);
