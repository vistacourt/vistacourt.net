


// function setHigh(num) {
//   console.log(num);
//   var num=  document.getElementById("fldHigh").value;
//
//
//
//   console.log(num);
//   document.getElementById("feedbackHigh").innerHTML = num;
//   return num;
// }
//
//
//
// // ---------------------------------------------------------------
//
//
// function setLow(num) {
//   console.log(num);
//   var num=  document.getElementById("fldLow").value;
//
//
//
//   console.log(num);
//   document.getElementById("feedbackLow").innerHTML = num;
//   return num;
// }



// -----------------------------------------------------


// function setMail(num) {
//   console.log(num);
//   var num=  document.getElementById("fldMail").value;
//
//
//
//   console.log(num);
//   document.getElementById("feedbackMail").innerHTML = num;
//   return num;
// }

// -----------------------------------------------------------------

const API_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=20';
function displayData() {
	fetch(API_URL)
  	.then(res => res.json())
    .then(json => {
    	const topCoin = json[0];
      const twoCoin = json[1];
      const threeCoin = json[2];
      const fourCoin = json[3];
      const fiveCoin = json[4];
      const sixCoin = json[5];
      const sevenCoin = json[6];
      const eightCoin = json[7];
      const nineCoin = json[8];
      const tenCoin = json[9];
      const elevenCoin = json[10];
      const twelveCoin = json[11];
      const thirteenCoin = json[12];
      const fourteenCoin = json[13];
      const fifteenCoin = json[14];
      const sixteenCoin = json[15];

    	document.getElementById('price').innerHTML = `${topCoin.symbol}  -  ${topCoin.price_usd}<br/>`;
      document.getElementById('price2').innerHTML = `${twoCoin.symbol}  -  ${twoCoin.price_usd}<br/>`;
      document.getElementById('price3').innerHTML = `${threeCoin.symbol}  -  ${threeCoin.price_usd}<br/>`;
      document.getElementById('price4').innerHTML = `${fourCoin.symbol}  -  ${fourCoin.price_usd}<br/>`;
      document.getElementById('price5').innerHTML = `${fiveCoin.symbol}  -  ${fiveCoin.price_usd}<br/>`;
      document.getElementById('price6').innerHTML = `${sixCoin.symbol}  -  ${sixCoin.price_usd}<br/>`;
      document.getElementById('price7').innerHTML = `${sevenCoin.symbol}  -  ${sevenCoin.price_usd}<br/>`;
      document.getElementById('price8').innerHTML = `${eightCoin.symbol}  -  ${eightCoin.price_usd}<br/>`;

      document.getElementById('price9').innerHTML = `${nineCoin.symbol}  -  ${nineCoin.price_usd}<br/>`;
      document.getElementById('price10').innerHTML = `${tenCoin.symbol}  -  ${tenCoin.price_usd}<br/>`;
      document.getElementById('price11').innerHTML = `${elevenCoin.symbol}  -  ${elevenCoin.price_usd}<br/>`;
      document.getElementById('price12').innerHTML = `${twelveCoin.symbol}  -  ${twelveCoin.price_usd}<br/>`;
      document.getElementById('price13').innerHTML = `${thirteenCoin.symbol}  -  ${thirteenCoin.price_usd}<br/>`;
      document.getElementById('price14').innerHTML = `${fourteenCoin.symbol}  -  ${fourteenCoin.price_usd}<br/>`;
      document.getElementById('price15').innerHTML = `${fifteenCoin.symbol}  -  ${fifteenCoin.price_usd}<br/>`;
      document.getElementById('price16').innerHTML = `${sixteenCoin.symbol}  -  ${sixteenCoin.price_usd}<br/>`;
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
