
$(document).ready(function() {
    $('#btn').click(function() {
      foo($('#id01').val());
    });
});



function auto(){
$("#searchform").autocomplete({
    source: function(request, response) {
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                'action': "opensearch",
                'format': "json",
                'search': request.term
            },
            success: function(data) {
                response(data[1]);
            }
        });
    }
});
}


function foo(){
  console.log("test");
  console.log(foo("#id01"))

}
