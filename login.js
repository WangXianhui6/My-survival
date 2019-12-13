process.stdin.setEncoding('utf-8')
let users = {
    admin: '123',
    user1: '456',
    user2: '789'
}
let i = []
process.stdout.write('请输入用户名：\n')
process.stdin.on('data',function(data){
    // terminal输入的数据中包括了最后的回车，需要trim去除回车符号
    data = data.trim()
    // process.stdout.write的输出必须是string或者buffer类型
    // process.stdout.write(Object.keys(users).join(' ')+'\n')
    if(Object.keys(users).indexOf(data) != -1||i.length>0){
        if(i.length==0){
            i.push(data)
            process.stdout.write('用户名输入正确\n请输入密码：\n')
        }else{
            if(i[i.length-1] != 'true'){
                if(users[i[0]] == data){
                    i.push('true')
                    process.stdout.write('密码输入正确\n')
                }else{
                    process.stdout.write('密码输入错误，请重新输入：\n')
                }
            }else{
                if(data == '退出'){
                    i = []
                    process.stdout.write('请输入用户名：\n')
                }else{
                    process.stdout.write('')
                }
            }
        }
    }else{
        process.stdout.write('用户名输入错误，请重新输入：\n请输入用户名：\n')
    }
})