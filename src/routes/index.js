const { Router } = require("express");
const dogsRoutes = require("./dogsRoutes.js");
const tempRoutes = require("./tempRoutes.js");
const router = Router();

router.use("/dogs", dogsRoutes);
router.use("/temperaments", tempRoutes);

module.exports = router;
