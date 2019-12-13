// 文档加载完成
$(function(){
    // 验证表单
    $(".from-validate").validate({
        rules: {
        	phone:{
            	required: true,
            	phone:true
            },
            email: {
                required: true,
                email: true
            }
            
        },
        
        messages: {
        	phone:{
            	required:"请输入正确的电话号码",
            },
            email: {
                required: "邮箱不能为空！",
                email: "请输入有效的邮箱地址，如：98898@qq.com"
            }
    	}
    })
})   

//添加规则  自定义验证$.validator.addMethod(验证名字,验证的方法，验证错误信息)
$.validator.addMethod('phone',function(value,element){
//	console.log(value,element)
	var reg=/^1[345678]\d{9}$/;
	console.log(reg.test(value))
	return reg.test(value)
	
},'请输入正确的电话号码')

