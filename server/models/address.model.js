const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");

const Address = db.define(
  "Address",
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
    cp: {
        field: "cp",
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    province: {
        field: "province",
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    city: {
        field: "city",
        type: DataTypes.STRING(45),
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
    tableName: "Address",
    timestamps: false,
  }
);

Address.sync();

module.exports = Address;