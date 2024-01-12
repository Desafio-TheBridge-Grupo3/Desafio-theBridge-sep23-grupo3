const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");

const Total = db.define(
  "Total",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    type_code: {
        field: "type_code",
        type: DataTypes.STRING(2),
        allowNull: true,
    },
    result_con_P1: {
        field: "result_con_P1",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    result_con_P2: {
        field: "result_con_P2",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    result_con_P3: {
        field: "result_con_P3",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    result_con_P4: {
        field: "result_con_P4",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    result_con_P5: {
        field: "result_con_P5",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    result_con_P6: {
        field: "result_con_P6",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    result_pow_P1: {
        field: "result_pow_P1",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    result_pow_P2: {
        field: "result_pow_P2",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    result_pow_P3: {
        field: "result_pow_P3",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    result_pow_P4: {
        field: "result_pow_P4",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    result_pow_P5: {
        field: "result_pow_P5",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    result_pow_P6: {
        field: "result_pow_P6",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    id_consumption: {
        field: "id_consumption",
        type: DataTypes.INTEGER,
        allowNull: true,
    },
  },
  {
    db,
    modelName: "Total",
    tableName: "Total",
    timestamps: false,
  }
);

Total.sync();

module.exports = Total;