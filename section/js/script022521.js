


//create the function to match the text
var original_text = $("#original_text p").text();
console.log(original_text);

function matchText(){
  var input_text = $("#input_text").val();
  var substring_match = original_text.substring(0,input_text.length);
  console.log(substring_match);
  if(input_text==substring_match){
    $("#input_text").css("border-color","blue");
  }else if (input_test==original_text){
    $("#input_text").css("border-color","green");
  }else{
    $("#input_text").css("border-color","red");
  }
  //3 Conditions
  //input text matching before finishing; blue
  //input text does not match original text; red
  //input text matching original text; green
}
$("#input_text").keyup(matchText);

//function from screenshot
for(var i= 0;i<500;i++){
  if(i%2==0){
    $('#container').append("<div id='box_id_"+i+"' class='box_even'></div>");
  }else{
    $('#container').append("<div id='box_id_"+i+"' class='box_odd'></div");
  }
}
