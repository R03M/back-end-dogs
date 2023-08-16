const { Router } = require("express");
const dogsRoutes = require("./dogs.routes.js");
const tempRoutes = require("./temp.routes.js");

const router = Router();

router.use("/dogs", dogsRoutes);
router.use("/temperaments", tempRoutes);

module.exports = router;
