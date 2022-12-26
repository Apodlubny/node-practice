// 2. создаем auth.js в папке routes
//3. копируем миддлвары и создаем роутер

const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { auth: ctrl} = require("../../controllers")

const router = express.Router();

// 5. прописываем роуты

router.post("/register", ctrlWrapper(ctrl.register))
module.exports = router;