const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");

const Address = db.define(
  "address",
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
    cp: {
        field: "cp",
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    province: {
        field: "province",
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    city: {
        field: "city",
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    address_type: {
        field: "address_type",
        type: DataTypes.STRING(1),
        allowNull: true,
    },
    zone: {
        field: "zone",
        type: DataTypes.STRING(1),
        allowNull: true,
    },
  },
  {
    db,
    modelName: "Address",
    tableName: "address",
    timestamps: false,
  }
);

Address.sync();

module.exports = Address;