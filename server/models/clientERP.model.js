const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");

const Client_ERP = db.define(
  "client_erp",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    name: {
      field: "name",
      type: DataTypes.STRING,
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
    tableName: "client_erp",
    timestamps: true,
    createdAt: false,
    updatedAt: "date_last_modify",
  }
);

Client_ERP.sync();

module.exports = Client_ERP;