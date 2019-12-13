let nodemail = require('nodemailer')
let nodemailt = require('nodemailer-smtp-transport')
let config = require('../config')

nodemailt = nodemail.createTransport(nodemailt({
    service: config.email.service,
    auth: {
        user: config.email.user,
        pass: config.email.pass
    },
    domains:[
        "qq.com"
    ],
    host: 'smtp.qq.com',
    port: 465,
    secure: true
}))

let sendemail = function(receipt,subject,html,callback){
    nodemailt.sendMail({
        from:config.email.user,
        to:receipt,
        subject,
        html
    },callback)
}

module.exports = {
    sendemail: sendemail
}