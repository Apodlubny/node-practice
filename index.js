// Module 1
// const { getCurrentDate } = require("../node-practice/module-1/dateUtils");

// console.log(`current date ${getCurrentDate()}`);

const Calc = require("calc-js").Calc;
console.log(process.argv);
const [, , a, b] = process.argv;
console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());
