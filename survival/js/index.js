let length = $('img').length
let control = 0
$('img').on('load',function(){
	length--
	if(length<=0){
		carosol()
	}
})
$(window).resize(function(){
	carosol()
})
function carosol(){
	if($(document).width()<=990){
		$(".fly-shop-carosol-outer>.shop-carosol-inner>div").innerWidth($(".fly-shop-carosol-outer").innerWidth()/2)
	}else{
		$(".fly-shop-carosol-outer>.shop-carosol-inner>div").innerWidth($(".fly-shop-carosol-outer").innerWidth()/3)
	}
	$(".fly-carousel-outer>.carousel-inner>div").innerWidth($(".fly-carousel-outer").innerWidth())
	$(".fly-carousel-outer>.carousel-inner").innerWidth($(".fly-carousel-outer>.carousel-inner>div").innerWidth()*$(".fly-carousel-outer>.carousel-inner>div").length)
	
	
	$(".fly-shop-carosol-outer>.shop-carosol-inner").innerWidth($(".fly-shop-carosol-outer>.shop-carosol-inner>div").innerWidth()*$(".fly-shop-carosol-outer>.shop-carosol-inner>div").length)
	
	if($(document).width()<=990){
		$.slunbo($(".fly-shop-carosol-outer>.shop-carosol-inner>div"),$(".fly-shop-carosol-outer>.radius"))
	}else{
		$.lunboS($(".fly-shop-carosol-outer>.shop-carosol-inner>div"),$(".fly-shop-carosol-outer>.radius"))
	}
	$(".fly-video").click(function(){
		$(this).find('.bg-fly-video').toggleClass('show').siblings().toggleClass('show')
		$(this).find('.fly-video-btn').toggle()
		if(control%2 == 0){
			$(this)[0].querySelector('video').play()
		}else{
			$(this)[0].querySelector('video').pause()
		}
		control++
	})
}


// 屏幕滑动模块渐变出现
// $.srollTransform($('div.hideitem'))   
// $('div.hideitem')是需要滑动的模块    需要此效果的模块都需要添加一个hideitem类名
$(document).scroll(function(){
	$.srollTransform($('div.hideitem'))
})

$.srollTransform($('div.hideitem'))
