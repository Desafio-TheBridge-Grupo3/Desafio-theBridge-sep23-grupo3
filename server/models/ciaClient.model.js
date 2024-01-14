const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");

const CIA_Client = db.define(
  "cia_client",
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
    issue_date: {
        field: "issue_date",
        type: DataTypes.DATE,
        allowNull: true,
    },
    start_date: {
        field: "start_date",
        type: DataTypes.DATE,
        allowNull: true,
    },
    end_date: {
        field: "end_date",
        type: DataTypes.DATE,
        allowNull: true,
    },
    billing_days: {
        field: "billing_days",
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    discount_energy: {
        field: "discount_energy",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    discount_power: {
        field: "discount_power",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    iva: {
        field: "iva",
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    tax: {
        field: "tax",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    other_tax: {
        field: "other_tax",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    maintenance: {
        field: "maintenance",
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    id_price: {
        field: "id_price",
        type: DataTypes.INTEGER,
        allowNull: true,
    },
  },
  {
    db,
    modelName: "CIA_Client",
    tableName: "cia_client",
    timestamps: false,
  }
);

CIA_Client.sync();

module.exports = CIA_Client;