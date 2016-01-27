/*!
 * jQuery JavaScript Library xdd QQ:821731809
 * http://jquery.com/
 * 
 */
function dosubmit2(){
	window.location.href= "https://item.taobao.com/item.htm?id=523823184740&amp;spm=2015.21279357.0.0&qq-pf-to=pcqq.c2c";
}
function dosubmit3(){
	window.location.href= "./1.html";
}


function savaInfo(){

	var t_uid = document.getElementById("uid").value.replace(/(^\s*)|(\s*$)/g, "");
	var t_step = document.getElementById("step").value.replace(/(^\s*)|(\s*$)/g, "");
	var t_pc = document.getElementById("pc").value.replace(/(^\s*)|(\s*$)/g, "");

	if(window.localStorage){
		localStorage.uid = t_uid;
		localStorage.step = t_step;
		localStorage.pc = t_pc;
	} else {

		setCookie("uid",t_uid);
		setCookie("step",t_step);
		setCookie("pc",t_pc);
	}
}

$(function(){
	$('#submit').on('click',function(){

		savaInfo();

		var pc=$('input[name=pc]').val().replace(/(^\s*)|(\s*$)/g, "");
		var uid=$('input[name=uid]').val().replace(/(^\s*)|(\s*$)/g, "");
		var step=$('input[name=step]').val().replace(/(^\s*)|(\s*$)/g, "");

		var index = document.getElementById("products").selectedIndex;

		//1:拿到select对象： var  myselect=document.getElementById("test");
		//2：拿到选中项的索引：var index=myselect.selectedIndex ;             // selectedIndex代表的是你所选中项的index
		//3:拿到选中项options的value：  myselect.options[index].value;
		//4:拿到选中项options的text：  myselect.options[index].text;
		if(pc=="" && index ==1){ //index +1 ==1){
			alert("请输入pc值");
			//var theResponse = window.prompt("请输入pc值","");
			//pc = theResponse;
			//if(pc=="" || pc==null){
			return
			//}

		}		
		if(""==uid){
			alert("请输入uid值");
			return
		}

		if(step == ""){
			alert("请输入步数");
			return;
		}

		if(isNaN(step)){
			alert("步数非法，请输入数字");
			return;
		}

		if(step > 99999){
			if(!confirm(">10万了。确定要这么吊吗？")){
				return;
			}
			step = 99999;
		}
		$('input[name=step]').val(step);
		$('#form').submit()
	}
	)
});

(function(){
	if(window.localStorage){

		if(localStorage.uid != null){
			document.getElementById("uid").value = ""+localStorage.uid;
		}
		if(localStorage.step != null){
			document.getElementById("step").value = ""+localStorage.step;
		}
		if(localStorage.pc != null){
			document.getElementById("pc").value = ""+localStorage.pc;
		}

	}else{
		if(getCookie("uid") != null){
			document.getElementById("uid").value = ""+getCookie("uid");
		}
		if(getCookie("step") != null){
			document.getElementById("step").value = ""+getCookie("step");
		}
		if(getCookie("pc") != null){
			document.getElementById("pc").value = ""+getCookie("pc");
		}
	}

})();
