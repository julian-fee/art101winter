/**
 * Author:    Alexis Sanchez
 * Created:  3/3/2021
 **/

$("#mybutton").click(doAPI)

function textToPage(text){
  $("#output").html(text);
}

function doAPI() {
  // Using the core $.ajax() method
  $.ajax({
    // The URL for the request (from the api docs)
    url: "http://numbersapi.com/34",
    // The data to send (will be converted to a query string)
    data: {
      // here is where any data required by the api
      //   goes (check the api docs)
},
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    //dataType: "json",
    // What do we do when the api call is successful
    //   all the action goes in here
  })
  .done(function(data){
    console.log("Success:", data);
    textToPage(data);
  })
  .fail(function(xhr, status, errorThrown){
    console.log("Failure.");
    textToPage(errorThrown + "Status:" + status)
  })
}
