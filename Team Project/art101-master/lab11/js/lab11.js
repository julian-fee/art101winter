/**
 * Author:    Alexis Sanchez
 * Created:   2/12/2021
 **/

 $('<button/>',{
     text: 'Click Me',
     class: 'className1'
 }).appendTo('#challenge');

 $('<button/>',{
     text: 'Touch Me',
     class: 'className2'
 }).appendTo('#problems');

 $('<button/>',{
     text: 'Poke Me',
     class: 'className3'
 }).appendTo('#results');

$("#challenge button").click(function(){
  $("#challenge p").css("color", "red");
})

$("#problems button").click(function(){
  $("#problems p").css("color", "blue");
})

$("#results button").click(function(){
  $("#results p").css("color", "purple");
})
