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
// const fs = require("fs").promises;

// fs.readdir(__dirname)
//   .then((files) => {
//     return Promise.all(
//       files.map(async (filename) => {
//         const stats = await fs.stat(filename);
//         return {
//           Name: filename,
//           Size: stats.size,
//           Date: stats.mtime,
//         };
//       })
//     );
//   })
//   .then((result) => console.table(result));

// Module 2
// *******************************************************
// Запуск сервера
// const http = require("http");

// const PORT = 8090;

// const requestHandler = (request, response) => {
//   if (request.url.indexOf("/home") >= 0) {
//     response.writeHead(200, { "Content-type": "text/json" });
//     return response.end('{ "url": "homepage" }');
//   }
//   response.writeHead(200, { "Content-type": "text/json" });
//   return response.end('{ "url": "other" }');
// };
// const server = http.createServer(requestHandler);
// server.listen(PORT, (err) => {
//   if (err) {
//     console.error("Error at server launch:", err);
//   }
//   console.log(`Server works at port ${PORT}`);
// });
// *******************************************************

// Server launch with Express
const express = require("express");

const app = express();
const PORT = 8081;
// основные команды
app.get("/home", (req, res) => {
  res.send("get request");
});
app.post("/home", (req, res) => {
  res.send("post request");
});
app.delete("/home", (req, res) => {
  res.send("delete request");
});
app.use("/home", (req, res) => {
  res.send("All commands request");
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error at server launch:", err);
  }
  console.log(`Server works at port ${PORT}`);
});
