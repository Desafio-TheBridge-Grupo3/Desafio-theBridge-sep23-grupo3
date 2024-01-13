const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");

const Proposal = db.define(
  "Proposal",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    type: {
        field: "type",
        type: DataTypes.STRING(1),
        allowNull: true,
    },
    concept: {
        field: "concept",
        type: DataTypes.TEXT,
        allowNull: true,
    },
    date: {
        field: "date",
        type: DataTypes.DATE,
        allowNull: true,
    },
    savings: {
      field: "savings",
      type: DataTypes.STRING,
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
    tableName: "Proposal",
    timestamps: false,
  }
);

Proposal.sync();

module.exports = Proposal;
