// //obj creation
let movie={
title:"goat",
nickname:"anil",
heroine:"sneha"
}
console.log(movie.title); // goat
console.log(movie.nickname); // anil


// //methodes
// //keys()


let ipl={
    name:"csk",
    trophies:5,
    players:["dhoni","raina","jadeja"],
}
console.log(Object.keys(ipl));//return keys
console.log(Object.values(ipl));//return values
console.log(Object.entries(ipl));//return key value pair


//objest.freeze() we cannot add,update and delete
let obj={
    name:"akshay",
    age:21}
    console.log(Object.freeze(obj));//freeze the object
    obj.name="anil";
    console.log(obj.name);// akshay
    obj.age=22;
    console.log(obj.age);// 21
    delete obj.name;
    console.log(obj.name);// akshay


    object.seal() //we can update but cannot add and delete
    let obj1={
        name:"tom",
        age:25}
        console.log(Object.seal(obj1));
        obj1.name="jerry";
        console.log(obj1.name);// jerry
        obj1.gender="male";
        console.log(obj1.gender);// undefined
        delete obj1.name;
        console.log(obj1.name);// jerry

        
      //  object .isfrozen() true if object is frozen else false
        
let user = {
    name: "Akshay"
};
Object.freeze(user);//true
console.log(Object.isFrozen(user));


//object.isSealed() true if object is sealed else false
let use={
    name:"akshay"
}
Object.seal(use);
console.log(Object.isSealed(use));//true
