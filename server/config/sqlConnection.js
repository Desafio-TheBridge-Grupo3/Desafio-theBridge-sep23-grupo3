const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env.SQL_SERVER, process.env.SQL_USER, `${process.env.SQL_PWD}`, {
    host: 'localhost',
    dialect: 'postgres',
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