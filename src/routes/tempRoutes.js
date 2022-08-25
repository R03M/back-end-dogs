const { Router } = require("express");
const router = Router();
const { allTemps } = require("./tempF.js");

router.get("/", allTemps);


module.exports = router;