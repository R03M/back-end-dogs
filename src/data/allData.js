const axios = require("axios");
const { Dog, Temper } = require("../db.js");
const Link = `https://api.thedogapi.com/v1/breeds`;

const getInfAPI = async () => {
  const info = await axios.get(Link);
  const dogs = info.data.map((e) => {
    let height = e.height.metric.split("-").map((e) => e.trim());
    let weight = e.weight.metric.split("-").map((e) => e.trim());
    let lifeSpan = e.life_span
      .replace("years", "")
      .trim()
      .split("-")
      .map((e) => e.trim());
    return {
      id: e.id,
      name: e.name,
      image: e.image.url,
      minHeightCm: parseInt(height[0]),
      maxHeightCm: parseInt(height[1]),
      minWeightKg: parseInt(weight[0]),
      maxWeightKg: parseInt(weight[1]),
      temperament: (e.temperament ? e.temperament.split(",") : ["n/a"]).map(
        (e) => e.trim()
      ),
      minLifeSpanYears: parseInt(lifeSpan[0]),
      maxLifeSpanYears: parseInt(lifeSpan[1]),
    };
  });
  return dogs;
};

const getTemp = async () => {
  const apiInf = await getInfAPI();
  const temperaments = apiInf.map((e) => e.temperament);
  const tempEnd = temperaments.flat().filter((i, e, a) => a.indexOf(i) === e);

  await Temper.bulkCreate(
    tempEnd.map((e) => {
      return {
        name: e,
      };
    })
  );
};
getTemp();
console.log(`Guarded tempers`);

const getDogsDB = async () => {
  const dogsDB = await Dog.findAll({
    include: [{ model: Temper, through: { attributes: [] } }],
  });
  console.log(JSON.stringify(dogsDB, null, 2));
  const dogs = dogsDB.map((e) => {
    return {
      id: e.id,
      name: e.name,
      image: e.image,
      minHeightCm: e.minHeightCm,
      maxHeightCm: e.maxHeightCm,
      minWeightKg: e.minWeightKg,
      maxWeightKg: e.maxWeightKg,
      temperament: e.tempers ? e.tempers.map((e) => e.name) : ["n/a"],
      minLifeSpanYears: e.minLifeSpanYears,
      maxLifeSpanYears: e.maxLifeSpanYears,
    };
  });
  return dogs;
};

const allDogs = async () => {
  const apiDogs = await getInfAPI();
  const dBDogs = await getDogsDB();

  return dBDogs.concat(apiDogs);
};

module.exports = { allDogs };
