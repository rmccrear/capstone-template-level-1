
let cuteAnimals = ["Cat", "Dog", "Bunny", "Hamster"];
let scaryAnimals = ["lion", "tiger", "bear"];

console.log(scaryAnimals[0])
console.log(scaryAnimals[1])
console.log(scaryAnimals[2])
console.log(scaryAnimals.length)

function doJob() {
    for(let i=0; i<scaryAnimals.length; i++) {
        let a;
        a = scaryAnimals[i];
        cuteAnimals.push(a);
    }
    console.log(cuteAnimals);
}


pushArray.onclick = doJob;