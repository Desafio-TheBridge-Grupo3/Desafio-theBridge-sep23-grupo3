const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");

const Client_ERP = db.define(
  "Client_ERP",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      field: "name",
      type: DataTypes.TEXT,
      allowNull: true,
    },
    id_address: {
        field: "id_address",
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_advisor: {
        field: "id_advisor",
        type: DataTypes.INTEGER,
        allowNull: true,
    },
  },
  {
    db,
    modelName: "Client_ERP",
    tableName: "Client_ERP",
    timestamps: true,
    createdAt: false,
    updatedAt: "date_last_modified",
  }
);

Client_ERP.sync();

module.exports = Client_ERP;