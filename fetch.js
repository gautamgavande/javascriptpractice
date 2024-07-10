// import fetch from "node-fetch"
// fetch("https://jsonplaceholder.typicode.com/comments")
// .then((data)=>{
//     let d= data.json()
//     return d
// })

// .then ((da)=>{
//     console.log(da)
// })

// let url="https://jsonplaceholder.typicode.com/comments"
// async function feat(){
//     let response=await fetch(url) //  first promise return karta hai 
//     // console.log(response) //json formet me data aayenga 
//     let data= await response.json() 
//     //async code hai ye bhi isi lia await use honga json data ko json object me convet karta hai,second promise return karta hai isi lia ye aync code hai 
//     //ueable data rahta hai 
//     console.log(data)
// }
// feat()

// function getdata(){
//     fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((res)=>{
//         return res.json()
//         console.log(res)
//     },(err)=>{
//         console.log(err)
//     }).then((ress)=>{
//         console.log(ress)
//     })
// }
// getdata()


async function get(){
    let res= await fetch("https://jsonplaceholder.typicode.com/comments")
    let final=await res.json()
    console.log(final)
}
get()