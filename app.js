var express = require('express'); // import express
var path = require('path'); // import path
var routes = require('./routes/index');// import routes
var port = 8000; // name port：8000
 
var app = express(); //express
 
var serveStatic = require('serve-static'); // make html,css in public
app.use(serveStatic('public')); // file：public
 
app.set('views', path.join(__dirname, 'views'));//user view in views flie
app.set('view engine', 'ejs');
 
app.listen(port); // start web server
 

routes(app);
console.log('server listening at ' + 8000);
module.exports = app;