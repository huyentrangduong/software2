
let number = Number(prompt("Enter an integer:"));
let isPrime = true;

if (number <= 1 || !Number.isInteger(number)) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    document.getElementById("result").textContent =
        number + " is a prime number.";
} else {
    document.getElementById("result").textContent =
        number + " is not a prime number.";
}
