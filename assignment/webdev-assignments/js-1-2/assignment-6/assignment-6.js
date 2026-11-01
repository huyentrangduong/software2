
let answer = confirm("Should I calculate the square root?");
let result;

if (answer) {
    let number = Number(prompt("Enter a number:"));

    if (number < 0) {
        result = "The square root of a negative number is not defined";
    } else {
        result = Math.sqrt(number);
    }
} else {
    result = "The square root is not calculated.";
}

document.getElementById("result").textContent = result;
