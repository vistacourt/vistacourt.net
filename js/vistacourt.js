// $(document).ready(function(){
//     $("li").hover(function(){
//         $("a").hide();
//         $("a").fadeIn();
//         $("#div3").fadeIn(3000);
//     });
// });




function passWord() {
	window.open('main.html','_self');
}

function btn1() {
	var x = document.createElement("BUTTON");
	var t = document.createTextNode("Click me");
	backgroundColor = "red";
	testSomething();
}

function displayDate(id){
	// document.getElementById("dateid").innerHTML=Date();
	    date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday, ', 'Monday, ', 'Tuesday, ', 'Wednesday, ', 'Thursday, ', 'Friday, ', 'Saturday');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
        document.getElementById("dateid").innerHTML = result;
        setTimeout('displayDate("'+id+'");','1000');
        return true;
}
