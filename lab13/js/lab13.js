// Create a "FizzBuzz" function similar to how we did in class.
  function fizzBuzz() {
  // Loop through numbers 1 to 200, listing them as you go
    for (var num = 1; num <= 200; num++) {
      //define string variable
      var outputStr = "";
      // If the number is a multiple of 3, if should print "Fizz!"
      if (num % 3 == 0) {
        outputStr += "Fizz!";
      }
      // If the number is a multiple of 5, it should print "Buzz!"
      if (num % 5 == 0) {
        outputStr += "Buzz!";
      }
      // If the number is a multiple of 7, it should print "Boom!"
      if (num % 7 == 0) {
        outputStr += "Boom!";
      }
      // Make it so the output of your program appears in your output div.
      outputStr = num + ": " + outputStr;
      console.log(outputStr);
      $("#output").append("<p>" + outputStr + "</p>");
    }
  };
  //call the function
  fizzBuzz();
