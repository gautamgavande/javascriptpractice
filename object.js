// let obj = {
//         name: "gautam",
//         fna: "p",

//     }
// console.log(obj)
// console.log(obj["name"])
// console.log(obj.name)
// let sum = 0;

// let per = [{
//             name: "gautam",
//             fna: "p",
//             score: 40
//         },
//         {
//             name: "gautam",
//             fna: "q",
//             score: 40

//         }, {
//             name: "gautam",
//             fna: "q",
//             score: 40

//         }, {
//             name: "gautam",
//             fna: "q",
//             score: 40

//         }
//     ]
    // console.log(per[0])
    // console.log(per[0].fna + per[1].fna)
// for (var a = 0; a < per.length; a++) {
//     sum += per[a].score;

// }
// console.log(sum);

// var person={
//     name:"gautam",
//     age:20,
//     sub:[20,30,40],
//     pro:{
//         class:"cse1",
//         city:"betul",
//         vill:10
//     }
// }
// console.log(person.sub[0]+person.sub[1]+person.sub[2]/300*100)


// var a= [
//     {
//         name:"gautam",
//         class:"cse",
//         school:"paradsinga",
//         Number:[12,11,14]
//     },
//     {
//         age :18,
//         city:"bhopal"
//     },
//     [52,58,17]   
// ]
// console.log(a[2][2])





// function Person(a,b){
//     this.name=a
//     this.age=b
// }
// let p1=new Person("gautam",20)
// let p2=new Person("gautam1",21)

// Person.car="maruti"  // isse add nahi hongi property prototype ka use karna padenga
// console.log(p1,p2)  //  Person { name: 'gautam', age: 20 } Person { name: 'gautam1', age: 21 }

// //using prototype to add 
// Person.prototype.car="maruti"
// console.log(p1,p2) //Person { name: 'gautam', age: 20 } Person { name: 'gautam1', age: 21 }

// console.log(p1.car)//maruti///isme bhi value nahi batayenga iske lia specially property name likhana padenga tab access hongi
// p1.car='suzuki'
// console.log(p1) 
// //khud ki car ki value denga
// console.log(p1.__proto__.car)//parent ki car means original canstructor function ki propety access karne ke lia __proto__ ka use karte hai 


