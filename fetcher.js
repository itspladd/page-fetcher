const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

console.log(`Attempting to save ${url} contents to ${path}`);

request(url, (error, response, body) => {
  console.log(error);
  console.log("*******************");
  //console.log(response);
  console.log("*******************");
  fs.writeFile(path, body, err => reportResults(path, err));
});

const reportResults = (filePath, error) => {
  if (error) {
    if (error.code = "ENOENT") {
      console.log(`ERROR: ${filePath} does not exist`);
    }

    return false;
  }
  fs.stat(path, (err, stats) => {
    console.log(`Wrote ${stats.size} bytes to ${path}.`);
  });
}