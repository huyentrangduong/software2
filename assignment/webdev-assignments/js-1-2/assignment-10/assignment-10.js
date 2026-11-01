
let number = Number(prompt("Enter the number of dice:"));
let target = Number(prompt("Enter the desired sum:"));

let simulation = 10000;
let success = 0;

for (let i = 0; i < simulation; i++) {
    let sum = 0;

    for (let j = 0; j < number; j++) {
        let dice = Math.floor(Math.random() * 6) + 1;
        sum = sum + dice;
    }

    if (sum === target) {
        success++;
    }
}

let probability = (success / simulation) * 100;

document.getElementById("result").textContent =
    "Probability to get sum " + target +
    " with " + number + " dice is " +
    probability.toFixed(2) + "%";
