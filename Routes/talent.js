const controller_data = require("../Controller/talent");

const express = require("express");

const router = express.Router();

router.post("/", controller_data.create);
router.get("/", controller_data.get);

module.exports = router;
