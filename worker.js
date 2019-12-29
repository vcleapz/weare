var http = require("http");
setInterval(function () {
    http.get("https://cws-api.herokuapp.com/space");
}, 300000); // every 5 minutes (300000)