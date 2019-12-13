let wid
let fontsize
let api = 'http://192.168.97.249:3003/'
let {log} = console
let classHtml = ''
htmlFonts()
$(window).resize(function(){
	htmlFonts()
})
function htmlFonts(){
	wid = window.screen.availWidth
	fontsize = $(document).width()*100/wid
	$('html').css('font-size',fontsize)
}

// 提示信息
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

$(function(){
	let userMessage = window.localStorage.getItem('message')
	let index = 1
	userMessage = JSON.parse(userMessage)
	console.log(userMessage)
	if(window.localStorage.getItem('token')&&userMessage){
		$('.bottom .top>div.username>a').html('欢迎您：'+userMessage.username)
		$('.bottom>.bottom-bottom>.bottom-left>img').attr('src',userMessage.head)
		// get请求获取商品列表
		getgoods()
	}
	
	// ajax请求
	{
		// get请求获取商品分类
		$.ajax({
			type:"get",
			url: api+"class",
			datatype: 'json',
			success: function(res){
				if(res.status == 200){
					for(let item of res.data){
						classHtml = `<option value="${item.s_id}">${item.c_name}</option>`
						$(".add-modal>.add-modal-content>.add-modal-body select").append(classHtml)
					}
				}
			}
		})
	
		// 点击之后post请求向数据库添加数据
		$(".add-modal-content>.add-modal-footer>.save").on('click',function(){
			if(window.localStorage.getItem('token')){
				let classifyPost = document.querySelector('.add-modal>.add-modal-content>.add-modal-body>.post-classify')
				let formData = new FormData(classifyPost)
				$.ajax({
					url: api+'postclass',
					type: 'post',
					data: formData,
					datatype: 'json',
					contentType: false,//将传送的文件格式转为json格式传送
					processData: false,//限定文件传送数据格式
					success: function(res){
						// 添加成功之后返回给页面   先删除在添加
						$('.bottom-right>.all-shop').find('.shop-all').remove()
						getgoods()
					}
				})
			}else{
				prov({message:'请先登录'})
			}
		})
	
		//点击进行商品删除
		$('.bottom-right>.all-shop').on('click','div .operate span.delete',function(){
			let id = $(this).closest('.shop-all').find('.shop-num').html()
			let sure = confirm('确定是否删除 '+id+' 号商品？')
			if(sure == true){
				$.ajax({
					url: api+'delete',
					type:'post',
					data:{
						id: id,
						user: userMessage.username
					},
					datatype:'json',
					success:function(res){
						if(res.status == 200){
							$(this).closest('.shop-all').remove()
						}else{
							prov(res)
						}
						addPageBtn()
					}
				})
			}
		})
		
		// 退出登录
		$('.bottom .top>div.loginout>a').click(function(){
			if(window.localStorage.getItem('token')){
				$.ajax({
					url: api+'loginout',
					type: 'post',
					data: {},
					datatype:'json',
					success:function(res){
						window.localStorage.removeItem('token')
						location.reload()
					}
				})
			}
		})
	}
	
	// 页面逻辑
	{
		// 未登录，点击进入登录页面
		$('.bottom .top>div.username>a').click(function(){
			if($(this).html() == '请登录'){
				window.location.href = 'back-login.html'
			}
		})
		
		
		// 点击修改    热 促 新 推    的透明度
		$(".all-shop").on('click','.word',function(){
			$(this).css('opacity','0.3')
		})
	
		// 控制复选框是否全选
		// a表示选中的复选框数量
		let a = 0
		$(".all-shop").on('click','.shop-all input',function(){
			$(".all-shop .shop-all input").each(function(){
				if($(this).prop('checked') == true){
					a++;
				}
			})
			if(a == $(".all-shop .shop-all input").length){
				$(".bottom-right>.all-shop>.shop-head input").prop('checked',true)
			}else{
				$(".bottom-right>.all-shop>.shop-head input").prop('checked',false)
				a = 0
			}
		})

		// 点击全选复选框，让所有复选框全选
		$(".bottom-right>.all-shop>.shop-head input").click(function(){
			$(".bottom-right .shop-all input").prop('checked',$(".bottom-right>.all-shop>.shop-head input").prop('checked'))
		})
	
		// 点击按钮进行
		$(".bottom-bottom>.bottom-right>.prov>div:last-child").click(function(){
			$(this).find('div').toggleClass('show')
			$(".bottom-bottom>.bottom-right>.some-prov").slideToggle(300)
		})

		// 点击出现分类的类别
		$(".search>div>.please-choose>span").click(function(){
			$(this).closest('.search-one').find('div.absolute').slideToggle(300)
			$(this).closest('.search-one').siblings().find('div.absolute').slideUp(300)
		})
	
		// 点击添加类别的边框
		$(".please-choose .detail-classify>div li").click(function(){
			$(this).addClass('border')
			$(this).siblings().removeClass('border')
		})
	
		// 点击确定后收起类别选择
		$('div.absolute>.choose-result>.resure').click(function(){
			$('.search .please-choose>div.absolute').slideUp(300)
		})
	
		// 点击出现模态框
		$(".bottom-right>ul>li:first").click(function(){
			$(".add-modal").show(300)
	//		$(".add-modal>.add-modal-content").slideUp()
		})
	
		// 点击模态框的X关闭模态框
		$(".add-modal>.add-modal-content>.add-modal-title>.add-modal-close").click(function(){
			$(".add-modal").hide(300)
		})
	
		// 点击模态框的确认按钮，关闭模态框
		$(".add-modal-content>.add-modal-footer>.save").click(function(){
			$(".add-modal").hide(300)
		})

		// 点击商品图片放大观看
		$('.bottom-right>.all-shop').on('click','img',function(){
			$('.big-img').show(300)
			$('.big-img>img').attr('src',$(this).attr('src'))
			$('.big-img').width($(document).width())
			$('.big-img').height($(document).height())
		})
	
		$('.big-img').click(function(){
			$(this).hide(300)
		})
	
		//点击翻页
		$('.bottom-right>.all-shop>.changepage').on('click','span.page',function(){
			index = $(this).index()
			chanPage(index)
		})
		$('.bottom-right>.all-shop>.changepage').on('click','span:first',function(){
			if(index!=$(this).index()+1){
				index --
				chanPage(index)
			}
		})
		$('.bottom-right>.all-shop>.changepage').on('click','span:last',function(){
			if(index!=$(this).index()-1){
				index ++
				chanPage(index)
			}
		})
		
		
	}

	// 获取商品的方法
	function getgoods(){
		$.ajax({
			url: api+'list',
			type: 'get',
			success: function(res){
				if(res.status == 200){
					let html = ''
					for(let item of res.data){
						html += 
						`<div class="shop-all content clearfix">
							<div class="order"><input type="checkbox" /></div>
							<div class="shop-num">${item.id}</div>
							<div class="type flex-betwe overflow name">
								<div><img src="${item.img}" alt="" /></div>
								<div class="intro">
									<div class="overflow-1 shop-name">${item.nam}</div>
									<div class="flex-betwe">
										<div class="word cu">促</div>
										<div class="word hot">热</div>
										<div class="word new">新</div>
										<div class="word push">推</div>
										<div class="fontc-blue">查看商品属性</div>
									</div>
								</div>
							</div>
							<div class="type name overflow">
								<div class="intro">
									<div class="overflow-1">品牌名称</div>
									<div class="intro">${item.c_name}</div>
								</div>
							</div>
							<div class="price-ope"><span>￥</span><span class="price-num">${item.price}</span></div>
							<div class="order">${item.store}</div>
							<div class="order overflow-1">${item.id}</div>
							<div class="order fontc-blue cursor-poi">✔</div>
							<div class="price-ope name">
								<div class="intro operate">
									<div><span>查看</span></div>
									<div>
										<span class="edit">编辑</span>
										<span class="delete">删除</span>
									</div>
								</div>
							</div>
						</div>`
					}
					$(".bottom-right>.all-shop>.shop-content").html(html)
					addPageBtn()
				}
			}
		})
	}
	
	//添加翻页按钮
	function addPageBtn(){
		let page = ``
		let length = Math.ceil($('.bottom-right>.all-shop .shop-all').length)
		console.log(length)
		$('.bottom-right>.all-shop>.changepage>div').empty()
		for(let i = 0;i<Math.ceil(length/5);i++){
			page = `<span class="page">${i+1}</span>`
			$('.bottom-right>.all-shop>.changepage>div').append(page)
		}
		if(length/5>0){
			$('.bottom-right>.all-shop>.changepage>div').prepend(`<span class="change">上一页</span>`)
			$('.bottom-right>.all-shop>.changepage>div').append(`<span class="change">下一页</span>`)
		}
		$('.bottom-right>.all-shop>.changepage span.page').eq(index-1).addClass('on')
	}
	
	//上下翻页
	function chanPage(i){
		$('.bottom-right>.all-shop>.changepage span.page').eq(i-1).addClass('on').siblings().removeClass('on')
		let length = $('.bottom-right>.all-shop>.shop-content>.shop-all').length
		let beScrTop = 0
		if(Math.ceil(length/5)-1 == i-1){
			beScrTop = $('.bottom-right>.all-shop>.shop-content>.shop-all').innerHeight()*(length-5)
		}else{
			beScrTop = $('.bottom-right>.all-shop>.shop-content>.shop-all').innerHeight()*5*(i-1)
		}
		let instend = beScrTop-$('.bottom-right>.all-shop>.shop-content').scrollTop()
		let speed = instend/100>0?(instend/100>1?instend/100:1):(instend/100<-1?instend/100:-1)
		let timing = setInterval(function(){
			$('.bottom-right>.all-shop>.shop-content').scrollTop($('.bottom-right>.all-shop>.shop-content').scrollTop()+speed)
			instend = speed>0?(beScrTop-$('.bottom-right>.all-shop>.shop-content').scrollTop()):($('.bottom-right>.all-shop>.shop-content').scrollTop()-beScrTop)
			if(instend<=1){
				clearInterval(timing)
			}
		},1)
	}
})