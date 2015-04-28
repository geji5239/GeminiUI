$(function()
{
//鼠标经过按钮变色效果
	$(".homebutton").mouseover(function(){$(this).attr("style","background-color:#159FF2")});
	$(".homebutton").mouseout(function(){$(this).attr("style","background-color:")});

	$(".iconlg").mouseover(function(){$(this).attr("style","filter:alpha(opacity=50);-moz-opacity:0.5;opacity:0.5;")})
	$(".iconlg").mouseout(function(){$(this).attr("style","filter:")});

//初始状态子菜单隐藏
    backTohome();

//主菜单点击进入子菜单
$(".block").bind("click",function(){
	var i=$(".block").index($(this))+1;
	$("h1").hide();
	$(".arrowleft").show();
	$("#mainmenu").hide();//隐藏左侧主菜单
	$("#commonmenu").hide();//隐藏中部常用菜单
	$("#todolist").hide();//隐藏右侧菜单
	$("#menu"+i).show();//子菜单左侧大标题
    $("#menulist").show();
    })

})

//返回初始页面
function backTohome(){
	$("h1").show();
	$(".arrowleft").hide();
	$("#mainmenu").show();
	$("#commonmenu").show();
	$("#todolist").show();
	for (var i = 0; i <=6; i++) 
    {
        $("#menu"+i).hide();
    };
	$("#menulist").hide();

}