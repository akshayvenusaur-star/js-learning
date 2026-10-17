 let mymain=document.querySelector("main")
let myh1=document.createElement("h1")

myh1.textContent="i am header" //textcontent is used to modify the text and empty sapce
console.log(myh1)

let myinput=document.createElement("input")
myinput.placeholder="enter iuser name"
 mymain.appendChild(myh1)  //single arg
 mymain.append(myinput,myh1)//  multiple args
