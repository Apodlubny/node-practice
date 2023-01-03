const multer = require("multer");
const path = require("path");


const tempDir = path.join(__dirname, "../", "temp");

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

const upload = multer({
    storage: multerConfig,
});

module.exports = upload;