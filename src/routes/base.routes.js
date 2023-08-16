const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to Api of Breeds");
});

module.exports = router;
