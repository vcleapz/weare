var mysql = require('mysql');

var con = mysql.createConnection({
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "b74e0ac591e038",
    password: "8b24d10f",
    database: "heroku_d38d2ba38f5ba8e"
});

con.connect(function (err) {
    if (err) throw err;
});


function handleDisconnect(conn) {
    con.on('error', function (err) {
        if (!err.fatal) {
            return;
        }

        if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
            throw err;
        }
        console.log('Re-connecting lost connection: ' + err.stack);
        MYSQL = con;
        handleDisconnect(MYSQL);
        MYSQL.connect();
    });
}
handleDisconnect(MYSQL);

module.exports = con;