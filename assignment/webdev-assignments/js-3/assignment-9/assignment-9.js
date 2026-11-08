function even(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }

    return result;
}

// Step 2: Create original array
const nums = [2, 7, 4];

// Step 3: Call the function
const output = even(nums);

// Step 4: Print both arrays to Console
console.log(nums);
console.log(output);