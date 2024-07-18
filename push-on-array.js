function randomIndex(len) {
    // get a random number between 0 and 1.
    let rand1 = Math.random();
    // scale the number up to the length of the array
    let rand2 = rand1 * len;
    // convert to whole number
    let index = Math.floor(rand2);
    return index;
}


let cuteAnimals = ["Cat", "Dog", "Bunny", "Hamster"];
let scaryAnimals = ["lion", "tiger", "bear"];

console.log(scaryAnimals[0])
console.log(scaryAnimals[1])
console.log(scaryAnimals[2])
console.log(scaryAnimals.length)

function combineArrays() {
    for (let i = 0; i < scaryAnimals.length; i++) {
        let a;
        a = scaryAnimals[i];
        cuteAnimals.push(a);
    }
    console.log(cuteAnimals);
}

pushArray.onclick = combineArrays;


function showRandom() {
    let animals = ["Cat", "Dog", "Bunny", "Hamster"];
    let randomNumber = randomIndex(animals.length);
    let a = animals[randomNumber];
    alert(`Your random animals is ${a}`);
}

randomButton.onclick = showRandom;


function createList(){
    for(let i=0; i<cuteAnimals.length; i++) {
        animalList.innerHTML += `<li>${cuteAnimals[i]}</li>`;
    }

    // let i = 0;
    // animalList.innerHTML += `<li>${cuteAnimals[i]}</li>`;
    // i++
    // animalList.innerHTML += `<li>${cuteAnimals[i]}</li>`;
    // i++
    // animalList.innerHTML += `<li>${cuteAnimals[i]}</li>`;
    // i++
    // animalList.innerHTML += `<li>${cuteAnimals[i]}</li>`;
}

createListButton.onclick = createList;