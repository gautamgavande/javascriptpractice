// let str=""
// for(let i=0;i<5;i++){
//     for(let j=i;j<=i;j++){
//         str +="*"
//     }
//     console.log(str)
// }
// let str=""
// let n=5
// for(let i=0;i<n;i++){
//     for(let j=0;j<=n-i;j++){
//         str+="*"
//     }
//     console.log(str)
//     }
//     let rows=5
//     var count=1;
//   for (let i = rows; i > 0; i--) {
//     let stars = '';
//     for (let j = 0; j < i; j++) {
//      stars = (stars+ "    " +count++)
//     }
//     console.log(stars);
//   }

// for(let i=0;i<5;i++){
//     console.log("%")
// }


// let symbols = '';
// for(let i = 0; i < 5; i++){
//     symbols += '%';
// }
// console.log(symbols);

// for (let i = 0; i < 5; i++) {
//     let row = '';
//     for (let j = 0; j < 5; j++) {
//         row += '*';
//     }
//     console.log(row);
// }

let str="abhishek"
let count=0;

for(let i=0;i<str.length;i++){
  if(str[i]=="a" || str[i]=="e" ||str[i]=="i"|| str[i]=="o" || str[i]=="u"){
    count+=1;
    console.log(str[i])
  }
}
console.log(count)