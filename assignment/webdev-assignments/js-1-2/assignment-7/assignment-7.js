
let number;
number = Number(prompt("Enter a number of dice rolls:"));

let result = 0;

for (let i = 0; i < number; i++) {
    let dice = Math.floor(Math.random() * 6) + 1;
    result = result + dice;
}

document.getElementById("result").textContent =
    "The sum of the dice rolls is: " + result;
