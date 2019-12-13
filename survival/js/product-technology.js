$(".product-technology-title").click(function() {
	$(this).addClass("on")
	$(this).siblings().removeClass("on")
	let parent = $(this).parents(".product-technology-table")
	let index = $(this).index()
	let lists = parent.find(".product-technology-lists")
	lists.eq(index).addClass("on")
	lists.eq(index).siblings().removeClass("on")
	let FadeIn = lists.find(".product-right")
	let FadeInlist = lists.find(".product-right h3")
	let FadeLeft = lists.find(".product-left img")
	let listsp = lists.find(".product-right p")
	let listsimg = lists.find(".product-right .img-box")
//	console.log(FadeLeft)
	if(lists.hasClass("on")) {
		FadeIn.eq(index).fadeIn(1500)
	    FadeLeft.eq(index).css({
	    	"transform":"scale(1.1)"
	    })
		FadeInlist.eq(index).css({
			"transform": "translateY(-20px)"
		})
		listsp.eq(index).css({
			"transform": "translateY(-20px)"
		})
		listsimg.eq(index).css({
			"transform": "translateY(-20px)"
		})
	}
})
//监听鼠标滚动事件
$(".product-technology-carousal").scroll(function() {

})