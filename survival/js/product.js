$(".carousel").carousel({
	interval:2000
})


 $('.product-table-title').click(function(){
        $(this).addClass('show')
        $(this).siblings().removeClass('show')
        var parent=$(this).parents('.product-table-box')
        var index =$(this).index()
        var lists=parent.find('.product-table-lists')
        lists.eq(index).addClass('show')
        lists.eq(index).siblings().removeClass('show')
    })