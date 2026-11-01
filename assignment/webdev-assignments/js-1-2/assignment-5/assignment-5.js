
let year;
year = Number(prompt("Enter a year:"));

let result;

if (year % 400 === 0 ||
    (year % 4 === 0 && year % 100 !== 0)) {

    result = year + " is a leap year.";

} else {

    result = year + " is not a leap year.";
}

document.getElementById("result").textContent = result;
