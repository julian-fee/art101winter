/**
 * Author:    Alexis Sanchez
 * Created:   2/12/2021
 **/

var apiEndpoint = "https://xkcd.com/info.0.json"

$("#myButton").click(doAPI);

function textToPage(text){
  $("#output").html(text);
}

function doAPI() {
  $.ajax({
      // The URL for the request (from the api docs)
      url: apiEndpoint,
      // The data to send (will be converted to a query string)
      data: {
              // here is where any data required by the api
              //   goes (check the api docs)
            },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      success: (function(data){
        var textData = JSON.stringify(data);
        var str = "";
        var imageURL = data.img;
        var title = data.title;
        var alt = data.alt;
        str += "<h1>" + title + "</h1>";
        str += "<img src='" + imageURL + "'>"
        textToPage(str);
        console.log("Success:", textData);
      })
    })
.fail(function(xhr, status, errorThrown){
  console.log("Fail");
  textToPage(errorThrown + "Status:" + status);
})
}
