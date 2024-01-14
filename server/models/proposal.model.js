const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");

const Proposal = db.define(
  "proposal",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    type: {
        field: "type",
        type: DataTypes.STRING(2),
        allowNull: false,
    },
    concept: {
        field: "concept",
        type: DataTypes.STRING,
        allowNull: true,
    },
    date: {
        field: "date",
        type: DataTypes.DATE,
        allowNull: true,
    },
    savings: {
      field: "savings",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    percent_savings: {
      field: "percent_savings",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    cia_several: {
      field: "cia_several",
      type: DataTypes.TEXT,
      allowNull: true,
    },
    id_agreement: {
        field: "id_agreement",
        type: DataTypes.INTEGER,
        allowNull: true,
    },
  },
  {
    db,
    modelName: "Proposal",
    tableName: "proposal",
    timestamps: false,
  }
);

Proposal.sync();

module.exports = Proposal;
