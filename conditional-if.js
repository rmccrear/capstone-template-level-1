
function promptUser(){
    let userChoice;
    let lowerCaseChoice;
    alert("guess the animal I am thinking of");
    userChoice = prompt("Enter an animal. HINT: it is a fur ball.");
    lowerCaseChoice = userChoice.toLowerCase();
    return lowerCaseChoice;
}

function win() {
    alert("You win!");
    window.location.href = "https://www.pexels.com/photo/white-and-grey-kitten-on-brown-and-black-leopard-print-textile-45201/";
}

function lose() {
    alert("Try again!");
}


function playGuessingGame() {
    let guess;
    let correctAnswer;
    correctAnswer = "cat";

    guess = promptUser();

    if( correctAnswer === guess ) {
        win();
    } else {
        lose();
    }
}

if1.onclick = playGuessingGame;
