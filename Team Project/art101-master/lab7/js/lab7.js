/**
 * Author:    Alexis Sanchez
 * Created:   2.3.2021
 **/

// This will aske the users name so the program can fix it
function sortUserName()
{
  var userName = window.prompt("Hi please enter your name so we can fix it");
  console.log("userName", userName);

  // This line of code will split the users name
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // This will sort the array from above
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //this will put back the array into a stirng
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  //Note that I could have done the above lines as a single line:
  //  userName.toLower().split("").sort().join("")
  return nameSorted;

}
document.writeln("Hey, your name is fixed: ", sortUserName(), "</br>");
