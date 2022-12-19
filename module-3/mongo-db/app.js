// mongo-db user password feESIVX1Rlv1bEwx

// mongodb+srv://Andy:feESIVX1Rlv1bEwx@cluster0.ics529r.mongodb.net/test

// mongodb+srv://Andy:<password>@cluster0.ics529r.mongodb.net/?retryWrites=true&w=majority
const mongoose = require("mongoose");
// dotenv для скрытого доступа к паролям и секретным данным через файл .env
const dotenv = require("dotenv");
dotenv.config();
const { DB_HOST } = process.env;
//обработка ошибки подключения к базе
mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database works!"))
  .catch((error) => {
    console.log(error.message), process.exit(1);
  });
