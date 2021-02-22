/*
* Author: Becky Phillips, Matila Krulder, Julian Fee
* Created: 18 February 2021
* License: Public Domain
*/


//define elements
var challengeEl = $("#challenge");
var problemsEl = $("#problems");
var resultsEl = $("#results");



//create buttons
var myButton1 = "<button>Change Color</button>";
var myButton2 = "<button>Change Font Size</button>";
var myButton3 = "<button>Change Background Color</button>";


//add button to sections
challengeEl.append(myButton1);
problemsEl.append(myButton2);
resultsEl.append(myButton3);



//add click events for each button
challengeEl.children("button").click(function() {
  challengeEl.toggleClass("special1");
});

problemsEl.children("button").click(function() {
  problemsEl.toggleClass("special2");
});

resultsEl.children("button").click(function() {
  resultsEl.toggleClass("special3");
});
