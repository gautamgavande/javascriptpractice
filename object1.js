//1. this is object leteral
// const person={
//     name:"John",
//     age: 25
// } 

// const person1={
//     name:"John",
//     age: 25
// } 
// console.log(person1)

///////////2. object constractor///////////
/////using function constractor

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// const person1=new Person("John",25);
// const person2=new Person("John",25);
// console.log(person1)

//callback function
// function myFunc(name){
//     console.log("hello "+name);
// }
// myFunc("john");

// function myFunc(callback){
//     console.log("hello");
//     callback("john");
// }


/////3. class constroctor
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// const person1=new Person("john",25);
// const person2=new Person("subhi",21);
// console.log(person1)
// console.log(person2)

////////////Using Object () constroctore
// const person=new Object({
//    name:"john",
//     age:25
// });


//using string
// const person=new String("john");
// console.log(person)

//promise
let person=new Promise((resolve,reject)=>{
    let a=1+2;
    if(a==2){
        resolve("success");
    }
    else{
    reject("failed");
}}
);
person.then((result)=>{
    console.log(result)
})
person.catch((result)=>{
    console.log(result)
})
// console.log(person)



