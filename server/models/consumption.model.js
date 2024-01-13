const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");

const Consumption = db.define(
  "Consumption",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    code: {
        field: "code",
        type: DataTypes.STRING(2),
        allowNull: true,
    },
    con_P1: {
        field: "con_P1",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    con_P2: {
        field: "con_P2",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    con_P3: {
        field: "con_P3",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    con_P4: {
        field: "con_P4",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    con_P5: {
        field: "con_P5",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    con_P6: {
        field: "con_P6",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    pow_P1: {
        field: "pow_P1",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    pow_P2: {
        field: "pow_P2",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    pow_P3: {
        field: "pow_P3",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    pow_P4: {
        field: "pow_P4",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    pow_P5: {
        field: "pow_P5",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    pow_P6: {
        field: "pow_P6",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    reactive_power: {
        field: "reactive_power",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    id_cia_client: {
        field: "id_cia_client",
        type: DataTypes.INTEGER,
        allowNull: true,
    },
  },
  {
    db,
    modelName: "Consumption",
    tableName: "Consumption",
    timestamps: false,
  }
);

Consumption.sync();

module.exports = Consumption;