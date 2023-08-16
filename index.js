require("dotenv").config();
const server = require("./src/app.js");
const { getTemp } = require("./src/data/allData.js");
const { conn } = require("./src/db.js");
const { PORT } = process.env;

conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
    getTemp();
  });
});
