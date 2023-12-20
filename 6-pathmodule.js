const paths = require('path');

console.log(paths.sep);

const filePath = paths.join('/folder/', 'subfolder', 'hello.txt')
console.log(filePath)

const base = paths.basename(filePath)
console.log(base)

const absolute = paths.resolve(__dirname, 'folder', 'subfolder', 'hello.txt')
console.log(absolute)