const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const {v4} = require("uuid");

const app = express();


app.use(cors());
app.use(express.json());
//мідлвара для можливості отрімувати статичні файли з боку фронтенду
app.use(express.static("public"))
//2.створюємо шлях до тимчасової папки temp за допомогою path (налаштування destination)
const tempDir = path.join(__dirname, "temp");
// console.log(tempDir);
//6. створюємо шлях до папки public/products
const productsDir = path.join(__dirname, "public", "products");

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
//3. створюємо мідлвар і передаємо в ключ storage налаштування  multerConfig
const upload = multer({
    storage: multerConfig,
});
//5. створюємо змінну products для подальшої роботи з загруженим файлом
const products =[];

const {PORT=3000}= process.env;
 
//4. вказуємо мідлвару upload в роуті
app.post("/api/products", upload.single("image"), async(req, res)=>{
    // console.log(req.file)
//    fs.rename()
const {path: tempUpload, originalname} = req.file;
const resultUpload = path.join(productsDir, originalname);

// console.log(tempUpload);
// console.log(resultUpload);
try {
    await fs.rename(tempUpload, resultUpload);
    const image = path.join("products", originalname)
    const newProduct = {
        name: req.body.name,
        id: v4(),
        image
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
} catch (error) {
    await fs.unlink(tempUpload);
}
});

app.get("/api/products", async(req, res)=> {
    res.json(products);
})


app.listen(PORT);

