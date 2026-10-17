let mypromise=new Promise((res,rej)=>{
    
    if (false) {
        console.log("i am true")
    }else{
        console.log("error")//error
    }
})






 let mypromise1= new Promise((res,rej)=>{
  
  res("data")
})
console.log(mypromise)

mypromise.then((e)=>{

console.log(e)

}).catch(()=>{
    console.log(" i am catch")
}).finally(()=>{
    console.log("i am finally")
})
