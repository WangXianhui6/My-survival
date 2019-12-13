let {log} = console
let express = require('express')
let app = express()
// 创建服务器
app.use(express.static('./'))
// 监听所有请求,会截断其他请求
app.all('*',function(req,res,next){
    // 解决跨域
    res.header('Access-Control-Allow-Origin','*')
    // 继续执行其他请求
    next()
})
// 监听get请求
app.get('/list',function(req,res){
    // 返回json数据
    log(req.url)
    res.json({a:1})
})
app.listen(3007)