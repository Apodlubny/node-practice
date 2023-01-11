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
