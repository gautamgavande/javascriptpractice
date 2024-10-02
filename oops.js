// const student={
//     name:"gautam",
//     age:20,
//     getdata:function(){
//         console.log(this.age)
//     }
// }
// student.getdata()



// const employee={
//     caltax(){
//         console.log("tax rate is 20%")
//     }
// }

// const gautam={
//     salary:5000,
//     caltax(){
//         console.log("tax rate 50%")
//     }
// }

// gautam.__proto__=employee

// gautam.caltax()


// const employee={
//     name:"gautam",
//     age:20,
//     data:function(){
//         console.log(`${this.name} and age is ${this.age}`)
//     }
// }

// const newemploye={
//     name:"sachin",
//     age:30,
// }
// newemploye.__proto__= employee
// console.log(newemploye.name)

// newemploye.data()


// class Car {
//     start(){
//         console.log("start")
//     }

//     stop(){
//         console.log("stop")
//     }

//     setBrand(brand){
//         this.brand=brand
//         console.log(this.brand)
//     }
// }
// let fortuner=new Car()
// fortuner.start()
// fortuner.setBrand("laxis")


// class Car {
//     constructor(name){
//         this.name=name
//         console.log("i am a constructor",name)
//     }
//     start(){
//         console.log("start")
//     }

//     stop(){
//         console.log("stop")
//     }

//     setBrand(brand){
//         this.brand=brand
//         console.log(this.brand)
//     }
// }
// let fortuner=new Car("gautam")
// let fortuner1=new Car("anshul")


///inheritance///

// class A{
//     data(){
//         console.log("i am data")
//     }
// }
// class B extends A{

// }
// let obj= new B()
// obj.data()


// class Person{
//     eat(){
//         console.log("they can eat")
//     }

//     sleep(){
//         console.log("they can sleep")
//     }
// }

// class Engineer extends Person{
//   work(){
//     console.log("they can solve problem")
//   }
// }

// let obj=new Engineer()
// obj.eat()

class Person{
    constructor(name){
        this.name=name
        console.log("this is parent",name)
    }
}

class Child extends Person{
    constructor(name){
        console.log("this is child")
        super(name)
    }
    
}

let obj =new Child("gautam")