// function a(){
//     var aa=5;
//     function b(){
//         var c=5
//         console.log(aa)
//         console.log(c)
//     }
   
//     b();
// }
// a();

// function add(a,b){
//     return a+b;
// }
// var c=add(4,5)
// console.log(c)


///callback function 
function callb(a,show){
     console.log(a)
     show()
}

function show(){
    console.log("hii i am show")
}
callb(5,show)
