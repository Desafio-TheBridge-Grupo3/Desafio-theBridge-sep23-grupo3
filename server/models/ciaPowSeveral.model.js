const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");

const CIA_pow_several = db.define(
  "cia_pow_several",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    cia: {
      field: "cia",
      type: DataTypes.TEXT,
      allowNull: false,
    },
    zone: {
      field: "zone",
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    rate: {
      field: "rate",
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    product_cia: {
      field: "product_cia",
      type: DataTypes.TEXT,
      allowNull: true,
    },
    market: {
        field: "market",
        type: DataTypes.STRING(1),
        allowNull: true,
    },
    pow_price_P1: {
      field: "pow_price_P1",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    pow_price_P2: {
      field: "pow_price_P2",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    pow_price_P3: {
      field: "pow_price_P3",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    pow_price_P4: {
      field: "pow_price_P4",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    pow_price_P5: {
      field: "pow_price_P5",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    pow_price_P6: {
      field: "pow_price_P6",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    db,
    modelName: "CIA_pow_several",
    tableName: "cia_pow_several",
    timestamps: false,
  }
);

CIA_pow_several.sync();

module.exports = CIA_pow_several;