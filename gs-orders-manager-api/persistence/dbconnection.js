
const mysql = require('mysql');

let dataBaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'gsbarmanagerapp',
    password: 'gsbarmanagerapp',
    database: 'gsbar'
});


module.exports = dataBaseConnection;