require("./config/sqlConnection");
const express = require('express')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cors = require('cors');
const helmet = require('helmet');
require('./config/jwt.config')(passport);
require('dotenv').config();
require('./models/associations');

const app = express()
const port = process.env.PORT || 3000;

// Initialize express
app.use(express.json());

// Express setup
app.use(express.urlencoded({extended: true}));
app.set("trust proxy", 1);
app.use(cookieParser());

// Cors setup
const corsOpts = {
  origin: process.env.DOMAIN_URL || 'http://localhost:5173',
  credentials:true,
  optionSuccessStatus:200,
}
app.use(cors(corsOpts));

// Session and Passport setup
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// Set Content Security Policies
const scriptSources = ["'self'", "'unsafe-inline'", "'unsafe-eval'"];
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: scriptSources,
      "img-src": ["'self'", "https:", "data:"],
    },
  })
);

// Middlewares
const error404 = require('./middlewares/error404')
const morgan = require('./middlewares/morgan')

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));


/* //swagger- documentation
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
 */

// API Routes
const advisorRouter = require('./routes/advisor.route');
const addressRouter = require("./routes/address.route");
const ciaClientRouter = require("./routes/ciaClient.route");
const consumptionRouter = require("./routes/consumption.route");
const priceRouter = require("./routes/price.route");
const totalRouter = require("./routes/total.route");
const proposalRouter = require('./routes/proposal.routes');
const ciaConSeveralRouter = require('./routes/ciaConSeveral.routes');
const ciaPowSeveralRouter = require('./routes/ciaPowSeveral.routes');

app.use("/advisor", advisorRouter);
app.use("/address", addressRouter);
app.use("/cia-client", ciaClientRouter);
app.use("/consumption", consumptionRouter);
app.use("/price", priceRouter);
app.use("/total", totalRouter);
app.use('/proposal', proposalRouter);
app.use('/cia-con-several', ciaConSeveralRouter);
app.use('/cia-pow-several', ciaPowSeveralRouter);

// Auth routes
const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server REST API',
    routes: {
      proposal: '/proposal',
      cia_con_several: '/cia-con-several',
      cia_pow_several: '/cia-pow-several',
    },
  })
})

// Error/Non existent route
app.use('*', error404);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
});