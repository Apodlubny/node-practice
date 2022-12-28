// извлекает токен из заголовка и 
// 1. проверяет валидность токена (токен выдан и он активный )
// 2. извлекает из токена id, находит пользователя в базе по id и прикрепляет его к запросу  (req.user)

//1. извлечь из заголовков запроса содержимое заголовка Authorization
// 2. разделить его на два слова: Bearer и токен
//3. проверить равно ли первое слово "Bearer"
// 4. проверить валидность второго слова (токен)
//5. Если токен валиден извлечь из него id и найти в базе пользователя с таким id
// 6. Если пользователь с таким id найденб его нужно прикрепить к запросу (обьект req)

const {Unauthorized} = require("http-errors");
const jwt = require("jsonwebtoken");

const {User} = require("../models");

const {SECRET_KEY} = process.env;

const auth = async(req, res, next)=> {
    const {authorization = ""} = req.headers;
    const [bearer, token] = authorization.split(" ");
    try {
        if(bearer !== "Bearer"){
            throw new Unauthorized("Not authorized")
        }
        const {id} = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if(!user || !user.token){
            throw new Unauthorized("Not authorized");
        }
        req.user = user;
        next();
    } catch (error) {
        if(error.message === "Invalid signature"){
            error.status = 401;
        }
        next(error);
    }
    
}

module.exports = auth;