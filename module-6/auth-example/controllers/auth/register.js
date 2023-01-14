const { Conflict } = require("http-errors");
/* 2. добавляем пакет для создания id nanoid и импортируем его
5. добавляем папку хелпер из примера sendgrid и импортируем в контроллер регистрации  */
const { nanoid } = require("nanoid");
const { sendEmail } = require("../../helpers");

const gravatar = require("gravatar");

const { User } = require("../../models");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  /* 3. до создания нового пользователя создаем переменную verificationToken
  4. добавляем его в newUser */
  const verificationToken = nanoid();
  const avatarURL = gravatar.url(email);
  const newUser = new User({ name, email, avatarURL, verificationToken });

  newUser.setPassword(password);

  await newUser.save();
  /* 6. перед успешным ответом нужно отправить письмо пользователю с токеном для верификации */
  const mail = {
    to: email,
    subject: "Подтверждение вашего email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Подтвердить email</a>`,
  };

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        name,
        avatarURL,
        verificationToken,
      },
    },
  });
};

module.exports = register;
