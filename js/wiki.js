

function auto(){
  console.log(document.getElementById('#searchBox'));
$("#searchBox").autocomplete({
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

$(document).ready(function() {
$('#button').click(function(e) {
    e.preventDefault();
    console.log(e);
    $("#results").empty();
    var front = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=';
    var sresult = $('#searchBox').val();
    console.log(sresult);
    var back = '&callback=?';
    $.getJSON(front + sresult + back, function(data) {
      var pages = data.query.search;
      pages.forEach(function(page) {
        var url_title = page.title.split(' ');
        url_title = url_title.join('_');
        $('#results').append("<div><h3><a target = '_blank' href = 'https://en.wikipedia.org/wiki/" + url_title + "'>" + page.title + "</a></h3> <p>" + page.snippet + "</div>");
      });
    }); //end .get
});
});

function getRandom(){
window.open('https://en.wikipedia.org/wiki/Special:Random')
}
