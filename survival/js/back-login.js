$(".log-res>.title>.login-regis>div").click(function(){
	$(this).closest('.log-res').removeClass('on')
	$(this).closest('.log-res').siblings().addClass('on')
})
$(function(){
	window.localStorage.removeItem('token','message')
	// 验证注册填写格式
	$(".register>.form-login").validate({
		rules:{
			email:{
				required:true,
				email:true
			},
			code:{
				required:true,
			},
			username:{
				required:true,
			},
			pwd:{
				required:true,
				rangelength:[8,16]
			},
			repwd:{
				required:true,
				equalTo:$(".register>.form-login [name=pwd]")
			}
		},
		messages:{
			email:{
				required:'邮箱不能为空',
				email:'邮箱格式不正确'
			},
			code:{
				required:'验证码不能为空',
			},
			username:{
				required:'用户名不能为空',
			},
			pwd:{
				required:'密码不能为空',
				rangelength:'请输入8到16位的密码'
			},
			repwd:{
				required:'请再次输入密码',
				equalTo:'前后密码不一致'
			}
		}
	})
	
	// 验证登录填写格式
	$(".login>.form-login").validate({
		rules:{
			email:{
				required:true,
				email: true
			},
			pwd:{
				required:true,
				rangelength:[8,16]
			}
		},
		messages:{
			email:{
				required:'email不能为空',
				email: 'email格式不正确'
			},
			pwd:{
				required:'密码不能为空',
				rangelength:'请输入8到16位的密码'
			}
		}
	})
	
	// 注册请求
	$(".register>.form-login>div>span.regis-btn").click(function(){
		if($(".register>.form-login").valid()){
//			if($('.form-login input, .form-login select').val() == 1){
//				$('.success-model').append(``)
//				$('.success-model').fadeIn(300)
//			}
			let regisForm = document.querySelector(".register>.form-login")
			let pwd = $(".register>.form-login [id=pwd]").val()
			$(".register>.form-login [name=pwd]").val($.md5(pwd))
			let formData = new FormData(regisForm)
			$.ajax({
				type:"post",
				url:api+"register",
				data:formData,
				contentType: false,
				processData: false,
				success:function(res){
					if(res.status == 200){
						location.reload();
					}
					prov(res)
				}
			})
		}
	})
	
	// 登录请求
	$(".login>.form-login>div>span.login-btn").click(function(){
		if($(".login>.form-login").valid()){
			if((window.localStorage.getItem('token') != 'online')){
				let email = $(".login>.form-login [name=email]").val()
				let pwd = $(".login>.form-login [name=pwd]").val()
				pwd = $.md5(pwd)
				$.ajax({
					type:"post",
					url:api+"login",
					data:{
						email:email,
						pwd:pwd
					},
					success:function(res){
						prov(res)
						if(res.status == 200){
							let message = JSON.stringify(res.data)
							console.log(message)
							window.localStorage.setItem('token','online')
							window.localStorage.setItem('message',message)
							setTimeout(function(){
								if(res.identify == 2){
									window.location.href = 'index.html'
								}else if(res.identify == 1){
									window.location.href = 'back.html'
								}
							},2000)
						}
					}
				})
			}else{
				prov({
					status:'',
					message: '用户已登录'
				})
			}
		}
	})
	
	// 获取邮箱验证码
	$(".register>.form-login .getcode").click(function(){
		let email = $(".register>.form-login [name=email]").val();
        let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if(email&&reg.test(email)){
        	$.ajax({
				url: api+'getcode',
				data: {
					email: email
				},
				type: 'get',
				datatype: 'json',
				success: function(res){
					if(res.status == 200){
						$(".register>.form-login [name=code]").val(res.data)
					}
					prov(res)
				}
			})
        }
	})
})

function prov(option){
	$('.success-model').fadeIn(300)
	if(option.status == 200){
		$('.success-model').removeClass('err').empty().addClass('succ').append(option.message)
	}else{
		$('.success-model').removeClass('succ').empty().addClass('err').append(option.message)
	}
	setTimeout(function(){
		$('.success-model').fadeOut(300)
	},2000)
}
