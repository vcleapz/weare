var mysql = require('mysql');

var con = mysql.createConnection({
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "b74e0ac591e038",
    password: "8b24d10f",
    database: "heroku_d38d2ba38f5ba8e"
});

con.connect(function (err) {
    if (err) throw err;
    handleDisconnect();
});


module.exports = con;