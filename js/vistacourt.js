

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

function passWord() {
	// var testV = 1;
	// var pass1 = prompt('Please Enter Your Password',' ');
	// while (testV < 3) {
	// if (!pass1)
	// history.go(-1);
	// if (pass1.toLowerCase() == "617661") {
	// // alert('You Got it Right!');
	window.open('main.html','_self');
	// break;
	// }
	// testV+=1;
	// var pass1 =
	// prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
	// }
	// if (pass1.toLowerCase()!="password" & testV ==3)
	// history.go(-1);
	// return " ";
}
