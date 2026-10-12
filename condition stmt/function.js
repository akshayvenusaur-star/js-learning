//named function
function abc(a, b){
    return a + b;
}
abc(2, 3); // returns 5

//anonymous function
let anonymousFunc = function(a, b){
    console.log("i am ");
}
anonymousFunc(); // returns "i am "


//function with expression
let a=function(){
    console.log("i am expression function");
}
a(); // returns "i am expression function"

//iife function
(function(){
    console.log("i am iife function");
})();

//arrow function
let myarrow=()=>{
    console.log("i am arrow function");
}       
myarrow(); //  i am arrow function


//nested function
function parent(){
   console.log("i am parent function");
    function child(){
        console.log("i am child function");
    }
    child();
}
parent(); // returns "i am child function"




//higher order function

function add(a, b) {
    return a + b;
}
function calculate(operation) {
    let result = operation(10, 20);
    console.log(result);
}
calculate(add);

//callback function
function greet() {
    console.log("Hello Akshay");
}
function process(callback) {
    console.log("Starting...");
    callback();
}
process(greet);

//generator function
function* gen(){
    console.log("ak")
    yield
    console.log("ab")
    console.log("horli")
}
let g=gen()
console.log(g.next())