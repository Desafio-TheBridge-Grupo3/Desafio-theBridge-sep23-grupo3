const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');

const Advisor = db.define(
  "Advisor",
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
    user: {
      field: "user",
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email: {
      field: "email",
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      field: "password",
      type: DataTypes.TEXT,
      allowNull: true,
    },
    role: {
      field: "role",
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    hooks: {
      beforeCreate: (advisor) => {
        if (advisor.password) {
          const salt = bcrypt.genSaltSync(10);
          advisor.password = bcrypt.hashSync(advisor.password, salt);
        }
      },
      beforeUpdate: (advisor) => {
        if (advisor.password) {
          const salt = bcrypt.genSaltSync(10);
          advisor.password = bcrypt.hashSync(advisor.password, salt);
        }
      },
    },
    instanceMethods: {
      validPassword: (password) => {
        return bcrypt.compareSync(password, this.password);
      },
    },
  },
  {
    db,
    modelName: "Advisor",
    tableName: "Advisor",
    timestamps: false,
  }
);

Advisor.prototype.validPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

Advisor.sync();

module.exports = Advisor;
