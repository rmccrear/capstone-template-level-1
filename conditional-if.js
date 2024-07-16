

function playGuessingGame() {
    let userChoice;
    let correctAnswer;
    correctAnswer = "cat";
    alert("guess the animal I am thinking of");
    userChoice = prompt("Enter an animal. HINT: it is a fur ball.");

    if( correctAnswer === userChoice ) {
        alert("You win!");
    } else {
        alert("Try again!")
    }
}

if1.onclick = playGuessingGame;
