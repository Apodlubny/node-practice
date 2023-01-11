/* 
Рассылка с помощью nodemailer
1. вызываем nodemailer
2. подключаем dotenv
 */

const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

/* 
создаем набор настроек 
1. создаем переменную nodemailerConfig которая является набором настроек */

const nodemailer = {
  host: "smtp.meta.ua",
  port: 465, // может быть 25 иди 2255
  secure: true,
  auth: {
    user: "baby_shark@meta.ua",
    pass: META_PASSWORD,
  },
};
