try {
    console.log("welcome");
    console.log(a);
     
} catch (error) {
    console.log("not assigned");//welcome,not assigned
    
    
}


try {
    let age = 20;
    console.log(age!=20);
    throw new Error("");
    
} catch (error) {
    console.log("Error handled");//20 ,error handled
}


try {
    let age=8;
    if(age>=18){
        console.log("right age to vote");
        
    }else{
        throw new Error("");
        
    }
} catch (error) {
    console.log("not right age to vote");
    
}
