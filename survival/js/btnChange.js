//点击上下页换页按钮换页
function tabchange(btn,tabbox,tablist,prev,next){
	console.log(btn)
	let index = 0
	//点击指定页码
	$(btn).click(function(){
	    index=$(this).index()-1;
	    let parent = $(this).closest(tabbox);
	    parent.find(btn).eq(index).addClass('on').siblings().removeClass('on');
	    parent.find(tablist).eq(index).addClass('active').siblings().removeClass('active')
	})
	
	//上一页
	$(prev).click(function(){
		if(index == 0) {
			$(this).css({cursor:'not-allowed'})
			return false
		}
		index--
		let parent = $(this).closest(tabbox)
		parent.find(tablist).eq(index).addClass('active').siblings().removeClass('active')
		parent.find(btn).eq(index).addClass('on').siblings().removeClass('on')
		$(next).css({cursor:'pointer'})
		if(index <=0) {
			$(this).css({cursor:'not-allowed'})	
		}
	})
	
	//下一页
	$(next).click(function() {
		if(index >= $(btn).length-1 ) return false
		index++
		let parent = $(this).closest(tabbox)
		parent.find(tablist).eq(index).addClass('active').siblings().removeClass('active')
		parent.find(btn).eq(index).addClass('on').siblings().removeClass('on')
		$(prev).css({cursor:'allowed'})
		if(index == $(btn).length-1) {
			$(this).css({cursor:'not-allowed'})
		}
	})
}


console.log(tabchange())
