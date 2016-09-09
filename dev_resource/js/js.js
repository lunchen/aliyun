var dian = 1;
function haha(){
	var $yuan = $(".yuan");
	$(".yuan").click(function(){
		for(var i=0,len=$yuan.length;i<len;i++){
			index = $(this).index()+1;
			$(this).addClass("active").siblings().removeClass("active");
		}
		$(".backgrounds li:nth-of-type(" + index + ")").css("display","none").fadeIn(1000).siblings().css("display","none");
		$(".page:nth-of-type(" + index + ")").css({"display":"none","top":"-30px"}).animate({top: 0, opacity: 'show'}, "slow").siblings().css({"display":"none","top":"-30px"});
		dian = index;
	});
	$(".yuan:nth-of-type(1)").click();
}
haha();
setInterval(function(){
	++dian;
	if(dian === 6){
		$(".yuan:nth-of-type(1)").click();
		dian = 1;
	}else{
		$(".yuan:nth-of-type("+ dian +")").click();
	}
},3000)

$(".fixed2").click(function(){
	scrollTo(0,0)
})

