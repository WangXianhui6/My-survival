//添加留言  调整个表单
$('.btn-submit').click(function(){
	//必须用js 获取form表单 传的是js对象 FormData中需要js对象
    let form = document.querySelector('.from-validate')
    console.log(1111)
    //将表单中的数据 转为对象传送
    let formdata = new FormData(form)
     $.ajax({
        url:api + 'suggest',
        type:'post',
        data:formdata,
        dataType:'json',
        //将传送文件的格式改为json 传送
        contentType:false,
        // 限定文件数据传送格式
        processData:false,
        success:function(res){
            if(res.status == 200) {
                $.tooltip({
                    type:'success',
                    content: '提交成功'
                })
                $("[name=username]").val('');
        		$("[name=phone]").val('');
        		$("[name=email]").val('');
        		$("[name=msg]").val('');
        		
            }else{
            	$.tooltip({
                    type: 'error',
                    content: res.message
                })
            	
            }
        }
    })
})
