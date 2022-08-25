const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      minHeightCm: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxHeightCm: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      minWeightKg: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxWeightKg: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      minLifeSpanYears: {
        type: DataTypes.INTEGER,
      },
      maxLifeSpanYears: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};
