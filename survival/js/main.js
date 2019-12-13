
//var $window = $(window),           
//ww = window.innerWidth,
//wh = $window.height();
//var FontSize = (100/1200)*ww;
//$('html').css('font-size',FontSize);
//$(window).resize(function(){
//	var innerW = window.innerWidth,
//  FontSize = (100/1200)*innerW;
////  console.log(FontSize)
//	$('html').css('font-size',FontSize);
//})

//添加头部底部
$('.fly-head').load('public-head.html')
$('.fly-bottom').load('public-bottom.html')

//常见问题 服务支持 页面切换效果
$('.fly-side-list').click(function(){
	$(this).addClass('this').siblings().removeClass('this')
	let showpage=$(this).attr('data-on')
    $('.'+showpage).addClass('show').siblings().removeClass('show')
})

$('.fly-list').click(function(){
	$(this).addClass('this').siblings().removeClass('this')
	let showpage=$(this).attr('data-on')
    $('.'+showpage).addClass('show').siblings().removeClass('show')
})
	
//导航条距离顶部多少像素时 侧边导航的位置 和效果	
scrollTop()
window.onscroll = function(){
	scrollTop()
}

function scrollTop(){
	//获取滚动的距离
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop

	if(scrollTop >=100){
		$(".fly-question").addClass("fixed")
	}else{
		$(".fly-question").removeClass("fixed")
	}

//	if(scrollTop>=1600){
//		$('.fly-service-aside').css({top:'-132px'})
//	}else{
//		$('.fly-service-aside').css({top:'85px'})
//	}
}


//产品选型效果切换
$('.fly-scene-list').click(function(){
	$(this).addClass('this').siblings().removeClass('this')
})

//按钮效果切换
$('.fly-select-btn').click(function(){
	$(this).addClass('this').parent().siblings().children('.fly-select-btn').removeClass('this')

	
})

$.lunboS($('.carousel-box .fly-swiper-list'),$('.carousel-box .fly-dot-box'))

$(document).scroll(function(){
	$.srollTransform($('div.hideitem'))
})

$.srollTransform($('div.hideitem'))
