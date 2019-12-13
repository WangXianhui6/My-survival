let sqldata = require('./data.js')
module.exports = {
    getdata(sql2,data,callback){
        sqldata.sqlconnect(sql2,data).then(function(res){
            callback({
                status:200,
                data: res
            })
        }).catch(function(err){
            callback({
                status: 510,
                data: err
            })
        })
    },
}