//1.Arithmatic operator
let a = 10;
let b = 5;
console.log(a + b); // 15


//2.assignment opera
let balance = 100;
balance += 50;
console.log(balance); // 150

//3.comparison op
let a1 = 10;
let b1= 5;

console.log(a1 > b1);   // true
console.log(a1 < b1);   // false
console.log(10 >= 10); // true
console.log(5 <= 5);  // true
console.log(10 == 10); // true
console.log(10 != 5);  // true
console.log(10 === 10);// true
console.log(10 !== 5); // true

//4.increment decrement
let a2 = 5;
a2++;
console.log(a2); // 6
a2--;
console.log(a2); // 5



//5.logical And op both the conditions should be true
let age = 18;
let vote=true;
console.log(age>=18 && vote);//true

//6.logical OR op at least one condition should be true
let age1 = 16;
let vote1=false;
console.log(age1>=18 || vote1);//false

//7.logical NOT op ture means false and false means true
let age2 = 20;
console.log(!(age2>=18)); // false

//8.ternary operator
let mark = 75;
let result = mark >= 35 ? "Pass" : "Fail";
console.log(result);//pass