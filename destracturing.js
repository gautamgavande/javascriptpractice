// let arr=[1,2,3]
// // let [...n3]=arr
// function app(x){
//     console.log(...x)
// }
// app(arr)
// console.log(n3);

// function ab(y,...x){
//     console.log(x)
//     console.log(y)
//  }
// ab(4,5,5,8,6);

// obj1={
//     nae:"gautam",
//     class:55,
//     school:'paradsinga'

// }

// let {...obj}=obj1;
// console.log(obj)
// console.log(obj.class)
// console.log(obj1.school);

// function Person(a,b){
//     this.name=a;
//     this.age=b;
// }
// let p1=new Person("r",20);
// let p2=new Person("f",20);
// let p3=new Person("h",20);
// let p4=new Person("k",20);
// console.log(p1,p2,p3,p4)

// let arr=[1,2,3,2];
//  let [x,...x2]=arr;
//  console.log(x2);

// let a;
// console.log(a)
// console.log(b)



// const arr=[1,2,3,4,5]
// for(var i=0;i<arr.length;i++){
//     setTimeout(()=>{
//         console.log(`index:${i},valuue${arr[i]}`)
//     },1000)
// }

// var a=[1,2,3,4,5,7]
// var [x,x2,x3,x4,x5=6,y]=a;
// console.log(y);

// let person={
//     name:"gautam",
//     age:"21",
//     phone:"123"

// }
// // let{name,age,phone}=person
// let{phone,...p}=person

// console.log(p)
// var arr=[1,2,3,4,5,6]
// var [...c]=arr
// console.log(c)

// var person={
//     name:"alok",
//     age:20,
//     mo:"12346",
//     add:"bhopal"
// }
// var {name,...other}=person;
// console.log({name,...other})

// .....................///////////////////////////////////......................................



//arrray or object ko devide karna or alag alag variable me store karna  destracturing kahlata hai ...
// let name=["gautam ","aalok"]
// let n1=name[0]
// let n2=name[1]
// console.log(n1,n2)


// pack of data ko unpack karna destrscturing kahlata hai

// let [n1,n2]=name;//destracturing karna
// console.log(n1,n2) 


// ...reast operator .......
// let name=["a","b","c","d"]
// console.log(name)
// let [n1,n2,...n3]=name //rest operator use to store rest element ....bache hua element ko store karna
// let [...n1,n2,n3]=name //asa nahi use hota hai error aayengi support nahi karta hai ............
// console.log(n3)


// console.log(...name) //spered operator ka use karke array ki value ko sperade karte hai means normal string ki form me print hoti hai value 


// destracturing of object..................

// let obj={name:"alok",age:20,city:"bhopal"} //in object we are doing destracturing with the help of key name
// let {name,age,city}=obj 
// console.log(name)

// let {name,city,}=obj 
// console.log(city)

// let {name,...u2}=obj
// console.log(u2)



//...called spread operator.........


// question copy Array.......
//1. method

// let a=[1,2,3.4,5]
// let newa=[]
// for(let i=0;i<a.length;i++){
//     newa[i]=a[i]
// }
// console.log(newa)


//2.method.........
// let a=[1,2,3.4,5]
// let newa=[]
// for(let i=0;i<a.length;i++){
//     newa.push(a[i])
// }
// console.log(newa)

//3. METHOD........USING ... OPERATOR
// let arr=[1,2,3,4,5]
// let [...a]=arr;
// console.log(a)


/////////////
// let arr=["agam","alok","ankit"]

// let p=arr.join(" ")
// console.log(p) //agam alok ankit

// let p=arr.join("-")
// console.log(p) //agam-alok-ankit

// let p=arr.join(",")
// console.log(p)  //agam,alok,ankit

//sperad operator right side  me aata hai ............
// let arr=[1,2,3,4,5,6]

// let newarr=[...arr,6,7,8,9]
// console.log(newarr)


// let p=[...arr,newarr]
// console.log(p)

// function add(n1,n2,n3,n4){
//     console.log(n1+n2+n3+n4)
// }
// add(1,2,3,4)


// ............WITH THE HELP OF REST OPERATOR WE HANDLE THE VALUE OF ARGUMENT IN FUNCTION 

// function add(...rest){
//     let k=0;
//     for(let i=0;i<rest.length;i++){
//         k +=rest[i]
//     }
//     console.log(k)
// }

// add(1,2,3,4,5)


// function add(...t){ // reast operator  
//     let k=0;
//     for(let i=0;i<t.length;i++){
//         k +=t[i]
//     }
//     console.log(k)
// }

// let a=[1,2,3,4,5]
// add(...a) //spread operatotr  
// add(1,2,3,4,5)

let obj1={
    name:"gautam",
    age:20,
    city:"bhopal",
    address:"betul",
    sarname:"gavande"   
}

let {name,city,...obj}=obj1
console.log(obj)
console.log(name)
console.log(name)
console.log(city)



