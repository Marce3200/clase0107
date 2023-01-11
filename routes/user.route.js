const express = require("express");
const router = express.Router();

const {findAll, findOne} = require("../controllers/user.controller")

router.get("/all", findAll);
router.get("/one", findOne);

module.exports = router;





