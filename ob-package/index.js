//定义格式化时间函数
function dataFormat(dataStr) {
    const dt = new Date(dataStr)
    const y = dt.getFullYear()
    const m = padZero(dt.getMonth())
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

//定义补0函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}
module.exports = {
    dataFormat
}