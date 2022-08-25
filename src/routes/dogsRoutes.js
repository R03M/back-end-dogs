const { Router } = require("express");
const router = Router();
const { dogsInf, dogsId, dogsCreate } = require("./dogsF.js");

router.get("/", dogsInf);
router.get("/:id", dogsId)
router.post("/", dogsCreate)

module.exports = router;
