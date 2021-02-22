//sumbit bio function
function submitBio(){
var nameVar = document.getElementById("name").value;
console.log(nameVar);
var emailVar = document.getElementById("email").value;
console.log(emailVar);
var messageVar = document.getElementById("message").value;
console.log(messageVar);
document.getElementById("name_email_id").innerHTML = nameVar +" EMAIL: " + emailVar;
document.getElementById("bio_id").innerHTML = messageVar;
}
document.getElementById("bio_submit_id").addEventListener('click',submitBio);
//button

function colorMe(){
  document.getElementById('name_email_id').style.color = green;
}
document.getElementById("color_me_id").addEventListener('click', colorMe);
