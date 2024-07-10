// 1.******
// console.log("line 1");
// console.log("line 2");
// setTimeout(()=>{
//     console.log("line 4")
// },5000)
// console.log("line 4");
// console.log("line 5")

// 2.**********

// let sum=()=>{
//     return"hello"
// }
// let dealy=5000;
// function f2(sum,d){
//     console.log("this is f2 function");
//     console.log(sum())
//     console.log(d)
// }
// f2(sum,dealy)

// 3***********

// function sum1(a,b){
//     return a+b;
// }
// let sum=(a,b)=>(a+b);
// let r=sum(5,4)
// let s=sum1(5,4)
// console.log(s)
// console.log(r)

//4***********

// let sum=()=>{
//     console.log("hello sum")
// }
// let delay=6000;
// setTimeout(sum,delay)

//5*********
// setTimeout(()=>{
//     console.log("hello i am gautam")
// },3000)

//6*************
// var count=0;
// let a=setInterval(()=>{
//     count = count+1;
//     if(count<=5){
//         console.log("i am lessthan 5")
//     }
//     else{
//         console.log("i am greter than 5");
//         clearInterval(a)
//     }
    
// },2000)

//7******************
// var count=0;
// setInterval(()=>{
//     count = count+1;
//     if(count<=5){
//         console.log("i am lessthan 5")
//     }
//     else{
//         console.log("i am greter than 5");
//         clearInterval()
//     }
    
// },2000)

//8************
// let curent= new Date().getTime();
// console.log("start time:",curent)
// let c=0;
// let r=setInterval(()=>{
//     let interval=new Date().getTime();
//     if(interval-curent<=60000){
//         console.log(c++);
//         console.log("hiii")
//     }else{
//         console.log(interval)
//         clearInterval(r)

//     }
// },2000)

// function add(a,b){

//     console.log(a);
//      b();
  
// }
// add(5,b)
// function b(){
//     console.log("hii")
// }

function add( a,b){
    console.log(a)
    b()
}
add("hii i am hero",c)
function c(){
    console.log("i am callback function")
}
// var a=[1,2,3]
// console.log(typeof a)
