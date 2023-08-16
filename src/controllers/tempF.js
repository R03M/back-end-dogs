const { Temper } = require("../db.js");

const allTemps = async (req, res) => {
  const temp = await Temper.findAll();
  res.send(temp);
};

module.exports = { allTemps };
