const passportJWT = require("passport-jwt");
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const Advisor = require("../models/advisor.model");
require("dotenv").config();

const { Strategy: JWTStrategy, ExtractJwt: ExtractJWT } = passportJWT;

// Define passport jwt strategy
const opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme('jwt');
opts.secretOrKey = `${process.env.JWT_SECRET}`;
const passportJWTStrategy = new JWTStrategy(opts, function(jwtPayload, done) {
  // retreive mail or user from jwt payload
  const email = jwtPayload.email || '';
  const user = jwtPayload.user || '';
  const advisor = Advisor.findOne({
    where: {
        [op.or]: {
          user: user,
          email: email,
        },
      },
  });
  if (advisor) {
    done(null, advisor);
  } else {
    done(null, false);
  };
});

// Config passport
module.exports = function(passport) {
  passport.use(passportJWTStrategy);
  return passport;
};
