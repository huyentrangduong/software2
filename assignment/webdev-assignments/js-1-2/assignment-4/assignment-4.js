
let name = prompt("Enter your name:");

let number = Math.floor(Math.random() * 4) + 1;

let house;

if (number === 1) {
    house = "Gryffindor";
} else if (number === 2) {
    house = "Slytherin";
} else if (number === 3) {
    house = "Hufflepuff";
} else {
    house = "Ravenclaw";
}

document.getElementById("result").textContent =
    name + ", you are " + house + ".";
