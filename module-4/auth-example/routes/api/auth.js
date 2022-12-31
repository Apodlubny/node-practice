// 1. створюємо новий роут auth
const express = require("express");

const {auth, validation, ctrlWrapper} = require("../../middlewares");
// 3. стоврюємо в папці controllers папку auth.js і імпортуємо в роут auth
const {auth: ctrl} = require("../../controllers");
const {joiRegisterSchema, joiLoginSchema} = require("../../models/user");

const router = express.Router();

router.post("/register", validation(joiRegisterSchema), ctrlWrapper(ctrl.register));
// router.post("/signup")
router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));
// router.post("/signin")
router.get("/logout", auth, ctrlWrapper(ctrl.logout));
// router.get("/signout")
module.exports = router;