
function dice_roll (num_of_sides) {
    const roll = Math.floor((Math.random() * num_of_sides) + 1);
    return roll;
}
const sides = Number(prompt("Enter number of sides:"));
const list = document.querySelector("#target");

let result;
do {
    result = dice_roll(sides);
    const li = document.createElement("li");
    li.textContent = result;
    list.appendChild(li);
} while (result !== sides);
