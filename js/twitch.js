var streamers = [
  "powlie",
  "rivid",
  "ESL_SC2",
  "sjow",
  "m4sha",
  "Kagaminium",
  "DisStream"
];
var hr;

function getData() {
  console.log("getData");
  streamers.forEach(function(streamer) {
    var url = "https://api.twitch.tv/kraken/streams/" + streamer;
    var clientID = "uppb89cnxwltwv5uisyat4z07ngm9q";
    $.ajax({
      type: "GET",
      url: url,
      headers: {
        "Client-ID": clientID
      },
      success: function(streamer) {
        if (streamer.stream === null) {
          $.ajax({
            type: "GET",
            url: streamer._links.channel,
            headers: {
              "Client-ID": clientID
            },
            success: function(streamer) {
              fillTheBar(streamer);
            }
          });
        } else {
          fillTheBar(streamer);
        }
      }
    });
  });
}

function fillTheBar(streamer) {
  setupBar();
  getLogo(streamer);
  getNickname(streamer);
  getStatus(streamer);
  getDot(streamer);
}

function setupBar() {
  $(".streamers").append("<div></div>");
  $(".streamers > div:empty").addClass("streamer apiBackground");
  $(".streamer:empty").append(
    '<div class="logo col-xs-1"></div><div class="nickname col-xs-3"></div><div class="description col-xs-7"></div><div class="dotContainer col-xs-1"></div>'
  );
}

function getLogo(streamer) {
  if (isOnline(streamer)) {
    $(".logo:empty").append("<img>");
    $("img:last").attr("src", streamer["stream"]["channel"]["logo"]);
  } else if (isClosed(streamer)) {
    $(".logo:empty").append(
      '<i class="fa fa-question-circle" aria-hidden="true"></i>'
    );
  } else {
    $(".logo:empty").append("<img>");
    $("img:last").attr("src", streamer["logo"]);
  }
}

function getNickname(streamer) {
  var channelName = "";
  var startOfName;
  var endOfName;
  $(".nickname:empty").append("<a>");
  if (isOnline(streamer)) {
    startOfName = streamer["stream"]["_links"]["self"].lastIndexOf("/");
    channelName = streamer["stream"]["_links"]["self"].substring(startOfName);
    $(".streamer:last").addClass("online");
    $("a:empty").attr("href", "https://www.twitch.tv" + channelName);
    $("a:empty").text(streamer["stream"]["channel"]["display_name"]);
  } else if (isClosed(streamer)) {
    $(".streamer:last").addClass("closed");
    startOfName = streamer["message"].indexOf("'") + 1;
    if (
      streamer["message"].indexOf("'") !== streamer["message"].lastIndexOf("'")
    ) {
      endOfName = streamer["message"].lastIndexOf("'");
    } else {
      endOfName = streamer["message"].lastIndexOf(" ") - 3;
    }
    channelName = streamer["message"].substring(startOfName, endOfName);
    $("a:empty").text(channelName);
  } else {
    $(".streamer:last").addClass("offline");
    channelName = streamer["display_name"];
    $("a:empty").attr("href", "https://www.twitch.tv/" + channelName);
    $("a:empty").text(channelName);
  }
}

function getStatus(streamer) {
  var status = "";
  $(".description:empty").append("<p></p>");
  if (isOnline(streamer)) {
    if (streamer["stream"]["channel"]["status"].length > 45) {
      status = streamer["stream"]["channel"]["status"].substring(0, 45) + "...";
    } else {
      status = streamer["stream"]["channel"]["status"];
    }
    $("p:empty").text(status);
  } else if (isClosed(streamer)) {
    $("p:empty").text("Account closed");
  } else {
    $("p:empty").text("Offline");
  }
}

function getDot(streamer) {
  $(".dotContainer:empty").append('<div class="statusDot"></div>');
  if (isOnline(streamer)) {
    $(".statusDot:last").css("background", "#7ED329");
  } else {
    $(".statusDot:last").css("background", "#D35353");
  }
}

function isOnline(streamer) {
  return streamer["stream"] !== null && streamer["stream"] !== undefined;
}

function isOffline(streamer) {
  return streamer["mature"] !== undefined;
}

function isClosed(streamer) {
  return streamer["message"];
}

$(document).on("click", ".btn-success", function() {
  console.log("Online");
  hr = $(".offline, .closed").next();
  hr.hide();
  hr = $(".online").next();
  hr.show();
  $(".offline, .closed").hide();
  $(".online").show();
  $(".btn-danger, .btn-default").removeClass("active");
  $(".btn-success").addClass("active");
});

$(document).on("click", ".btn-danger", function() {
  console.log("Offline");
  hr = $(".online").next();
  hr.hide();
  hr = $(".offline, .closed").next();
  hr.show();
  $(".online").hide();
  $(".offline, .closed").show();
  $(".btn-success, .btn-default").removeClass("active");
  $(".btn-danger").addClass("active");
});

$(document).on("click", ".btn-default", function() {
  console.log("All");
  $("hr").show();
  $(".online, .offline, .closed").show();
  $(".btn-danger, .btn-success").removeClass("active");
  $(".btn-default").addClass("active");
});

$(document).ready(function() {
  getData();
});
