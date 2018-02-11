'use strict';
var chalk = require('chalk');
var express = require('express');
var app = express();
var ecstatic = require('ecstatic');
var HTTP_PORT = 8100;
var http = require('http');

//var server = app.listen(HTTP_PORT, function () {
//    var host = server.address().address;
//    var port = server.address().port;

//    console.log(chalk.green('my app is listening at http://%s:%s', 'localhost', port));
//});

http.createServer(ecstatic({
    root: __dirname,
})).listen(HTTP_PORT, function () {
    console.log(chalk.green('http server listening on port ' + HTTP_PORT));
});
