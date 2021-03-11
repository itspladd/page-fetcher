const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

console.log(`Attempting to save ${url} contents to ${path}...`);
console.log(`******************`);

request(url, (error, response, body) => {
  if (error) {
    reportResults(path, url, error);
  } else {
    fs.writeFile(path, body, err => reportResults(path, url, err));
  }
});

const reportResults = (filePath, url, error) => {
  if (error) {
    if (error.code === "ENOENT") {
      console.log(`ERROR: ${filePath} is invalid. Directory probably doesn't exist.`);
    }
    if (error.code === "ENOTFOUND") {
      console.log(`ERROR: DNS lookup failed for ${url}. URL is probably invalid.`);
    }
    return false;
  }
  fs.stat(path, (err, stats) => {
    console.log(`Wrote ${stats.size} bytes to ${path}.`);
  });
}