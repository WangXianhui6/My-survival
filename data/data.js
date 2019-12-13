let mysql = require('mysql')
let config = require('../config')
let sqlpool = mysql.createPool(config.mysql)

module.exports = {
    sqlconnect(sql,data){
        // resolve和reject都是函数
        // resolve是返回成功后获取的数据库的数据
        // reject是返回失败后的失败信息
        return new Promise(function(resolve,reject){
            sqlpool.getConnection(function(err,connection){
                if(!err){
                    connection.query(sql,data,function(error,result){
                        if(!error){
                            resolve(result)
                        }else{
                            reject(error)
                        }
                        connection.release()
                    })
                }else{
                    reject(err)
                }
            })
        })
        // 链接数据库，err表示连接与否，connection连接信息
    }
}