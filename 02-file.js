//导入fs 模块，操作文件
const fs = require('fs')
fs.readFile('./01-hello.js', 'utf8', function (err, dataStr) {
    // 读取失败，err，读取成功，err为null
    console.log(err)
    console.log(dataStr)
})