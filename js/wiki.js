


function getSearch(){
var searchInput = document.getElementById('search');



  $(document).ready(function(){

      $.ajax({
          type: "GET",
          url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" && searchInput.value,
          contentType: "application/json; charset=utf-8",
          async: false,
          dataType: "json",
          success: function (data, textStatus, jqXHR) {
              console.log(data);
          },
          error: function (errorMessage) {
          }
      });
  });




console.log(searchInput.value);


}






function getRandom(){
window.open('https://en.wikipedia.org/wiki/Special:Random')
}
