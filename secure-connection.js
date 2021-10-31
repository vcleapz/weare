var mysql = require('mysql');

var con = mysql.createPool({
    connectionLimit: 1000,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
    hostSecure: "us-cdbr-iron-east-05.cleardb.net",
    userSecure: "b74e0ac591e038",
    passwordSecure: "8b24d10f",
    databaseSecure: "heroku_d38d2ba38f5ba8e"
});

con.on('error', function (err) {
    if (err) throw err;
});


module.exports = con;
