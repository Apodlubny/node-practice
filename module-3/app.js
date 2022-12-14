const express = require("express");

const products = require("./products");

const app = express();

// Если прийдет GET запрос на адрес /contacts, выполнить эту функцию
// *****************************************************************
// app.get("/contacts", (request, response) => {
//   console.log(request.url);
//   console.log(request.method);
//   console.log(request.headers);
//   response.send("<h2>Contacts page</h2>");
// });
// app.get("/", (request, response) => {
//   response.send("<h1>Home page</h1>");
// });
// *****************************************************************

// Обработка запроса из массива обьектов products
// app.get("/products", (req, res) => {
//   //   res.send(products);
//   // более правильно( для применения дополнительных настроек json например app.set("json spaces", 18), или правильной обработки null res.json(null) вернет null а res.json.send(null) вернет пустую страницу)
//   //   res.json(products);
//   res.json({
//     status: "success",
//     code: 200,
//     data: { result: products },
//   });
// });

// *****************************************************************

//  middlewares промежуточный обработчики
// next говорит о том что нужно искать дальше.
app.use((req, res, next) => {
  console.log("First middleware");
  next();
});
app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => console.log("Server running!"));
