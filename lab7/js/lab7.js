/*
* Author: Becky Phillips, Matila Krulder, Julian Fee
* Created: 4 February 2021
* License: Public Domain
*/


// Define Function//
function nameSorter() {
  var userName = window.prompt("Please enter your name");
  console.log("userName: ", userName);
  // Split string and convert to array
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);
  // Sort the array
  var sortNameArray = nameArray.sort();
  console.log("sortedNameArray= ", sortNameArray);
  // Join array and convert back to a string
  var sortedName = sortNameArray.join('');
  console.log("sortedName= ", sortedName);
  // return the new (sorted) name
  return sortedName;
}

// output
document.writeln("We fixed your name and made it better: ",
    nameSorter(), "</br>");
