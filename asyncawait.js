// let url=("https://jsonplaceholder.typicode.com/comments")
// async function my(id){
//     let data = await fetch(`${url}/${id}`)
//     let f =   await data.json()
//     console.log(f)
// }
// my(10);

// a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000); 
// });

// async function
// async function asyncFunc() {

//     // wait until the promise resolves 
//     let result = await promise; 

//     console.log(result);
//     console.log('hello');
// }

// calling the async function
// asyncFunc();



// var a=10;
// var b=++a;
// var c=a++;
// console.log(a)
// console.log(b)
// console.log(c)



// async function f() {
//     console.log('Async function.');
//     return Promise.resolve(1);
// }

// f().then(function(result) {
//     console.log(result)
// });

// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {
    try {
        // wait until the promise resolves 
        let result = await promise; 

        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}
// calling the async function
asyncFunc(); // Promise resolved