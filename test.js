// file.js
const fs = require('fs');

fs.readFile('config.json', 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件失败:', err);
    return;
  }else{console.log('文件内容:', data);}
  var config = JSON.parse(data);
  module.exports = config;

});

