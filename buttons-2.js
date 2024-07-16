let myButton2 = document.getElementById("myButton2");
let buttons = document.getElementsByClassName("btn");

function greeting(name) {
    return `hi, how ${name} are you?`;
}

function christmasGreeting(name) {
    return `Hi, ${name}. What do you want for X-mas`;
}

function setText() {
    let name = prompt("What is your name?");
    myText2.innerHTML = greeting(name);
}

function sayHi(){
    alert("Hi from second listener");
}

function setTextChristmas() {
    let name = prompt("What is your name?");
    myText2.innerHTML = christmasGreeting(name);
}



myButton2.onclick = setText;

// myButton2.addEventListener("click", setText);
// myButton2.addEventListener("click", sayHi);


function logButtonClick(){
    console.log("a button was clicked.")
    document.body.style.backgroundColor = "blue";
}

for(let i=0; i<buttons.length; i++){
    let b = buttons[i]
    b.addEventListener("click", logButtonClick);
}

function setBackgroundPink(){
    document.body.style.backgroundColor = "pink";
}

document.body.onload = setBackgroundPink;

function setBackgroundGreen(){
    document.body.style.backgroundColor = "green";
}

myButton2.addEventListener("mouseover",setBackgroundGreen)
myButton3.onmouseover = setBackgroundPink;
// myButton3.addEventListener("mouseover",setBackgroundPink)