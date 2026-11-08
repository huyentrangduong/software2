const nums =[];

while (true){
    const input = Number(prompt("Enter the user for numbers:"));
    if (nums.includes(input)) {
        alert("The number has already been given!");
        break;
    }
    nums.push(input);
}

nums.sort((a, b) => a - b);
console.log(nums);
