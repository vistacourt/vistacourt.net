


function setHigh(num) {
  console.log(num);
  var num=  document.getElementById("fldHigh").value;



  console.log(num);
  document.getElementById("feedbackHigh").innerHTML = num;
  return num;
}



// ---------------------------------------------------------------


function setLow(num) {
  console.log(num);
  var num=  document.getElementById("fldLow").value;



  console.log(num);
  document.getElementById("feedbackLow").innerHTML = num;
  return num;
}



// -----------------------------------------------------


function setMail(num) {
  console.log(num);
  var num=  document.getElementById("fldMail").value;



  console.log(num);
  document.getElementById("feedbackMail").innerHTML = num;
  return num;
}

// -----------------------------------------------------------------

const API_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=1';
function displayData() {
	fetch(API_URL)
  	.then(res => res.json())
    .then(json => {
    	const topCoin = json[0];
    	document.getElementById('price').innerHTML = `${topCoin.price_btc} BTC =  ${topCoin.price_usd}<br/>`;
    });
}

setInterval(displayData, 1000);




// function convertToRoman(num) {
//   console.log(num);
//   var num=  document.getElementById("fld").value;
//   var deci = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
//   var roma = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
//
//   romaNum = "";
//   for (var i = 0; i < deci.length; i++) {
//     while (deci[i] <= num) {
//       romaNum += roma[i];
//       num -= deci[i];
//     }
//   }
//
//   console.log(romaNum);
//   document.getElementById("feedback").innerHTML = romaNum;
//   return romaNum;
// }





// romaNum = "";
// for (var i = 0; i < deci.length; i++) {
//   while (deci[i] <= num) {
//     romaNum += roma[i];
//     num -= deci[i];
//   }
// }
//
