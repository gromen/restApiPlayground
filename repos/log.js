let fs = require("fs");

const FILE_NAME = "./logs/log.txt";

let log = {
  write: function (data, resolve, reject) {
    let toWrite = `
    ${"*".repeat(80)}
      Date/Time: ${new Date().toLocaleDateString()}
      Exception Info: ${JSON.stringify(data)}
    ${"*".repeat(80)}
    `;

    fs.writeFile(FILE_NAME, toWrite, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  },
};

module.exports = log;
