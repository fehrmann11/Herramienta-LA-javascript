var mysql = require('mysql');


var con = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prediccion',
    multipleStatements: true
});

module.exports = con;