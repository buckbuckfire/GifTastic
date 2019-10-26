//create an array that can be added to 
var topics = ["Jacksonville Jaguars", "Tennessee Titans", "Indianapolis Colts"];
var q;
var queryURL;




function giffer(queryURL) {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    for (i = 0; i < response.data.length; i++) {
      //console.log(response.data[i].images.fixed_width_small.url)
      //console.log(response.data[0].images.fixed_width_small.url)
      var gifUrl = response.data[i].images.fixed_width_small.url;
      //console.log(gifUrl)
      var gifImage = $("<img>");
      gifImage.attr("src", gifUrl);
      gifImage.attr("alt", "team");
      $("#team-view").prepend(gifImage);
    }
  });
}

function createButtons() {
  $("#buttons-view").empty()
  for (i = 0; i < topics.length; i++) {
    var button = $("<button>");
    button.text(topics[i]);
    button.addClass("button");
    $("#buttons-view").append(button);
  }
}

//display each item in the array as a button
createButtons();


//each button should pull 10 gif from api


//onclick


$(document).on("click", ".button", function () {
  event.preventDefault();
  $("#team-view").empty()
  //console.log("click")
  q = $(this).text()
  //console.log($(this).text())
  queryURL = "https://api.giphy.com/v1/gifs/search?api_key=A6O4SvnIf1mJ9zqzbgaUQir8q8pQYfbj&q=" + q + "&limit=10&offset=0&rating=PG-13&lang=en";

  giffer(queryURL);

});

//display a gif

$(document).on("click", "#add-team", function () {
  event.preventDefault();
  $("#team-view").empty()
  //console.log("click")
  q = $("#team-input").val().trim();
  queryURL = "https://api.giphy.com/v1/gifs/search?api_key=A6O4SvnIf1mJ9zqzbgaUQir8q8pQYfbj&q=" + q + "&limit=10&offset=0&rating=PG-13&lang=en";
  topics.push(q)
  createButtons()
  giffer(queryURL);

});






//attach api 