$("#queryCategoryLevel1").change(function(){
	//获取到一级分类的值
	var level1 = $(this).val();
	if(level1 != "" && level1 != null){
		$.ajax({
			type:"GET",//请求类型
			url:"categoryLevelList.json",//请求的url
			data:{pid:level1},
			dataType:"json",//请求返回的数据类型
			success:function(data){//data：返回的json对象
				$("#queryCategoryLevel2").html("");
				var options = "<option value=''>-- 请选择--</option>";
				for(var i=0;i<data.length;i++){
					options += "<option value='"+ data[i].id +"'>"+ data[i].categoryName
								+"</option>";
				}
				$("#queryCategoryLevel2").html(options);
			},
			error:function(data){ //当访问的时候，可能会出现404、505等问题
				alert("加载二级分类失败!");
			}
		});
	}else{
		$("##queryCategoryLevel2").html();
		var options = "<option value=''>-- 请选择--</option>";
		$("##queryCategoryLevel2").html(options);
	}
	$("##queryCategoryLevel3").html();
	var options = "<option value=''>-- 请选择--</option>";
	$("##queryCategoryLevel3").html(options);
});

$("#queryCategoryLevel2").change(function(){
	var queryCategoryLevel2 = $("#queryCategoryLevel2").val();
	if(queryCategoryLevel2 != '' && queryCategoryLevel2 != null){
		$.ajax({
			type:"GET",//请求类型
			url:"categoryLevelList.json",//请求的url
			data:{pid:queryCategoryLevel2},//请求参数
			dataType:"json",//ajax接口（请求url）返回的数据类型
			success:function(data){//data：返回数据（json对象）
				$("#queryCategoryLevel3").html("");
				var options = "<option value=\"\">--请选择--</option>";
				for(var i = 0; i < data.length; i++){
					//alert(data[i].id);
					//alert(data[i].categoryName);
					options += "<option value=\""+data[i].id+"\">"+data[i].categoryName+"</option>";
				}
				$("#queryCategoryLevel3").html(options);
			},
			error:function(data){//当访问时候，404，500 等非200的错误状态码
				alert("加载三级分类失败！");
			}
		});
	}else{
		$("#queryCategoryLevel3").html("");
		var options = "<option value=\"\">--请选择--</option>";
		$("#queryCategoryLevel3").html(options);
	}
});