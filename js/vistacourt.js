
$.get("http://ipinfo.io", function (response) {
    $("#ip").html(response.ip);
    $("#address").html(response.city + ", " + response.region);
		$("#loc").html(response.loc);
		$("#org").html(response.org);
		$("#postal").html(response.postal);
    $("#details").html(JSON.stringify(response, null, 4));
		$("#map").html("<img src='https://maps.googleapis.com/maps/api/staticmap?size=800x300&sensor=false&zoom=10&center=" + response.loc +"'/>"); }, "jsonp");


// $(document).ready(function(){
//
//
//
//
// console.log("function");
//     var timesRun = 0;
//     var interval = setInterval(execute, 100); //only use functionname here
// 					document.getElementById("s2").innerHTML = "test";
//
// 			function execute(){
//
// 					timesRun += 1;
// 					// var zWindow = $(window).height();
// 					// var yWindow = $(window).width();
// 					var z = Math.floor(Math.random()*10000);
// 					// var z = Math.floor((Math.random() * zWindow) + 1);
// 					// var y = Math.floor((Math.random() * yWindow) + 1);
//
// 					// $("#s1").css({
// 					// 		"top": z,
// 					// 		"left": y
// 					// });
// 					// $("#s1").delay(1000).fadeIn(10).delay(3000).fadeOut(100);
//
// 					if(z === 6174){
// 							clearInterval(interval);
// 					}
// 			// console.log(z,y);
// 			document.getElementById("s1").innerHTML = z;
//
//
// 				// 	}
//
// 		}
//
// });


function passWord() {
	window.open('main.html','_self');
}

function btn1() {
	var x = document.createElement("BUTTON");
	var t = document.createTextNode("Click me");
	backgroundColor = "red";
}
