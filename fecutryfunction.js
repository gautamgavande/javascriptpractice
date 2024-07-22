/* A factory function in JavaScript is a function that returns a new object. 
 It's called "factory" because it can be used to create multiple instances of objects, similar to how a factory produces multiple items.
 Factory functions provide a clean and straightforward way to create objects, and they do not require the use of the new keyword.

 *Factory functions are regular functions that return an object.
*They don't use the new keyword.


 Here is a basic example of a factory function: */

//  function createPerson(name, age) {
//     return {
//       name: name,
//       age: age,
//       greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//       }
//     };
//   }
  
//   const person1 = createPerson("John", 30);
//   const person2 = createPerson("Jane", 25);
  
//   person1.greet(); // Output: Hello, my name is John
//   person2.greet(); //



//  creation methos for object :=>    Using Object.create()



const personProto = {

    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  const john = Object.create(personProto);
  const gautam=Object.create(personProto)

  john.name = "John";
  john.age = 30;

  gautam.name="gautam"
  gautam.age=20
  
  console.log(gautam)
  console.log(john)


