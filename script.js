// let str = "i am gautam";
// let output = ''
// for (var a = str.length - 1; a >= 0; a--) {
//     output += str[a];
// }
// console.log(output);
// let arrstr = str.split(' , '); //.join()
// console.log(arrstr)


//sir....................
let str = "I am from Bhopal India"
//     // Output1 => "aidnI lapohB morf ma I"
//     // Output2 => "I ma morf lapohB aidnI"
// let Output1 = '';
// console.log(str)
// for (let i = str.length - 1; i >= 0; i--) {
//     Output1 += str[i]
// }
// console.log(Output1)



//sir''''''''''''''''''
// let strArr = str.split(' ');
// console.log(str)
// console.log(strArr)
// let result2 = '';
// let newArr = [];
// for (let ele of strArr) {
//     // console.log(ele)
//     for (let i = ele.length - 1; i >= 0; i--) {
//         result2 += ele[i]
//     }
//     // console.log(result2)
//     newArr.push(result2)
//     result2 = '';
// }
// console.log(newArr)
// console.log(newArr.join(' '))

//////////////////////////
// function add(a,b){
//     var x=a;
//     var y=b;
//     var z=x+y;
// return z;
// }
// var g=add(10,20);
// console.log(g)
// function minus(a,b)
// {
//     var a=10;
//     var b=5;
//     var c=a-b;
//     console.log(c);

// }

// add(44,55)
// add()
// minus();
// var a=5;
// function add(){
//     var y=10;
//     var z=a+y;
//     console.log(z)
//     // return y;

// }
// add()
// console.log(a);

// var a=5;
// var b=10;
// var c=function sub(){
//     console.log("i am callback function");
// }
// function sum(x,y,z){
//     console.log(x+y);
//     z()
// }
// sum(a,b,c)
// var b=10;
// function outer(){
//     console.log(b)
//     var a=12;
//     function inner(){
//         console.log(a);
//         console.log(b)
//     }
//     inner()
// }
// outer();

let array=[10,20,30,40,40,50,10,60,30,20]
let newarr=array.filter(function(e,ind){
         return array.indexOf(e)===ind
})
console.log(newarr)

console.log(array.indexOf(10))// return the index of the element 

