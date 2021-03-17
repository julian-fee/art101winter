/**
 * Author:    Alexis Sanchez
 * Created:   2/12/2021
 **/


function fizzBuzzzBoom(max, factor) {
  for (var num = 0; num < max; num++) {
    var outStr = "";
    for (var newFactor in factor) {
      if (num % factor == 0) {
        outStr += factor[newFactor];
      }
    }
    outputToPage(num.toString() + outStr)
  }
  var oneLongString = "";
  oneLongString += num + " Fizz!<br>";
  oneLongString += num + " Buzz!<br>";
  oneLongString += num + " Boom!<br>";
  $("#output").html(oneLongString);
}

function error(str) {
  output.innerHTML = "<div class='error'>" + str + "</div>";
}
document.getElementById('submit').addEventListener("click", function() {
  var high = document.getElementById("max").value;
  console.log("max:", high)
  if (!high) {
    error("You must provide a maximum");
  } else {
    for (i = 1; i <= 200; i++) {
      if (i % 35 == 0) {
        console.log("BuzzBoom");
        var str1 = i + " BuzzBoom!"
        $("#output").append("<p>" + str1 + "</p>");
      } else if (i % 21 == 0) {
        console.log("FizzBoom");
        var str = i + " FizzBoom!"
        $("#output").append("<p>" + str + "</p>");
      } else if (i % 15 == 0) {
        console.log("FizzBuzz");
        var str2 = i + " FizzBuzz!"
        $("#output").append("<p>" + str2 + "</p>");
      } else if (i % 7 == 0) {
        console.log("Boom")
        var str3 = i + " Boom!"
        $("#output").append("<p>" + str3 + "</p>");
      } else if (i % 5 == 0) {
        console.log("Buzz");
        var str4 = i + " Buzz!"
        $("#output").append("<p>" + str4 + "</p>");
      } else if (i % 3 == 0) {
        console.log("Fizz");
        var str5 = i + " Fizz!"
        $("#output").append("<p>" + str5 + "</p>");
      } else {
        console.log(i);
        var str6 = i
        $("#output").append("<p>" + str6 + "</p>");
      }
    } // for loop
  }
})
