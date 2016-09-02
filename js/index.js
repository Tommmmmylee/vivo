setTimeout(function() {
	//	$("#loading").css("display", "none");
	console.log('aa');
	$("#loading").animate({
		"display": "none"
	}, 100, function() {
		//---------出现文本
		wordFn();
	})
}, 3000)

//出现文本---------------
function wordFn() {
	$("#page1").css("display", "block");
	//获取文本内容p标签的长度
	var num = $("#wordTips p").length;
	var $html = $("#wordTips p");
	//数组保存P标签内容
	var arr = [];
	$html.each(function(i) {
		arr.push($html.eq(i).html());
	})
	console.log(arr);
	//将文本内容添加到页面
	function word() {
		var word = $("#wordTips");
		$("#wordTips").html("");
		var i = 0;
		var timer = setInterval(function() {
			console.log("腻害");
			if(i >= num) {
				$("#page1").animate({
					"display": "none"
				}, 500, function() {
					//------------超人
					supermanFn();
				})
				clearTimeout(timer);
			} else {
				word += '<p>' + arr[i] + '</p>';
				$("#wordTips").html(word);
			}
			i++;
		}, 500)
	}
	word();
}

//超人飞入--------------
function supermanFn() {
	$("#page2 .planet-1").animate({
		"left": "49%",
		"top": "18%"
	}, 300)
	$("#page2 .planet-4").animate({
		"left": "19%",
		"top": "78%"
	}, 300)
	$("#page1").css("display", "none");
	$("#page2").css("display", "block");
	$('#superman1').animate({
		"left": "9%",
		"top": "28%"
	}, 800, function() {
		$("#superman1 img").attr("src", "img/page1_4.png");
		var i = 0;
		var timer = setInterval(function() {
			console.log("腻害");
			if(i > 2) {
				$("#superman1 img").attr("src", "img/page1_5.png");
				//超人飞出----------
				goFn();
				clearTimeout(timer);
			} else if(i == 0 || i == 2) {
				$("#superman1 img").attr("src", "img/page1_5.png");
			} else {
				$("#superman1 img").attr("src", "img/page1_4.png");
			}
			i++;
		}, 500)
	});
}

//超人飞出
function goFn() {
	$('#superman1').animate({
		"left": "-119%",
		"top": "-28%"
	}, 2000, function() {
		$("#page2").css("display", "none");
		//------------出现vivo
		rotateFn();
		//------------碎片
		//------------碎片分散
		//inFn();
		//碎片分散放这里会跟rotateFn()冲突,应该放在rotateFn()清除后
	})
}
//出现vivo:通过translateZ(-9999px)设置很小并隐藏,当vivo旋转30度的时候,translateZ增加9999/12;当刚刚旋转360时候,translateZ等于0,刚好显示正常--------------
function rotateFn() {
	$("#page3").css("display", "block");
	$("#vivo img").css("display", "block");
	var num = 0;
	var opacity = -9999;
	var op = 9999 / 360 * 30;
	var time = setInterval(function() {
		num += 30;
		opacity += op;
		console.log('opacity');

		if(num > 360) {
			num = 360;
			//------------碎片
			inFn();
			clearTimeout(time);
		} else {
			$("#vivo img").eq(0).css({
				"transform": "translateZ(" + opacity + "px) rotate(" + num + "deg)"
			})
		}
	}, 50);
	$("#page3 .planet-2").fadeOut(2500);
	$("#page3 .planet-3").fadeOut(2500);
	$("#page3 .planet-4").fadeOut(2500);
}
//碎片分散---------------
function changeFn() {
	$("#page4").css("display", "none");
	$("#page5").css("display", "block");
	$("#page5 .chip1").animate({
		"left": "61%",
		"top": "10%"
	}, 200)
	$("#page5 .chip2").animate({
		"left": "11%",
		"top": "13%"
	}, 200)
	$("#page5 .chip3").animate({
		"left": "11%",
		"top": "41%"
	}, 200)
	$("#page5 .chip4").animate({
		"left": "35%",
		"top": "38%"
	}, 200)
	$("#page5 .chip5").animate({
		"left": "71%",
		"top": "42%"
	}, 200)
	$("#page5 .chip6").animate({
		"left": "40%",
		"top": "22%"
	}, 200)
	$("#page5 .chip7").animate({
		"left": "18%",
		"top": "70%"
	}, 200)
	$("#page5 .chip8").animate({
		"left": "57%",
		"top": "71%"
	}, 200)
	$("#page5 .star").fadeIn(2000, function() {
		missFn()
	});
}

//碎片------------------
function inFn() {
	$("#page3").css("display", "none");
	$("#page4").css("display", "block");
	//出现碎片
	$("#page4 .chip").fadeIn(2000, function() {
		//vivo消失后碎片消失
		$("#vivo2 img").eq(0).fadeOut(200).siblings().fadeOut(2000, function() {
			//-------------碎片分散
			changeFn();
		});
	});
	console.log($(".chip"));
}
//徐峥消失---------
function missFn() {
	$("#page5 .chip1").animate({
		"left": "53%",
		"top": "44%"
	}, 200)
	$("#page5 .chip2").animate({
		"left": "0%",
		"top": "26%"
	}, 200)
	$("#page5 .chip3").animate({
		"left": "25%",
		"top": "51%"
	}, 200)
	$("#page5 .chip4").animate({
		"left": "42%",
		"top": "71%"
	}, 200)
	$("#page5 .chip5").animate({
		"left": "76%",
		"top": "75%"
	}, 200)
	$("#page5 .chip6").animate({
		"left": "29%",
		"top": "27%"
	}, 200)
	$("#page5 .chip7").animate({
		"left": "37%",
		"top": "6%"
	}, 200)
	$("#page5 .chip8").animate({
		"left": "78%",
		"top": "21%"
	}, 200)
	//--------------------碎片缩小消失
	mFn()
	$("#txt").fadeIn();
	$("#downArrow").fadeIn();
}
//碎片缩小消失------------
function mFn() {
	var opacity = 1;
	var time = setInterval(function() {
		opacity -= 0.2;

		if(opacity < 0) {
			clearTimeout(time);
		} else {
			$("#page5 .chip").css({
				"transform": "scale(" + opacity + ")"
			})
		}
	}, 250);
}