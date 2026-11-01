
let startYear = Number(prompt("Enter the start year:"));
let endYear = Number(prompt("Enter the end year:"));

let result = document.getElementById("result");

let list = document.createElement("ul");

for (let year = startYear; year <= endYear; year++) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        let item = document.createElement("li");
        item.textContent = year;
        list.appendChild(item);
    }
}

result.appendChild(list);
