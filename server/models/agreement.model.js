const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");

const Agreement = db.define(
  "Agreement",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    cups20: {
        field: "cups20",
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
    },
    consumption: {
        field: "consumption",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    cnae: {
        field: "cnae",
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    electric_meter: {
        field: "electric_meter",
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    vtension_code: {
        field: "vtension_code",
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    cau: {
        field: "cau",
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    id_address: {
        field: "id_address",
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_client_erp: {
        field: "id_client_erp",
        type: DataTypes.INTEGER,
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
    modelName: "Agreement",
    tableName: "Agreement",
    timestamps: false,
  }
);

Agreement.sync();

module.exports = Agreement;
