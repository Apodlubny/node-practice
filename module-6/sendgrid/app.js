/* 
1. импортируем sendgrid
2. вызываем dotenv для доступа к переменной окружения
3. забираем ключ из переменных окружения 
4. у объекта sgMail вызываем метод setApiKey
 */
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

/* 
создаем письмо  
1. письмо - это объект следующей структуры
2. отправляем письмо
 */
const email = {
  to: "kelora8196@usharer.com",
  from: "apodlubny@gmail.com",
  subject: "Тестирование сервиса рассылки",
  html: "<p>просто абзац с текстом</p>",
};

sgMail
  .send(email)
  .then(() => console.log("Email send successfully!"))
  .catch((error) => console.log(error));

/* ввыносим данную логику в отдельную функцию в папке helpers
 */
