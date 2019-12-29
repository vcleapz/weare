var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);



app.listen(process.env.PORT || 5000);
console.log('CWS API with node js for PCS, RESTful API server started on: ' + port);