const num = [];

while (true) {
    const user = Number(prompt("Enter a number (0 to stop):"));

    if (user === 0) {
        break;
    }

    num.push(user);
}

num.sort((a, b) => b - a);

console.log(num);