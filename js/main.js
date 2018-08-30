$(document).ready(function() {

	//初始化轮播，并设置切换时间，单位毫秒
	$('#recommend').carousel({
		interval: 3000
	});
	//用户登陆
	$("#userimg").mouseenter(function() {
		$("#userselect").css("display","block");
	});
	$("#userimg").mouseleave(function() {
		$("#userselect").css("display","none");
	});
	
	$("#userselect").mouseover(function() {
		$("#userselect").css("display","block");
	});
	$("#userselect").mouseout(function() {
		$("#userselect").css("display","none");
	});
	
	//隐藏页面展开
	$(".title2-li").mouseenter (function(){
		$("#ycbody-ul").css("animation","0");
		$(".ycbody").css({"animation":"cy 0.3s","animation-timing-function":"ease-out"});
		$(".ycbody").css("height","156px");
		$("#ycbody-ul").css("animation","yc-move 1.5s");
	});

	$(".title2-li").mouseout(function(){
		$(".ycbody").css("animation","0");
		$(".ycbody").css("height","0");
	});
	$(".ycbody").mouseenter(function(){
		$(".ycbody").css("height","156px");
	});
	$(".ycbody").mouseleave(function(){	
		$(".ycbody").css("height","0");
	});
	
});