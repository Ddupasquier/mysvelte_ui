import fs from 'fs';
import path from 'path';

function findFilesWithoutString(directoryPath, searchString) {
    // Check if searchString is defined
    if (!searchString) {
        console.error('\x1b[31m%s\x1b[0m', 'Error: Please provide a string to search for.\n');
        return;
    }

    // Check if the directory exists
    if (!fs.existsSync(directoryPath)) {
        console.error('\x1b[31m%s\x1b[0m', 'Error: The provided directory does not exist.\n');
        return;
    }

    // Check if the directory is actually a directory
    if (!fs.statSync(directoryPath).isDirectory()) {
        console.error('\x1b[31m%s\x1b[0m', 'Error: The provided path is not a directory.\n');
        return;
    }

    console.log(
        '\n\x1b[35m%s\x1b[0m',
        `***** Searching for files without '${searchString}' in ${directoryPath} *****\n`,
    );

    function traverseDirectory(dir) {
        let files;
        try {
            files = fs.readdirSync(dir);
        } catch (error) {
            console.error('\x1b[31m%s\x1b[0m', `Error reading the directory ${dir}: ${error}\n`);
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(dir, file);
            let stats;

            try {
                stats = fs.statSync(filePath);
            } catch (error) {
                console.error('\x1b[31m%s\x1b[0m', `Error getting stats of the file ${filePath}: ${error}\n`);
                return;
            }

            if (stats.isDirectory()) {
                traverseDirectory(filePath);
            } else if (path.extname(filePath) === '.ts') {
                let fileContent;
                try {
                    fileContent = fs.readFileSync(filePath, 'utf8');
                } catch (error) {
                    console.error('\x1b[31m%s\x1b[0m', `Error reading the file ${filePath}: ${error}\n`);
                    return;
                }

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

// Check if targetPath is defined
if (!targetPath) {
    console.error('\x1b[31m%s\x1b[0m', 'Error: Please provide a directory path.\n');
} else {
    findFilesWithoutString(targetPath, searchString);
}

console.log('\n\x1b[31m%s\x1b[0m', `***** The '${searchString}' string was not found in the above files. *****\n`);
