const { db } = require("../config/sqlConnection");
const { DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');

const Advisor = db.define(
  "advisor",
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
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    username: {
      field: "username",
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    email: {
      field: "email",
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      field: "password",
      type: DataTypes.TEXT,
      allowNull: false,
    },
    role: {
      field: "rol",
      type: DataTypes.TEXT,
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
    tableName: "advisor",
    freezeTableName: true,
    timestamps: false,
  }
);

Advisor.prototype.validPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

Advisor.sync();

module.exports = Advisor;
