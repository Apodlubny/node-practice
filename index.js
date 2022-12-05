// Module 1
// const { getCurrentDate } = require("../node-practice/module-1/dateUtils");

// console.log(`current date ${getCurrentDate()}`);

// const Calc = require("calc-js").Calc;
// console.log(process.argv);
// const [, , a, b] = process.argv;
// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

// path module
// const path = require("path");

// console.log(path.resolve("dateUtils.js"));

// fs module
// const fs = require("fs");
// fs.readFile("./data.tx", "utf-8", (error, data) => {
//   if (error) {
//     console.error(error);
//   }
//   console.log(data);
// });

// Давайте напишем скрипт files.js, который будет читать текущий каталог и выводить его содержимое: имя файла, его размер и дату последнего изменения.
const fs = require("fs").promises;

fs.readdir(__dirname)
  .then((files) => {
    return Promise.all(
      files.map(async (filename) => {
        const stats = await fs.stat(filename);
        return {
          Name: filename,
          Size: stats.size,
          Date: stats.mtime,
        };
      })
    );
  })
  .then((result) => console.table(result));
