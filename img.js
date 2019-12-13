let path = require('path')
let url = require('url')
let mysql = require('mysql')
let fromiable = require('formidable')
let sqldata = require('./data/datahandle.js')
let sendemail = require('./controler/emailtransport')
let sqldata2 = require('./data/data.js')
let isemail = require('./controler/common')


let {log} = console
let localpath = 'http://192.168.97.228:3003/'
let sql = 'select * from goods g,classify c where g.s_id = c.s_id'
let sql1 = 'insert into goods(nam,intro,price,store,s_id,img) values(?)'
let sql2 = 'insert into varify(email,code) values(?)'
let sql3 = 'insert into users(email,username,password,img) values(?)'
let sql4 = 'select * from users where email=?'
let sql5 = 'insert into backusers(email,username,pwd,img) values(?)'
let sql6 = 'select * from backusers where email=?'
let sql8 = 'select * from users where email=?'


let emailcode
let count = 0

module.exports = {
    // get获取商品信息
    getlists(req,res){
        sqldata.getdata(sql,[],function(data){
            res.json(data)
        })
    },
    // get发送邮件获取验证码
    getcode(req,res){
        let email = url.parse(req.url,true).query.email
        // let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if(isemail.isEmail(email)){
            emailcode = Math.round(Math.random()*8999+1000)
            sendemail.sendemail(email,'注册验证码',`<h1 style="color:#ff2d52">验证码为：${emailcode}</ h1>`,function(error,response){
                if(error){
                    res.json({
                        status:510,
                        message:'邮箱发送失败'
                    })
                }else{
                    sqldata2.sqlconnect(sql2,[[email,emailcode]]).then(function(result){
                        res.json({
                            status: 200,
                            message: '邮箱发送成功,请查收',
                            data: emailcode
                        })
                    }).catch(function(error){
                        res.json({
                            status:502,
                            message:'邮箱发送失败'
                        })
                    })
                }
            })
        }else{
            res.json({
                status:501,
                message:'邮箱格式不正确'
            })
        }
    },
    // get获取商品分类信息
    getclass(req,res){
        sqldata.getdata('select * from classify',[],function(data){
            res.json(data)
        })
    },
    // post客户注册
    uregister(req,res){
        let form = new fromiable.IncomingForm()
        form.uploadDir = './upload'
        form.keepExtensions = true
        form.parse(req,function(err,fields,files){
            let params = fields
            if(!params.email || !isemail.isEmail(params.email)){
                res.json({
                    status: 503,
                    message: '邮箱格式不正确'
                })
                console.log(2)
                return false
            }
            if(!params.code){
                res.json({
                    status: 504,
                    message: '验证码不能为空'
                })
                console.log(3)
                return false
            }
            if(!params.pwd){
                res.json({
                    status: 505,
                    message: '密码不能为空'
                })
                console.log(4)
                return false
            }
            let imgpath = localpath + files.head.path
            let dataarr = []
            for(let prop in fields){
                if(prop!='code'){
                    dataarr.push(fields[prop])
                }
            }
            dataarr.push(imgpath)
            sqldata2.sqlconnect(sql4,[params.email]).then(function(result){
                if(result.length>=1){
                    res.json({
                        status: 506,
                        message: '邮箱已注册'
                    })
                }else{
                    sqldata2.sqlconnect(sql3,[dataarr]).then(function(result){
                        res.json({
                            status:200,
                            message: '注册成功'
                        })
                    }).catch(function(error){
                        res.json({
                            status: 507,
                            message: '注册失败'
                        })
                    })
                }
            })
        })
    },
    // post注册
    register(req,res){
        let form = new fromiable.IncomingForm()
        form.uploadDir = './upload'
        form.keepExtensions = true
        form.parse(req,function(err,fields,files){
            let params = fields
            if(!params.email || !isemail.isEmail(params.email)){
                res.json({
                    status: 503,
                    message: '邮箱格式不正确'
                })
                console.log(2)
                return false
            }else{
                if(params.code == emailcode){
                    if(!params.pwd){
                        res.json({
                            status: 505,
                            message: '密码不能为空'
                        })
                        console.log(4)
                        return false
                    }
                    let imgpath = localpath + files.head.path
                    let dataarr = []
                    for(let prop in fields){
                        if(prop!='code'&& prop!='identify'){
                            dataarr.push(fields[prop])
                        }
                    }
                    dataarr.push(imgpath)
                    if(params.identify == 2){
                        isemail.usersql(sql4,sql3,[params.email],[dataarr],res)
                    }else if(params.identify == 1){
                        isemail.usersql(sql6,sql5,[params.email],[dataarr],res)
                    }
                }else{
                    res.json({
                        status: 515,
                        message: '验证码不正确'
                    })
                }
            }
        })
    },
    // post登录
    login(req,res){
        let pwd = req.body.pwd
        let email = req.body.email
        sqldata2.sqlconnect(sql8,[email]).then(function(result){
            if(result.length>=1){
                if(result[0].pwd == pwd){
                    console.log(result[0].username+' '+' 登录了--当前管理人员在线人数：'+(++count))
                    res.json({
                        status: 200,
                        message: '登录成功，2s后跳转到响相应页面',
                        data: {
                            username:result[0].username,
                            head: result[0].img,
                            mod: ''
                        },
                        identify: 2
                    })
                }else{
                    res.json({
                        status: 511,
                        message: '用户名或密码错误',
                        data: ''
                    })
                }
            }else{
                sqldata2.sqlconnect(sql6,[email]).then(function(results){
                    if(results.length>=1){
                        if(results[0].pwd == pwd){
                            console.log(results[0].username+' '+' 登录了--当前管理人员在线人数：'+(++count))
                            res.json({
                                status: 200,
                                message: '登录成功，2s后跳转到响相应页面',
                                data: {
                                    username:results[0].username,
                                    head: results[0].img,
                                    mod: results[0].mymod
                                },
                                identify: 1
                            })
                        }else{
                            res.json({
                                status: 511,
                                message: '用户名或密码错误',
                                data: ''
                            })
                        }
                    }else{
                        console.log(results)
                        res.json({
                            status: 511,
                            message: '用户名或密码错误',
                            data: ''
                        })
                    }
                })
            }
        }).catch(function(error){
            res.json({
                status: 512,
                message: '服务器错误，请稍后重试',
                data: ''
            })
        })
    },
    // 退出登录
    loginout(req,res){
        if(count>0){
            console.log('当前管理人员在线人数：'+(--count))
            res.json({})
        }
    },
    // post添加商品
    postlists(req,res){
        let form = new fromiable.IncomingForm()
        form.uploadDir = './upload'
        form.keepExtensions = true
        // fields为上传的除了图片以外的所有文件
        // files指上传的文件
        form.parse(req,function(err,fields,files){
            console.log(files)
            let imgpath = localpath + files.shopimg.path
            let dataarr = []
            // log(Object.keys(files))
            for(let prop in fields){
                dataarr.push(fields[prop])
            }
            dataarr.push(imgpath)
            sqldata.getdata(sql1,[dataarr],function(data){
                res.json(data)
            })
        })
    },
    // post删除商品
    deletegoods(req,res){
        let usermessage = req.body
        log(usermessage)
        sqldata2.sqlconnect('select * from backusers where username=?',[usermessage.user]).then(function(result){
            if(result.length>=1){
                if(result[0].mymod == 1){
                    sqldata2.sqlconnect('delete from goods where id=?',[usermessage.id]).then(function(results){
                        res.json({
                            status: 200,
                            data: ''
                        })
                    }).catch(function(err){
                        res.json({
                            status: 512,
                            message: '服务器错误，请稍后重试',
                            data: ''
                        })
                    })
                }else{
                    res.json({
                        status: 513,
                        message:'您的权限不够，无法删除'
                    })
                }
            }
        })
    },
    // 首页轮播图片渲染
    getlunbo(req,res){
        isemail.lunbo('select * from lunbo',res)
    },
    // 招商加盟轮播图片渲染
    getjlunbo(req,res){
        isemail.lunbo('select * from jlunbo',res)
    },
    // 留言保存
    getsuggest(req,res){
        let form = new fromiable.IncomingForm()
        form.parse(req,function(err,fields,files){
            let arr = []
            for (const key in fields) {
                arr.push(fields[key])
            }
            console.log(arr)
            sqldata2.sqlconnect('insert into suggest(username,tel,email,message) values(?)',[arr]).then(function(result){
                res.json({
                    status:200,
                    message:'留言成功'
                })
            }).catch(function(error){
                res.json({
                    status: 512,
                    message: '服务器错误，请稍后重试',
                    data: ''
                })
            })
        })
    },

    companadd(req,res) {    
        let params = req.body
         //判断验证码是否存在
        if(!params.provinc){
            res.json({
              status:602,
              message:'请输入省份'
            })
            return false;
        }
        if(!params.company){
            res.json({
              status:603,
              message:'请输入公司'
            })
            return false;
        }
        if(!params.address){
            res.json({
              status:604,
              message:'请输入地址'
            })
            return false;
        }
        let arr = []
        for(const i in params){
            arr.push(params[i])
        }
        console.log(arr)
        //将数据添加进数据库
        sqldata2.sqlconnect('insert into shop_company(province,company,address) values(?)',[arr]).then(function(result){
            res.json({
                status:200,
                message:''
              })
        }).catch(function(error){
            res.json({
                status: 512,
                message: '服务器错误，请稍后重试',
                data: ''
            })
        })
    },
    getcompany(req,res){
        let sql = 'select * from shop_company'
        sqldata2.sqlconnect(sql,[]).then(function(resurt){
            res.json({
                status:200,
                message:''
            })
        }).catch(function(error){
            res.json({
                status: 512,
                message: '服务器错误，请稍后重试',
                data: ''
            })
        })
    }
    
}