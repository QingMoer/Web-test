var express = require('express'); // import express
var path = require('path'); // import path
var routes = require('./routes/index');// import routes
var port = 8001; // 命名端口号：8000
const fs = require('fs');
var config = require("./test");

var app = express(); //实例化express
  // Express body parser
  // file.js

fs.readFile('config.json', 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件失败:', err);
    return;
  }else{console.log('文件内容:', data);}
  var config = JSON.parse(data);
  const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://'+config.name+':'+config.password+'@cluster0.5z0oflj.mongodb.net/todo')
    .then(() => {
      console.log('Mongo connection open');
    })
    .catch(err => {
      console.log('Mongo Connection Error', err);
    });

});

app.use(express.urlencoded({ extended: true }));

var serveStatic = require('serve-static'); // 静态文件处理，css、图片之类的都在public
app.use(serveStatic('public')); // 路径：public
 
app.set('views', path.join(__dirname, 'views'));//前端页面都在view页面下
app.set('view engine', 'ejs');
 
app.listen(port); // 启动web服务。
 

routes(app);
console.log('server listening at ' + 8001);
module.exports = app;