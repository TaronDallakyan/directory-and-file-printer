"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var directoryPath = './sourceDir';
function listFilesRecursive(dir) {
    var files = fs.readdirSync(dir);
    files.forEach(function (file) {
        var filePath = "".concat(dir, "/").concat(file);
        var stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            console.log('directory', stat);
        }
        else {
            console.log('file', stat);
        }
    });
}
var files = listFilesRecursive(directoryPath);
console.log(files);
