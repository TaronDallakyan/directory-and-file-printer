import * as fs from "fs";

const directoryPath: string = "./node_modules";

function logDirectoriesAndFiles(dir: string): void {
  function listFilesRecursive(currentDir: string, level: number): void {
    const files = fs.readdirSync(currentDir);
    const space = "    ".repeat(level);

    files.forEach((file) => {
      const filePath: string = `${currentDir}/${file}`;
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        console.log(space + "📁 " + file);
        listFilesRecursive(filePath, level + 1);
      } else {
        console.log(space + "📄 " + file);
      }
    });
  }

  listFilesRecursive(dir, 0);
}

logDirectoriesAndFiles(directoryPath);
