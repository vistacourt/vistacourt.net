
function convertToRoman(num) {
  console.log(num);
  var num=  document.getElementById("fld").value;
  var deci = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var roma = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  romaNum = "";
  for (var i = 0; i < deci.length; i++) {
    while (deci[i] <= num) {
      romaNum += roma[i];
      num -= deci[i];
    }
  }

  console.log(romaNum);
  document.getElementById("feedback").innerHTML = romaNum;
  return romaNum;
}

const API_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=1';
function displayData() {
	fetch(API_URL)
  	.then(res => res.json())
    .then(json => {
    	const topCoin = json[0];
    	document.getElementById('price').innerHTML = `${topCoin.price_btc} BTC = $US ${topCoin.price_usd}<br/>${new Date()}`;
    });
}

setInterval(displayData, 1000);
