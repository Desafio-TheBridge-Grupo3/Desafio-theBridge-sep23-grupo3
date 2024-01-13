const { Client } = require('pg');
require('dotenv').config();

const db = new Client({host:process.env.SQL_HOST, 
            user:process.env.SQL_USER, 
            password:process.env.SQL_PWD, 
            database:process.env.SQL_DATABASE, 
            port:5432});

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