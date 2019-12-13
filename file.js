// 在terminal输出a a之间的执行时间
console.time('a')
console.timeEnd('a')
let {log} = console
let fs = require('fs')
let a = fs.createWriteStream('hi.txt')
let b = fs.createReadStream('hello.txt')

// once绑定一个一次性的打开文件的事件
b.once('open',function(){
    log('打开读')
})
a.once('close',function(){
    log('打开写')
})
// once绑定一个一次性的关闭文件的事件
b.once('close',function(){
    log('关闭读')
    // 关闭写流，写流应在读完的同时关闭
    a.end()
})
a.once('close',function(){
    log('关闭写')
})
// 1、读流操作需要绑定一个data的事件,同时将读流数据写入写流
// b.on('data',function(data){
//     // 写流只需要write()
//     a.write(data)
// })
// 2、读流操作的pipe()直接将读流数据写入写流
b.pipe(a)

// 以数组形式输出当前目录下的所有文件
fs.readdir('.',function(err,files){
    if(!err){
        log(files)
    }
})

// 将文件内容按指定长度从头截断
fs.truncateSync("hi.txt",10)

// 创建一个文件夹
fs.mkdirSync('myproject')

// 删除一个文件夹
fs.rmdirSync('myproject')

// rename修改文件名fs.rename(旧路径，新路径，回调)
fs.rename('hi.txt','ha.txt',function(){
    log('修改完毕')
})
fs.rename('ha.txt','hi.txt',function(){
    log('修改完毕')
})

// 监听文件是否改变，当文件打开时开始监听 cur为修改后的状态，pre为修改前的状态
// fs.watchFile('hi.txt',function(cur,pre){
//     log(cur)
// })


let argvs = process.argv.slice(2)
log(process.argv+'\n'+'argvs'+argvs)