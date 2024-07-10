
// console.log("hiii1");
// console.log("hiii2");
// console.log("hiii13");
// setTimeout(function(){
//     console.log("inside the settimeout")
// },5000)
// console.log("hiii14");
// console.log("hiii15");

// console.log("hiii1")
// console.log("hiii2")
// setTimeout(function(){
//     console.log("hiii3")
// },0)
// var p1=1;
// let p=new Promise(function(resolve,reject){
//         if(p1==1){
//              resolve("resolve the problem")
//         }
//         else{
//              reject("reject the problem")
//         }
// })
// console.log(p)

// let object1 = new Promise(function(resolve, reject){
//     let per = 10;
//     if(per > 33)
//      resolve("Supplimentry in one subject")
//     else
//      reject("Failed")
//    })
//    //if fullfilled
//    object1.then((output1)=>{
//     console.log(`Stage 1: ${output1}`)
    
//    })
//    //if rejected
//    object1.catch((msg)=>{
//     console.log("Reject ", msg)
//    })
   
//    object1.finally(()=>{
//     console.log("This is finally method")
//    })

// let app=new Promise(function(resolve,reject){
//     let a=-5;
//     if(a>0){
//         resolve("this is positive number")
//     }
//     else{
//         reject("this is nagative number")
//     }
// })
// .then((data)=>{
//     console.log(`this is positive nuber result is ${data}`)
//     // return data;

//  })
 //.then((data1)=>{
//     console.log("result :",data1)
// })
// .catch((data2)=>{
//    console.log(`this is nagative number ${data2}`)
// })
// .finally(()=>{
//     console.log("this is final ind vs pak")
// })

// import fetch from "node-fetch"
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=>{
//     let newdata = data.json()
//     return newdata;
// })
// .then((data1)=>{
//     console.log(data1)
// })
// .catch((err)=>{
//     console.log(err)  
// })
// fetch("https://jsonplaceholder.typicode.com/comments")
// .then((data)=>{
//       let newdata=data
//       return newdata;
// })
// .then((dd)=>{
//     console.log(dd)
// })



///////////////////////
// let m=22;
// let p1= new Promise(function(resolve,reject){
                
//     if(m>33){
//         resolve("well done guru")
//     }
//     else{
//         reject("try again")
//     }
// })
// console.log(p1)
// p1.then((res)=>{
//     console.log(res)
// })

// then 2 callback function bhi leta hai catch ka kam bhi kar leta hai
// p1.then((res)=>{console.log(res)},(rej)=>{console.log(rej)})


// console.log(p1)
// p1.then((res)=>{
//     console.log(res)
// })
// p1.catch((rej)=>{
//     console.log(rej)
// })
// p1.finally(()=>{
//     console.log("finally")
// })

let p1= new Promise((resolve,reject)=>{
     setTimeout(() => {
        resolve("settime out")
     }, 5000);
     console.log("hiii")
})
p1.then((res)=>{
    console.log(res)
})