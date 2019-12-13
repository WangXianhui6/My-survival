//商品名录渲染
$(function(){
	$.ajax({
		url:api+'company',
		type:'get',
		dataType:'json',
		success:function(res){
			let html = '';
			console.log(res)
			let item =res.data
			for(let i in item){
				html +=`
					<li class="agency-list age list">
					  <div class="sort"><span>${item[i].id}</span></div>
					  <div class="area"><span>${item[i].province}</span></div>
					  <div class="name"><span>${item[i].company}</span></div>
					  <div class="address"><span>${item[i].address}</span></div>
					</li>
				`
			}
			$('.agency-item').append(html)
		}
	})
})
