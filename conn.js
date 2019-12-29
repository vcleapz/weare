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

con.on('error', function (err) {
    console.log('3. db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') { 	// Connection to the MySQL server is usually
        handleDisconnect();                      	// lost due to either server restart, or a
    } else {                                      	// connnection idle timeout (the wait_timeout
        throw err;                                  // server variable configures this)
    }
});
}

handleDisconnect();

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});


module.exports = con;