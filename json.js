// let data={
//     name:"aalik",
//     age:82
// }
// let data2=JSON.stringify(data) //{"name":"aalik","age":82} //convert your object into a json formet 
// // let data1= data.json() // ye promise return karta hai isi lia yaha nahi chalenga 
// console.log(data2)


// json object
const jsonData = '{ "name": "John", "age": 22 }';

// converting to JavaScript object
const obj = JSON.parse(jsonData);
console.log(obj)

// accessing the data
console.log(obj.name); // Joh