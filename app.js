var express = require('express'); // import express
var path = require('path'); // import path
var routes = require('./routes/index');// import routes
var port = 8000; // 命名端口号：8000
 
var app = express(); //实例化express
 
var serveStatic = require('serve-static'); // 静态文件处理，css、图片之类的都在public
app.use(serveStatic('public')); // 路径：public
 
app.set('views', path.join(__dirname, 'views'));//前端页面都在view页面下
app.set('view engine', 'ejs');
 
app.listen(port); // 启动web服务。
 

routes(app);
console.log('server listening at ' + 8000);
module.exports = app;