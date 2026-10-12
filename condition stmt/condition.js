
//if
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote");
}

//if else
let marks = 30;
if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//if else if
let mark = 85;
if (mark>= 90) {
    console.log("Grade A");
} else if (mark >= 75) {
    console.log("Grade B");
} else if (mark >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


//switch statement
let day = 2;
switch (day) {
    case 1:console.log("Today is Monday");
        break;                      
        case 2:console.log("Today is Tuesday");
        break;
        case 3:console.log("Today is Wednesday");
        }  

        //ternary operator
        let number = 10;
        let result = (number % 2 === 0) ? "Even" : "Odd";
        console.log(result);