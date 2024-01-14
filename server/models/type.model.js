const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");

const Type_proposal = db.define(
  "type_proposal",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    id_consumption: {
        field: "id_consumption",
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_proposal: {
        field: "id_proposal",
        type: DataTypes.INTEGER,
        allowNull: true,
    },
  },
  {
    db,
    modelName: "Type_proposal",
    tableName: "type_proposal",
    timestamps: false,
  }
);

Type_proposal.sync();

module.exports = Type_proposal;