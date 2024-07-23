// var i=0;
// var arr=[1,2,3,4,5];
// var sum=0;
// while(i<arr.length){
//     // sum=sum+arr[i]
//     sum+=arr[i];
//     i++;
// }
// console.log(sum)

// var i=0;
// var j=i++ + i++;
// //1 ho gai hai par use 0 hi honga + 1 use honga par value 2 ho gai hai;  output:1;
// console.log(j)
// console.log(i)


/// interview question......

//let data ="hello-my-name-is-amit";
// let newa=data.split("-");
// console.log(newa)
// console.log(newa.indexOf("amit"))
//console.log(data.indexOf("amit"))

//let data=[10,10,10,20,]
// function removeDuplicates(array) {
//     return array.filter((value, index) => array.indexOf(value) === index);
//   }
  
//   // Example usage:
//   const numbers = [5, 14, 14, 5, 40, 7, 7];
//   const uniqueNumbers = removeDuplicates(numbers);
//   console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]-
  

// for(var i=10;i>0;i--){
//   console.log(i)
// }
// var i=0;
// while(i<=10){
//   console.log(i)
//   // i+=1
//   // i=i+1;
//   i++;
// }
// var i=1
// do{
// console.log("hii")
// i++;
// }while(i<0)


function isfebonaci(n){
    let a=0
    let b=1
    let temp;
    if(n >=0){console.log(a)}

    if(n >=0){console.log(b)}

    for(let i=2;i<=n;i++){
            temp=a+b;
            a=b;
            b=temp;
            console.log(temp)
            
        }
}
isfebonaci(8)