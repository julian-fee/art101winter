/*
* Author: Becky Phillips, Matila Krulder, Julian Fee
* Created: 2 February 2021
* License: Public Domain
*/


//Define Array//
var myTransport = ["car ", "bicycle ", "feet ", "bus ", "train ", "metro ", "airplane "];

//Define Object//
var myMainRide = {
  make: "Toyota",
  model: "Land Cruiser",
  color: "silver",
  age: function() {
    return 1999 - age;
  }
};


//output
document.writeln("How I Get Around: " + myTransport + "<br>");

document.writeln("Main Transport: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
