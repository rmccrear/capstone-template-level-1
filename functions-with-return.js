function function1() {
    // TODO: Prompt for an answer...
    let answer;
    let lowerCaseAnswer;
    answer = prompt("What is your guess?");
    lowerCaseAnswer = answer.toLowerCase();
    return lowerCaseAnswer;
}


function playGuessingGame() {
    let correctAnswer;
    let userChoice;

    correctAnswer = "cat";

    userChoice = function1();

    if( correctAnswer === userChoice ) {
        alert("You win!");
    } else {
        alert("Try again!");
    }
}

if1.onclick = playGuessingGame;


function playGuessingGameForSong() {
    let correctAnswer, userChoice;
    correctAnswer = "jelly roll";

    alert("Please guess the artist who sings 'Two ships passing in the night.'");
    userChoice = function1();

    if( correctAnswer === userChoice ) {
        alert("You win!");
    } else {
        alert("Try again!");
    }
}

if2.onclick = playGuessingGameForSong;

function calculateTotalBill(bill) {
    let tip, total;
    tip = bill * .20;
    total = bill + tip;
    return total;
}

function whatsTheTotal() {
    let userInput, b, t;
    userInput = prompt("How much was the bill?")
    b = Number(userInput);
    t = calculateTotalBill(b);
    alert(t);
}

tipsButton.onclick = whatsTheTotal;
