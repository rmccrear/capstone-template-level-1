
function playGuessingGame() {
    let guess;
    let correctAnswer;
    let userChoice;
    let lowerCaseChoice;

    correctAnswer = "cat";

    alert("guess the animal I am thinking of");
    userChoice = prompt("Enter an animal. HINT: it is a fur ball.");
    lowerCaseChoice = userChoice.toLowerCase();

    if( correctAnswer === lowerCaseChoice ) {
        alert("You win!");
        window.location.href = "https://www.pexels.com/photo/white-and-grey-kitten-on-brown-and-black-leopard-print-textile-45201/";    
    } else {
        alert("Try again!");
    }
}

if1.onclick = playGuessingGame;
