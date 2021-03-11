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
  fs.writeFile("./index.html", body, () => console.log("Done!"));
});