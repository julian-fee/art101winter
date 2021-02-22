// Create a function sortingHat()
function sortingHat(str){
  // counts the letters in str and assigns it to a variable length
  len = str.length;
  // uses modulus (% operator) to get the remainder with 4: mod = length % 4;
  mod = len % 4;
  // create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
    if (mod == 0) {
      return "Hufflepuff"
    }
    else if (mod == 1) {
      return "Slytherin"
    }
    else if (mod == 2) {
      return "Gryffindor"
    }
    else if (mod == 3) {
      return "Ravenclaw"
    }
};
// define myButton element
var myButton = $("#button");
// Add click function to myButton
myButton.click(function(){
  // that gets the value of #input and assigns it to a variable name
  var name = $("#input").val();
  console.log(name);
  // runs sortingHat(name) and stores the result in a variable house
  var house = sortingHat(name);
  console.log(house);
  // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
  $("#output").append("<p>The Sorting Hat has sorted you into: " + house + "</p>");
});
