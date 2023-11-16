//这里可以不写index，会自动查找package.json下的main
const ob = require('./ob-package/index')
const dtStr = ob.dataFormat(new Date())
console.log(dtStr)
const htmlEscape = ob.htmlEscape()