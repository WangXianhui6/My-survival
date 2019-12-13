$(function(){
	$.ajax({
		url:api+'lunbo',
		type:'get',
		dataType:'json',
		success:function(res){
			let html = '';
			let html1 ='';
			console.log(res.data)
			let item =res.data
			//图片轮播 效果一
			for(let i in item){
				html +=`<div><img src="${item[i].img}" alt="图片" /></div>`
			}
			html +=`<div><img src="${item[0].img}" alt="图片" /></div>`
			$('.carousel-inner').append(html)
			$.lunbo($(".fly-carousel-outer>.carousel-inner>div"),$(".fly-carousel-outer>.radius.fly-dot-box"))
			
			//图片轮播 效果二
			for(let i in item){
				html1 +=`
					<li class="swiper-wrapper">
						<img src="${item[i].img}" />
						<div class="pro"></div>
					</li>`
			}
			html1 +=`
					<li class="swiper-wrapper">
						<img src="${item[0].img}" />
						<div class="pro"></div>
					</li>`
			$('.footcome').append(html1)
			$.lunboS($(".swiper-wrapper"),$(".fly-dot-box"))
		}
	})
})
