//push()
let fruits = ["Apple", "Mango"];
fruits.push("Orange");
console.log(fruits);// ["Apple", "Mango", "Orange"]


//pop()
fruits.pop();
console.log(fruits);// ["Apple", "Mango"]   

//unshift()
let color = ["red", "orange"];
color.unshift("yellow");
console.log(color);// ["yellow", "red", "orange"]

//shift()
color.shift();
console.log(color);// ["red", "orange"]

//slice()
let name = ["akshay", "anil", "tom", "jerry"];
console.log(name.slice(1, 3));// ["anil", "tom"]

//splice()it will add and remove
let name1 = ["akshay", "anil", "tom", "jerry"];
name1.splice(1, 2, "developer");
console.log(name1);// ["akshay", "developer", "jerry"]

//reverse()
let num = [1, 2, 3, 4, 5];
console.log(num.reverse());// [5, 4, 3, 2, 1]

//forEach()
let fruits1 = ["Apple", "Mango", "Orange"];
fruits1.forEach(fruit => {
    console.log(fruit);// Apple, Mango, Orange or undefined
})


//map()
let numbers = [1, 2, 3, 4, 5];
let result = numbers.map(num => num * 2);
console.log(result);// [2, 4, 6, 8, 10]

//filter()
let mynum = [1, 2, 3, 4, 5];
let res = num.filter(num => {
    return num > 2;
})
console.log(res);// [3, 4, 5]


//find() it will return only first satisfying element
let mynum1 = [10, 20, 30, 40, 50];
let res1 = mynum1.find(num => {
    return num > 20;
});
console.log(res1);// 30

//findIndex() it will return index of first satisfying element
let n = [12, 30, 40, 50, 60];
let res2 = n.findIndex(num => {
    return num > 30;
})
console.log(res2);// 2

//some( return boolean value) it will return true if any one element satisfy the condition
let mark = [54, 60, 65, 80]
let passmark = mark.some(num => {
    return num > 60;
})
console.log(passmark);// true

//every() it will return true if all element satisfy the condition
let price = [100, 200, 300, 400];
let myprice = price.every(num => {
    return num > 50;
}
)
console.log(myprice);// true

//reduce() it will return single value
let marks = [10, 20, 30, 40, 50];
let total = marks.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(total);// 150          


//reduceRight() it will return single value from right to left
let words = ["JavaScript", "is", "fun"];
let myresult = words.reduceRight((text, word) => {
    return text + " " + word;
});

console.log(myresult);