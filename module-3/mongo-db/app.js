const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
// dotenv для скрытого доступа к паролям и секретным данным через файл .env
// variant 1
// const dotenv = require("dotenv");
// dotenv.config();
// variant 2
require("dotenv").config();
const { DB_HOST, PORT = 3000 } = process.env;
const productsRouter = require("./routes/api/products");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productsRouter);

//обработка ошибки подключения к базе
mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .catch((error) => {
    console.log(error.message), process.exit(1);
  });
