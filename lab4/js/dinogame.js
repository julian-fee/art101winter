

//JS code for dinogame by https://jsfiddle.net/4cs97fmk/
//Other code snippets found at https://stackoverflow.com/questions/65846396/i-cant-make-dino-jump
var position = 0;
var isJumping = false;
var dinito = document.getElementById("dinito");


function handleKeyUp(event){
//console.log(event);
    if (event.code === "ArrowUp") {
    	console.log("jump!");
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval (() => {
    console.log(position);
        if (position >= 150) {
            clearInterval(upInterval);
             //descendo
             let downInterval = setInterval(() => {
                 if (position <= 0) {
                     clearInterval(downInterval);
                     isJumping = false;
                 }
                 else {
                 position -= 20;
                 dinito.style.bottom = position + 'px';
                 }
             }, 20);
        }
        else {
        //subindo
        position += 20;
        dinito.style.bottom = position + 'px';
        }
    }, 20);
}

document.onkeyup = handleKeyUp;
