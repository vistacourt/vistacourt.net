
$(document).ready(function(){
$("#core").html("CPU Cores: " + navigator.hardwareConcurrency);
});


$.get("http://ipinfo.io", function (response) {
    $("#ip").html(response.ip);
    $("#addressIsp").html(response.city + ", " + response.region);
		$("#loc").html(response.loc);
		$("#org").html(response.org);
		$("#postal").html(response.postal);
    $("#details").html(JSON.stringify(response, null, 4));
		$("#map").html("<img src='https://maps.googleapis.com/maps/api/staticmap?size=800x300&sensor=false&zoom=10&center=" + response.loc +"'/>"); }, "jsonp");

// --------------------------------------------------------------------------------------------------------
// p elements for displaying lat / long and address
// var displayCoords, myAddress;
//
// // used with the google apis
// var geocoder;
// var map;
// var infowindow = new google.maps.InfoWindow();
// var marker;
//     // Called when the page is loaded
//     function init() {
//       displayCoords=document.getElementById("msg");
//       myAddress = document.getElementById("address");
//
//       geocoder = new google.maps.Geocoder();
//
//       // In order to show something even before a user clicked on the button
//       var latlng = new google.maps.LatLng(38.9072, -77.0369);
//
//       var mapOptions = {
//         zoom: 8,
//         center: latlng,
//         mapTypeId: 'hybrid'
//       }
//       map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
//     }
//
//      // Called when the button is clicked
//      function getLocation() {
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(showPosition);
//         } else {
//         displayCoords.innerHTML="Geolocation API not supported by your browser.";
//      }
//    }
//
//   // Called when a position is available
//   function showPosition(position) {
//       displayCoords.innerHTML="Latitude: " + position.coords.latitude +
//           "<br />Longitude: " + position.coords.longitude;
//
//       // Display the map
//       showOnGoogleMap(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
//
//   }
//
//
//   function showOnGoogleMap(latlng) {
//       // Ask google geocoder for a surface address once we get a longitude and
//       // a latitude. In fact the reverse geocoder sends back an array of "guesses"
//       // i.e. not only one address object, but several. Each entry in this array
//       // has several properties like street, city, etc. We use the "formatted_address"
//       // one here, but it might be interesting to get the detailed properties in other
//       // applications like a form with street, city, zip code etc.
//       geocoder.geocode({'latLng': latlng},reverseGeocoderSuccess);
//
//       function reverseGeocoderSuccess(results, status) {
//         if (status == google.maps.GeocoderStatus.OK) {
//           // For debugging
//           console.dir(results);
//
//           if (results[1]) {
//             map.setZoom(11);
//             marker = new google.maps.Marker({
//                 position: latlng,
//                 map: map
//             });
//             infowindow.setContent(results[1].formatted_address);
//             infowindow.open(map, marker);
//
//             // Display address as text in the page
//             myAddress.innerHTML=results[0].formatted_address;
//
//           } else {
//             alert('No results found');
//           }
//         } else {
//           alert('Geocoder failed due to: ' + status);
//         }
//       } // end of reverseGeocoderSuccess
//     }  // end of showOnGoogleMap
// -----------------------------------------------------------------------------------

function passWord() {
	window.open('main.html','_self');
}

function btn1() {
	var x = document.createElement("BUTTON");
	var t = document.createTextNode("Click me");
	backgroundColor = "red";
}
