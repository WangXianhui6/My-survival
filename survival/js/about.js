

$(function() {

	//发展史的横线高度
	$('.flow-list').hover(function() {
		_this = $(this).index();
		LH = 0;
		$(this).addClass('this').siblings().removeClass('this');
		for(i = 0; i <= _this; i++) {
			console.log($('.flow-list').eq(i - 1).height())
			LH = LH + $('.flow-list').eq(i - 1).height();
		}
		$('.about-history .line-ef').height(LH - 52);
	})
})

//window.onload =function(){
	$(function(){
		console.log($('.news-tab'))
		let length = $("img").length;
		$('img').each(function(){
			this.onload = function(){
				length--
				if(length <=0) {
					$('.news-tab').addClass('active')
					$('.sight-top-img-text').addClass('active')
				}
			}
		})
		
		
	})
	
//	$(function(){
//		$('.news-tab').addClass('active')
//		$('.sight-top-img-text').addClass('active')
//	})
//	
	window.onscroll = function() {
		var scrolltop = document.body.scrollTop || document.documentElement.scrollTop
	
		if(scrolltop >= 130) {
			$(function() {
				$('.about-introduce-text').addClass('active')
			})
		}
		
		if(scrolltop >= 300) {
			$(function() {
				$('.about-company-h2').addClass('active')
			})
		}
		
		if(scrolltop >= 400) {
			$(function() {
				$('.about-company-text').addClass('active')
			})
		}
		
		if(scrolltop >= 1300) {
			$(function() {
				$('.about-company-bottomimg').addClass('active')
			})
		}
	}
//}






//$(function() {
//
//	//发展史的横线高度
//	$('.flow-list').hover(function() {
//		_this = $(this).index();
//		LH = 0;
//		$(this).addClass('this').siblings().removeClass('this');
//		for(i = 0; i <= _this; i++) {
//			console.log($('.flow-list').eq(i - 1).height())
//			LH = LH + $('.flow-list').eq(i - 1).height();
//		}
//		$('.about-history .line-ef').height(LH - 52);
//	})
//})

//tab切换
$(".tab-title").click(function() {

	$(this).addClass('on')
	$(this).siblings().removeClass('on')

	var index = $(this).index()-1;

	var parent = $(this).parents('.tab-box')

	var ele = parent.find('.tab-list')

    ele.eq(index).siblings().removeClass('on')
	ele.eq(index).addClass('on')
})

//
$('.about-customer-list').mouseenter(function(){
	$(this).addClass('this')
	$(this).removeClass('this')
	
	var pro=$(this).find('.desc')
	
	pro.siblings().removeClass('on')
	pro.addClass('on')
})

$('.about-customer-list').mouseleave(function(){
	
	var pro=$(this).find('.desc')
	
	pro.siblings().removeClass('on')
})

//家居tab切换
$('.news-tab-list').hover(function() {
	if($(this).hasClass('on')) {
		$(this).removeClass('on')
	} else {
		$(this).addClass('on')
	}
})
