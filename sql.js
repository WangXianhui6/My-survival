let express = require('express')
let app = express()
let {log} = console
let img = require('./img')
let bodyParser = require('body-parser')
let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({extended:false})

app.use(express.static('./'))

app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    next()
})


// http:192.168.97.249:3003/
// 获取数据库的goods表中的数据
app.get('/list',img.getlists)

// 获取数据库的分类表的分类
app.get('/class',img.getclass)

// 获取验证码
app.get('/getcode',img.getcode)

// 首页和产品页顶部轮播图片
app.get('/lunbo',img.getlunbo)

// 招商加盟轮播图片
app.get('/jlunbo',img.getjlunbo)

// 向数据库插入数据
app.post('/postclass',img.postlists)

// 向数据库请求删除数据
app.post('/delete',urlencodedParser,img.deletegoods)

// 用户注册
app.post('/register',urlencodedParser,img.register)

// 用户登录
app.post('/login',urlencodedParser,img.login)

// 退出登录
app.post('/loginout',urlencodedParser,img.loginout)

// post添加留言
app.post('/suggest',img.getsuggest)

// 添加招商名录
app.post("/companadd",urlencodedParser,img.companadd)

app.listen(3003,function(){
    console.log('3003启动成功')
})