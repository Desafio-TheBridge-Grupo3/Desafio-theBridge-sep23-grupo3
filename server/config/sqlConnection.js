const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, `${process.env.SQL_PWD}`, {
    host: process.env.SQL_HOST,
    dialect: 'postgres',
    port: 5432,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.CA_CERT,
    },
    define: {
        freezeTableName: true,
        timestamps: false,
    }
});

const connectSQL = async () => {
    try {   
        await db.authenticate();
        console.log('PostgreSQL database connected...');
    } catch (error) {
        console.error('Unable to connect to SQL database:', error);
    }
};

connectSQL();

module.exports = {
    connectSQL,
    db
}