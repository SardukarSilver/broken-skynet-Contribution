const fs = require('fs')
const path = require("path")
const src = require('path').resolve(__dirname, '../..')


fs.readdir(src, { withFileTypes: true }, (error, files) => {
  const directoriesInDIrectory = files
      .filter((item) => item.isDirectory())
      .map((item) => item.name);

  console.log(directoriesInDIrectory);
});

// getDirectories(src)

console.log(src);
console.log(require('path').resolve(__dirname, '../..'))
// console.log(getDirectories)