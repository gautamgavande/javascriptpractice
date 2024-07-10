// 1call......................
// var obj1={
//     name:"gautam",
//     contact:"betul",
//     feature: function(father,mother){
//         console.log(`my name is ${this.name} i am from ${this.contact} and my father is ${father} nad mother name is ${mother}`)
//     }
// }
// // obj1.feature()
// var obj2={
//     name :"kuch bhi",
//     contact:"bhopal"
// }
// obj1.feature.call(obj2 ,"xyz","abc");

//2...

// function abcd(){
//     console.log(`my name is ${this.name}`)
// }
// obj1={
//     name:"gautam"
// }
// obj2={
//     name :"ashish"
// }
// abcd.call(obj1)
// abcd.call(obj2)

//apply...................
// let obj1={
//     name:"gautam ",
//     sarname:"gavande",
//     class:"12th",
//     feature :function(city,state,value){
//         console.log(`your name is ${this.name} ${this.sarname} my class is ${this.class}
//         my city is${city} and state is${state} and my value is in my cuntry${value}`)
//     }
// }
// let obj2={
//     name:"ashish",
//     sarname:"sachin",
//     class:"12th"
// }
// obj1.feature.apply(obj2,["bhopal","mp","5 star"])


//3bind..........................
// let obj1={
//     name:"gautam",
//     subname:"gavande",
//     feature:function(){
//         console.log(`your name is ${this.name} and subname is ${this.subname}`)
//     }
// }
// var a=obj1.feature.bind(obj1);
// a();

// function abcd(){
//     console.log("hello",this.name)
// }
// let b={
//     name:"gautam"

// }
// var a=abcd.bind(b);
// a()






















