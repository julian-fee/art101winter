/*
* Author: Becky Phillips, Matila Krulder, Julian Fee
* Created: 16 February 2021
* License: Public Domain
*/

// borrow the sort function from Lab 7//
function nameSorter() {
  var userName = document.getElementById("user-name").value;
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

// find the button element
buttonEl = document.getElementById("my-button");
console.log("button-element: ", buttonEl);

//find form getElement
inputEl = document.getElementById("user-name");
console.log("input-element: ", inputEl);

outputEl = document.getElementById("output");
console.log("output-element: ", outputEl);


// add an event listener to button
buttonEl.addEventListener("click", function(){
  //get value from name element
  var nameUser = inputEl.value;
  //shuffle name
  var newName = nameSorter(nameUser);
  //put value in output element
  outputEl.innerHTML = newName;

  });
