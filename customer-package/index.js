//导入包
const date = require('./src/dataFormat')
const htmlEscape = require('./src/htmlEscape')
//暴露出去
module.exports = {
    ...date,
    ...htmlEscape

}