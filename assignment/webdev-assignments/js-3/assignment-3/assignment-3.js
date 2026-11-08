const dogs = [];

for (let i = 0; i < 6; i++){
    let input = prompt("Enter names of six dogs:"+ (i+1));
    dogs.push(input);
}
dogs.sort();
dogs.reverse();

const list = document.querySelector("#target");

for (let i = 0; i< dogs.length; i++){
    const li = document.createElement("li")
    li.textContent = dogs[i];
    list.appendChild(li);
}
