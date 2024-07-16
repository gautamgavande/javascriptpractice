/// ..................callback.................................

// function getdata(dataid, getnextdata){
//         //2s
//         setTimeout(()=>{
//             console.log("data",dataid)
//             if(getnextdata){
//                 getnextdata()
//             }
//         },2000);

// }
// getdata(1,sum)
// function sum(){
//     console.log("hiii")
// }


// getdata(1,()=>{
//     console.log("hello")
// })
 
//////callback hell................

// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{
//            getdata(4)
//         })
//     })
// })


//......................PROMISE..................

// const getpromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am promiss")
//         // resolve("sucsess")
//         reject("promiss rejected")
//     });
// }

// let promise=getpromise();
// promise.then((res)=>{
//     console.log("promise fulfild",res)
// })

// promise.catch((err1)=>{
//     console.log("rejected",err1)
// })

//.........................................

// problem ye hai ki dono ak satha chal rahe hai async1,async2 ham chahte hai ki pahle async1 chale fir async2 chale 
// isi lia  ham promise channig karenge ..............................


// function async1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            console.log("data 1")
//            resolve("sucess")  

//         },5000)
//     })
// }


// function async2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            console.log("data 2")
//            resolve("sucess")  

//         },5000)
//     })
// }

// console.log("feating data 1")
// let p1=async1()
// p1.then((res)=>{
//     console.log(res)
// })

// console.log("feating data 2")
// let p2=async2()
// p2.then((res)=>{
//     console.log(res)
// })



// ...............................CALLBACK CHANNING.....................

// function async1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            console.log("data 1")
//            resolve("sucess")  

//         },5000)
//     })
// }


// function async2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            console.log("data 2")
//            resolve("sucess")  

//         },5000)
//     })
// }

// console.log("feating data 1")
// let p1=async1()
// p1.then((res)=>{
//     console.log(res)
//     console.log("feating data 2")
//     let p2=async2()
//     p2.then((res)=>{
//     console.log(res)
// })
// })


// function getdata(dataid){
//     return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 console.log("data",dataid)
//                 resolve("sucess")
//             }, 2000);
//     })
// }

// getdata(1).then((res)=>{
//     console.log(res)

//     getdata(2).then((res)=>{
//         console.log(res)

//         getdata(3).then((res)=>{
//             console.log(res)
//         })
//     })
// })

//alternate.........................
// console.log("getting data 1")
// getdata(1)
//     .then((res)=>{
//         console.log("getting data 2")
//         return getdata(2)
//     })
//     .then((res)=>{
//         console.log("getting data 2")
//         return getdata(3)
//     })
//     .then((res)=>{
//         console.log(res)
//     })


//.......................ASYNC await...............................
// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(" wether data")
//             resolve(200)
//         },2000)
//     })
// }
// async function getwetherdata(){
//     await api();
//     await api();
//     await api();
//     await api();
// }
// getwetherdata()




// function getdata(dataid){
//         return new Promise((resolve,reject)=>{
//                 setTimeout(() => {
//                     console.log("data",dataid)
//                     resolve("sucess")
//                 }, 2000);
//         })
//     }

//  async function getalldata(){
//     console.log("get data 1")
//     await getdata(1)
//     console.log("get data 2")
//     await getdata(2)
//     console.log("get data 3")
//     await getdata(3)
//     console.log("get data 4")
//     await getdata(4)
//     console.log("get data 5")
//     await getdata(5)
//  }  
//  getalldata()


//........................IIFE.........

// function getdata(dataid){
//     return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 console.log("data",dataid)
//                 resolve("sucess")
//             }, 2000);
//     })
// }

//  (async function (){
//     console.log("get data 1")
//     await getdata(1)
//     console.log("get data 2")
//     await getdata(2)
//     console.log("get data 3")
//     await getdata(3)
//     console.log("get data 4")
//     await getdata(4)
//     console.log("get data 5")
//     await getdata(5)
//  }  )()
 


///////////////////////callback hall
// function getdata(dataid, getnextdata){
//     //2s
//     setTimeout(()=>{
//         console.log("data",dataid)
//         if(getnextdata){
//             getnextdata()
//         }
//     },2000);

// }
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{
//            getdata(4)
//         })
//     })
// })
    
/////////////////////////promise alll
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("one"), 1000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("two"), 2000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("three"), 3000);
//   });
//   const p4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("four"), 4000);
//   });
//   const p5 = new Promise((resolve, reject) => {
//     reject(new Error("reject"));
//   });
  
//   // Using .catch:
//   Promise.all([p1, p2, p3, p4])
//     .then((values) => {
//       console.log(values);
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });
// student object
let student = {
    name: "John"
};

// add new method
student.greet = function () {
    console.log("Hello");
};

// access greet() method
student.greet();
console.log(student)

// Output: Hello