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
const fs = require("fs");
fs.readFile("./data.tx", "utf-8", (error, data) => {
  if (error) {
    console.error(error);
  }
  console.log(data);
});
