let {log} = console
let fs = require('fs')
let http = require('http')
let url = require('url')
http.createServer(function(req,res){
    let pathname = url.parse(req.url).pathname
    let content = ''
    let count = 0
    if(pathname != '/favicon.ico'){
        let dirarr = fs.readdirSync(__dirname+'/'+pathname)
        for (let item of dirarr) {
            fs.stat(__dirname+'/'+pathname+'/'+item,function(err,sta){
                count++
                if(sta.isFile()){
                    content += `<div><a href="http://127.0.0.1:3007${pathname+'/'+item}">${item}</a></div>`
                }else{
                    content += `<div style="color:pink">${item}</div>`
                }
                if(count>=dirarr.length){
                    log(content)
                    res.end(content)
                    count = 0
                }
            })
        }
    }
}).listen(3006)