


function getSearch(){
var queryStr = document.getElementById('search');

  $(document).ready(function(){

/*    $.ajax( {
        url: remoteUrlWithOrigin,
        data: queryData,
        dataType: 'json',
        type: 'POST',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data) {
           // do something with data
        }
    } );

$.ajax({
  url: '//www.wikidata.org/w/api.php',
  data: { action: 'wbgetentities', ids: mw.config.get('wgWikibaseItemId'), format: 'json' },
  dataType: 'jsonp',
  success: function (x) {
    console.log('wb label', x.entities.Q39246.labels.en.value);
    console.log('wb description', x.entities.Q39246.descriptions.en.value);
  }
});

*/
//
// var mw;
// (function (mw) {
//
//   /**
//    * Query a MediaWiki api.php instance with the given options
//    */
//   function mwQuery(endpoint, options) {
//
//     /**
//      * Create a uniquely-named callback that will process the JSONP results
//      */
//     var createCallback = function (k) {
//       var i = 1;
//       var callbackName;
//       do {
//         callbackName = 'callback' + i;
//         i = i + 1;
//       } while (window[callbackName])
//       window[callbackName] = k;
//       return callbackName;
//     }
//
//     /**
//      * Flatten an object into a URL query string.
//      * For example: { foo: 'bar', baz: 42 } becomes 'foo=bar&baz=42'
//      */
//     var queryStr = function (options) {
//       var query = [("hockey")];
//       for (var i in options) {
//         if (options.hasOwnProperty(i)) {
//           query.push(encodeURIComponent(i) + '=' + encodeURIComponent(options[i]));
//         }
//       }
//       return query.join('&');
//     }
//
//     /**
//      * Build a function that can be applied to a callback.  The callback processes
//      * the JSON results of the API call.
//      */
//     return function (k) {
//       options.format = 'json';
//       options.callback = createCallback(k);
//       var script = document.createElement('script');
//       script.src = endpoint + '?' + queryStr(options);
//       var head = document.getElementsByTagName('head')[0];
//       head.appendChild(script);
//     };
//
//   }
//
//   mw.api = {
//     query: mwQuery,
//   };
//
// })(mw || (mw = {}));
// console.log(mw.api);
// console.log(mwQuery);
  });
  
console.log(queryStr.value);
}






function getRandom(){
window.open('https://en.wikipedia.org/wiki/Special:Random')
}
