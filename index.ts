import * as fs from "fs";

const directoryPath: string = './sourceDir'

function listFilesRecursive(dir: string): void {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath: string = `${dir}/${file}`;
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      console.log('directory', stat);
    } else {
      console.log('file', stat);
    }
  });
}

const files = listFilesRecursive(directoryPath);
console.log(files);