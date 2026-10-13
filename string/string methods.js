
 let str="i am developer"

 console.log(str.length);
 console.log(str.charAt(5));
 console.log(str.charCodeAt(5));//asci number
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());
console.log(str.indexOf("i"));
console.log(str.lastIndexOf("i"));
console.log(str.startsWith("i"));


console.log(str.endsWith("developer"));
console.log(str.includes("am"));
console.log(str.slice(2,4,-1));//accept negative index
console.log(str.substring(2,4,-1));

let fruits = "apple,mango,orange";
console.log(fruits.split(","));


let str1="helloworld";
// console.log(str1.replace("world","akshay"));
console.log(str1.replaceAll("helloworld","developer"));//replace all occurence


//padstart
let number = "5";
console.log(number.padStart(3, "0"));//005
console.log(number.padEnd(3, "0"));//500
console.log(number.padStart(3,"str"));
