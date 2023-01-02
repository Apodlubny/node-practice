const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();


app.use(cors());
app.use(express.json());
//2.створюємо шлях до тимчасової папки temp за допомогою path (налаштування destination)
const tempDir = path.join(__dirname, "temp");
// console.log(tempDir);

//1. створюємо multer.config в який передаємо обєкт налаштувань зчитувань та збереження та  за допомогою методу diskStorage
const multerConfig = multer.diskStorage({
    destination: (req, file, cb) => {//відповідає за те в яку тимчасову папку зберігати файл
        cb(null, tempDir)
    },
    filename: (req, file, cb) => {//під яким імям зберігати файл в тимчасову папку

        cb(null, file.originalname);
    },
    limits: {//необовякове налаштування (filesize обмежує розмір файлу)
        filesize: 2048
    }

})

const {PORT=3000}= process.env;

app.post("/api/products", async(req, res)=>{

});


app.listen(PORT);

