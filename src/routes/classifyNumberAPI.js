const express = require("express");
const router = express.Router();

const { classifyNumberAPI } = require("../controllers/classifyNumberAPI");

router.route('/').get(classifyNumberAPI)

module.exports = router
