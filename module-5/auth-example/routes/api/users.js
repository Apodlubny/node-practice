const express = require("express");

const {auth, ctrlWrapper} = require("../../middlewares");
const {users: ctrl} = require("../../controllers");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
//5. для возможности изменения аватарки пользователем создаем новый эндпоинт и переходим к созданию новой мидлвары upload
router.patch("/avatars", auth, ctrlWrapper(ctrl.updateAvatar))

module.exports = router;