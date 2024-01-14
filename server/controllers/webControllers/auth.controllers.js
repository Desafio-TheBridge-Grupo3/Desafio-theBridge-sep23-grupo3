const Sequelize = require('sequelize');
const op = Sequelize.Op;
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Advisor = require("../../models/advisor.model");

const login = async (req, res) => {
  try {
    const username = req.body.username || "";
    const email = req.body.email || "";
    const password = req.body.password || "";
    if ((username || email) && password) {
      let advisor = await Advisor.findOne({
        where: {
          [op.or]: {
            username: username,
            email: email,
          },
        },
      });
      if (!advisor) {
        res
          .status(400)
          .json({ success: false, message: "Wrong email/username or password." });
      } else {
        const success = await advisor.validPassword(
          password,
          advisor.dataValues.password
        );
        if (!success) {
          res.status(400).json({ success: false, message: "Wrong password." });
        } else {
          advisor = advisor.dataValues;
          delete advisor.password;
          const token = jwt.sign(advisor, `${process.env.JWT_SECRET}`, {
            expiresIn: 3600000,
          });
          res
            .status(200)
            .cookie("access-token", token, {
              httpOnly: false,
              sameSite: "strict",
            })
            .json({ success: true, user: advisor });
        }
      }
    } else {
        res.status(400).json({success: false, message: 'Introduce email or username.'})
    }
  } catch (error) {
    res.status(400).json({ message: `ERROR: ${error.stack}` });
  }
};

const logout = (req, res) => {
  try {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      req.session.destroy();
      res.clearCookie("access-token");
    });
  } catch (error) {
    res.status(400).json({ message: `ERROR: ${error.stack}` });
  }
};

const checkUser = async (req, res) => {
  try {
    if (req.params.token) {
      const token = jwt.decode(req.params.token);
      const user = await Advisor.findOne({
        where: {id: token.id},
        attributes: {
          exclude: ["password"]
        }
      })
      res.status(200).json({success: true, user: user});
    } else {
      res.status(200).json({success: false, message: 'No user logged in.'});
    }
  } catch (error) {
    res.status(400).json({ message: `ERROR: ${error.stack}` });
  }
};

const controllers = {
    login,
    logout,
    checkUser
};

module.exports = controllers;
