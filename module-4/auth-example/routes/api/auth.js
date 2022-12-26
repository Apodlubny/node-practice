// 2. создаем auth.js в папке routes
//3. копируем миддлвары и создаем роутер

const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");

const router = express.Router();

module.exports = router;