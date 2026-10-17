 async function abc() {

    let myres= await fetch('https://fakestoreapi.com/products' )
    console.log(myres);
    
    let mydata= await myres.json()
    console.log(mydata);
    
 }
 abc()



 