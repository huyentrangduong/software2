let no1 = Number(prompt("Enter an integer:"));
let no2 = Number(prompt("Enter an integer:"));
let no3 = Number(prompt("Enter an integer:"));
            
let sum = no1 + no2 + no3;
let product = no1*no2*no3;
let average = sum/3;

document.getElementById("result").innerHTML =
    "Sum: " + sum + "<br>" +
    "Product: " + product + "<br>" +
    "Average: " + average;