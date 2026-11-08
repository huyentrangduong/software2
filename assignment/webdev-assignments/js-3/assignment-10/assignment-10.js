const number = Number(prompt("Number of candidates:"));

const candidates = [];

for (let i = 0; i < number; i++) {
    const name = prompt("Name for candidate " + (i + 1));

    candidates.push({
        name: name,
        votes: 0
    });
}

const voters = Number(prompt("Number of voters:"));

for (let i = 0; i < voters; i++) {
    const vote = prompt("Vote for candidate:");

    if (vote === "" || vote === null) {
        continue;
    }

    for (let j = 0; j < candidates.length; j++) {
        if (candidates[j].name === vote) {
            candidates[j].votes++;
            break;
        }
    }
}

candidates.sort((a, b) => b.votes - a.votes);

// Step 7: Print the winner and results
console.log(
    `The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`
);

console.log("results:");

for (let i = 0; i < candidates.length; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
}