const controller_Meatadata = require("../Controller/talentmeta");

const express = require("express");

const router = express.Router();

router.post("/", controller_Meatadata.create);
router.get("/", controller_Meatadata.getPopulate);

module.exports = router;
