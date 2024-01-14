const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");

const CIA_con_several = db.define(
  "cia_con_several",
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
    indexed_date: {
        field: "indexed_date",
        type: DataTypes.DATE,
        allowNull: true,
    },
    fee: {
        field: "fee",
        type: DataTypes.STRING(250),
        allowNull: true,
    },
    product_cia: {
      field: "product_cia",
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    market: {
        field: "market",
        type: DataTypes.STRING(1),
        allowNull: true,
    },
    con_price_P1: {
      field: "con_price_P1",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    con_price_P2: {
      field: "con_price_P2",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    con_price_P3: {
      field: "con_price_P3",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    con_price_P4: {
      field: "con_price_P4",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    con_price_P5: {
      field: "con_price_P5",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    con_price_P6: {
      field: "con_price_P6",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    db,
    modelName: "CIA_con_several",
    tableName: "cia_con_several",
    timestamps: false,
  }
);

CIA_con_several.sync();

module.exports = CIA_con_several;