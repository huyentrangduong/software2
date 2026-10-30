let year; 
year = prompt("Enter a year:");


if (year % 4 ==0){
    } else if (year % 100 == 0 && year % 400 == 0){
    console.log(year + "is a leap year");
    } else {
    console.log(year + "is not a leap year");
}

    document.getElementById("result").innerHTML =
        year + " is a leap year." + "<br>" +
        year + " is not a leap year." + "<br>";


