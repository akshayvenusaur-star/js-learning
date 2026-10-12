//redeclaration
var a=10
var a=15 //possible
console.log(a)

let b=20
let b=30 
console.log(b)//not possible

const c1=1
const c1=2 
console.log();// not possible


initialization
var a=15
a=20
console.log(a)//possible

let b=10
b=15
console.log(b)//posiible

const c=1
c=2
console.log(c)//not possible


global scope
var a=100
let b=200
const c=300
console.log("global scope")
console.log(a,b,c)

//block scope
{
    console.log("block scope");
    console.log(a,b,c)
    let d=1000
    const e=2000
    var f=3000
    console.log(d,e,f)

}
console.log(f)



//local scope
function abc(){
   console.log(" local scope"); 
   console.log(a,b,c)
   let m=1
   const n=2
   var o=3
   console.log(m,n,o)
}
 abc();
  

 var doesnot follow block scope

if(true){
    var a=10;
}
console.log(a);//10

if(true){
let b=20;    
}
console.log(b);//error