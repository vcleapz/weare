var port = process.env.PORT || 3010;

server.listen(port, function () {
    console.log("App is running on port " + port);
});

server.loaded(port,function(){
    log.selected();
})

