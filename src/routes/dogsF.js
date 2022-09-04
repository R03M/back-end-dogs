const { Dog, Temper } = require("../db.js");
const { allDogs } = require("../data/allData");

const dogsInf = async (req, res) => {
  const allInf = await allDogs();
  const { name } = req.query;

  try {
    if (name) {
      const dogsFilter = allInf.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      dogsFilter.length ? res.send(dogsFilter) : res.send(`Non-existent`);
    } else {
      res.send(allInf);
    }
  } catch (error) {
    res.send(error);
  }
};

const dogsId = async (req, res) => {
  const { id } = req.params;
  const allInf = await allDogs();

  try {
    const idFilter = allInf.filter((e) => e.id === parseInt(id) || e.id === id);
  
    Object.entries(idFilter).length
      ? res.send(idFilter[0])
      : res.send(`Non-existent`);

  } catch (error) {
    res.send(error);
  }
};

const dogsCreate = async (req, res) => {
  const {
    name,
    image,
    minHeightCm,
    maxHeightCm,
    minWeightKg,
    maxWeightKg,
    minLifeSpanYears,
    maxLifeSpanYears,
    temper,
  } = req.body;

  try {
    const createDog = await Dog.create({
      name,
      image,
      minHeightCm,
      maxHeightCm,
      minWeightKg,
      maxWeightKg,
      minLifeSpanYears,
      maxLifeSpanYears,
    });
    let temperDB = await Temper.findAll({
      where: {
        name: temper,
      },
    });
    createDog.addTemper(temperDB);
    res.send(`Dog created`);
  } catch (error) {
    res.send(error);
  }
};

const dogsUpdate = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    image,
    minHeightCm,
    maxHeightCm,
    minWeightKg,
    maxWeightKg,
    minLifeSpanYears,
    maxLifeSpanYears,
    temper,
  } = req.body;
  try {
    const dog = await Dog.findByPk(id);
    dog.set({
      name,
      image,
      minHeightCm,
      maxHeightCm,
      minWeightKg,
      maxWeightKg,
      minLifeSpanYears,
      maxLifeSpanYears,
    });

    await dog.save();

    let tempers = await Temper.findAll({
      where: {
        name: temper,
      },
    });
    await dog.setTempers(tempers);
    res.send("Actualizacion correcta");
  } catch (error) {
    console.log(error);
  }
};

const deleteDog = async (req, res) => {
  const { id } = req.params;
  try {
    await Dog.destroy({
      where: {
        id: id,
      },
    });
    res.send("Raza eliminada");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { dogsInf, dogsId, dogsCreate, dogsUpdate, deleteDog };
