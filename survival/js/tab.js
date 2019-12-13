

$(".news-tab-list").click(function(){
	
	$(this).addClass('on')
	$(this).siblings().removeClass('on')
	var index = $(this).index()
	console.log(index)
	var parent = $(this).parents('.tab-box')
	var ele = parent.find(".join-in")
	
	ele.eq(index).addClass('on')
	ele.eq(index).siblings().removeClass('on')
})


$(".swiper-pagination-bullet").click(function(){
	
	$(this).addClass('on')
	$(this).siblings().removeClass('on')
	var index = $(this).index()
	console.log(index)
	var parent = $(this).parents('.advtage')
	var ele = parent.find(".fly-actoc")	
	ele.eq(index).addClass('on')
	ele.eq(index).siblings().removeClass('on')
})

$('img').on('load',function(){
	widset()
})

window.onresize = function(){
	widset()
}
function widset(){
	if($(document).width()<=1000){
		$(".swiper-wrapper").innerWidth($(".swiper-wrapper").parent().parent().width()/2);
	}else{
		$(".swiper-wrapper").innerWidth($(".swiper-wrapper").parent().parent().width()/3);
	}
	$(".swiper-wrapper").parent().innerWidth($(".swiper-wrapper").innerWidth()*$(".swiper-wrapper").length)
}
$.lunboS($(".swiper-wrapper"),$(".fly-dot-box"))