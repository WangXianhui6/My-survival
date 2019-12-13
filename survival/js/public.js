//设置页面fontsize
let fontsize
let {log} = console
$(window).resize(function(){
	htmlFonts()
})
$(function(){
	// 页面加载完成之后设置一次html的fontsize
	let length = $('img').length
	$('img').on('load',function(){
		length--
		if(length<=0){
			htmlFonts()
		}
	})
	$(".survival-top .top-modal>ul>li").addClass('btn-center-slide')
	
	//顶部导航
	$(".survival-top .top-modal").mouseenter(function(){
		$(this).find('.list').stop(false).show(300)
	})
	$(".survival-top .top-modal").mouseleave(function(){
		$(this).find('.list').stop(false).hide(300)
	})
	
	//滚动页面时让顶部固定
	$(document).scroll(function(){
		//由滚动条设置顶部导航为固定定位
		if($(document).scrollTop()>=70){
			$(".survival-top").css({
				position: 'fixed',
				'box-shadow': '0 0 .1rem cadetblue'
			})
			$(".right-aside>div:last-child").show(300)
		}else{
			$(".survival-top").css({
				position: 'none',
				'box-shadow': 'none'
			})
			$(".right-aside>div:last-child").hide(300)
		}
	})
	
	$(".survival-top .top-modal.top-search a").click(function(){
		$(".survival-top>.my-model").stop().slideToggle(300)
	})
	
	$(".survival-top>.top-arrow").click(function(){
		$(".survival-top>.top-arrow").toggleClass('on')
		$(".survival-top>.top-shoufengqin").slideToggle(300)
	})
	$(".survival-top>.top-shoufengqin>li").click(function(){
		$(this).find('div.hidechoose').slideToggle(300)
		$(this).siblings().find('div.hidechoose').slideUp(300)
		$(this).find('a.symbel').toggleClass('show')
		$(this).siblings().find('.symbel:first').addClass('show')
		$(this).siblings().find('.symbel:last').removeClass('show')
	})
})
//设置fontsize的函数
function htmlFonts(){
	var $window = $(window),           
	ww = $window.width(),
	wh = $window.height();
	var FontSize = (100/1200)*ww;
	$('html').css('font-size',FontSize);
	$(window).resize(function(){
	var ww = window.innerWidth,
	       FontSize = (100/1200)*ww;
		$('html').css('font-size',FontSize);
	})
}
