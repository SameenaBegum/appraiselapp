var mysql = require('mysql2');
require('dotenv').config();

let database = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: 3306,
    multipleStatements: true,
    dateStrings: true
})

module.exports = database