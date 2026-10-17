try {
    console.log("welcome");
    console.log(a);
     
} catch (error) {
    console.log("not assigned");//welcome,not assigned
    
    
}




try {
    let age=8;
    if(age>=18){
        console.log("right age to vote");
        
    }else{
        throw new Error("not right age to vote");
        
    }
} catch (error) {
    console.log(error.message);//not right age to vote
    
}





try {
    let num = 5;

    if (num < 0) {
        throw new Error("Number is negative");
    }
    console.log("Positive number");
} catch (error) {
    console.log(error.message);//number is positive
}



try {
    let username = "";

    if (username === "") {
        throw new Error("Username is required");
    }
    console.log("Login successful");
} catch (error) {
    console.log(error.message);//user name required
}