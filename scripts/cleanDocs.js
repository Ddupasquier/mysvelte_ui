// * Turn foo={foo} to {foo} in all files in a directory

import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    const result = data.replace(/(\w+)=\{(\1)\}/g, '{$1}');

    fs.writeFileSync(filePath, result, 'utf8');
}

function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);

        if (fs.statSync(filePath).isDirectory()) {
            traverseDirectory(filePath);
        } else {
            replaceInFile(filePath);
        }
    });
}

const rootDir = process.argv[2];
traverseDirectory(rootDir);
