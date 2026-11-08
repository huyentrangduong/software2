
const num = Number(prompt("Enter number of participants:"));

const participants =[];

for (let i = 0; i< num; i++) {
    const name = prompt("Enter participant " + (i + 1));
    participants.push(name);
}

participants.sort();

const list = document.querySelector("#target");

for (let i = 0; i < participants.length; i++){
    const li = document.createElement("li");
    li.textContent = participants[i];
    list.appendChild(li);
}



