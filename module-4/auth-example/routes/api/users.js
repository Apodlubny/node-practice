const express = require("express");


const {validation, ctrlWrapper} = require("../../middlewares");
const {users: ctrl} = require("../../controllers");
const router = express.Router();


router.get("/current", ctrlWrapper(ctrl.getCurrent));
module.exports = router;