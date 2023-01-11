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

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, // может быть 25 иди 2255
  secure: true,
  auth: {
    user: "baby_shark@meta.ua",
    pass: META_PASSWORD,
  },
};
/* 
созадем transporter - объект который будет отвечать непосредственно за доставку писем
1. создаем переменную transporter и с помощью объекта настроек nodemailer и его метода createTransport передаем настройки
2. добавляем обьект письма 
3. отправляем с помощью transporter.send
 */
const transporter = nodemailer.createTransport(nodemailerConfig);

const email = {
  to: "kelora8196@usharer.com",
  from: "baby_shark@meta.ua",
  subject: "Тестирование сервиса рассылки",
  html: "<p>просто абзац с текстом</p>",
};

transporter
  .sendMail(email)
  .then(() => console.log("Email send successfully"))
  .catch((error) => console.log(error.message));
