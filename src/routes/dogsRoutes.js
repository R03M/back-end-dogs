const { Router } = require("express");
const router = Router();
const { dogsInf, dogsId, dogsCreate, dogsUpdate, deleteDog } = require("./dogsF.js");

router.get("/", dogsInf);
router.get("/:id", dogsId)
router.post("/", dogsCreate)
router.put("/:id", dogsUpdate)
router.delete("/:id", deleteDog)

module.exports = router;
