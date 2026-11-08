
function dice_roll () {
    const roll = Math.floor((Math.random() * 6) + 1);
    return roll;
}
const list = document.querySelector("#target");

let result;
do {
    result = dice_roll();
    const li = document.createElement("li");
    li.textContent = result;
    list.appendChild(li);
} while (result !== 6);