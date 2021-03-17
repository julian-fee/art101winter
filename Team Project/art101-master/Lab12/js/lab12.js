/**
 * Author:    Alexis Sanchez
 * Created:   2/12/2021
 **/

function sortinghat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0){
    return "Gryffindor"
  }
  else if (mod == 1){
    return "Ravemclaw"
  }
  else if (mod == 2){
    return "Slytherin"
  }
  else if (mod == 3){
    return "Hufflepuff"
  }
}
var mybutton = document.getElementById('button')
mybutton.addEventListener("click",function(){
  var name =  document.getElementById("input").value;
  var house = sortinghat(name);
  endResult = "<p> The Sorting Hat has sorted you into " + house + "<p>"
  document.getElementById("output").innerHTML = endResult; 
}
)
