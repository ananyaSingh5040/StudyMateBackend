const express = require("express");
const { solveDoubt } = require("../controllers/doubtController");

const router = express.Router();

router.post("/", solveDoubt);

module.exports = router;
