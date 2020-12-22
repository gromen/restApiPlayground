let fs = require("fs");
const FILE_NAME = "./assets/pies.json";

let pieRepo = {
  get: function (resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  },
  getById: function (id, resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      } else {
        const pieId = JSON.parse(data).find((pie) => pie.id == id);
        resolve(pieId);
      }
    });
  },
  search: function (searchObject, resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      } else {
        if (searchObject) {
          let pies = JSON.parse(data);
          pies = pies.filter(
            (p) => p.id === searchObject.id && p.name.toLowerCase().indexOf(searchObject.name.toLowerCase()) >= 0
          );
          resolve(pies);
        }
      }
    });
  },
};
module.exports = pieRepo;
