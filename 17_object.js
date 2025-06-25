// Singelton object
const tinder = {
    user : "Tinder",
    password : "123"
}
console.log(tinder);

// Non-singleton object using new Object() syntax
const userObj = new Object();
userObj.name = "xyz";
userObj.age = 20;
userObj.city = "Surat";

console.log(userObj); // { name: 'xyz', age: 20, city: 'Surat' }

// Object within an object

const regular = {
    username : "xyz123",
    email : "xyz@gmail.com",
    fullname :{
        sername : "any",
        name : "xyz"
    },
    address:{
        city : "Surat",
        state : "Gujarat",
        country : "India"
    } ,

}
// console.log(regular); 
// console.log(regular.fullname.sername);

// combine 
const num1 = { 1: "a", 2:"b"}
const num2 = { 4: "d", 3:"c"}
const num3 = { num1, num2};
// console.log(num3);  // this syntax is not useble for mordern js coders

// use "assign" for combine two or more objects
const num4 = Object.assign(num1, num2);
// console.log(num4);

// also use "..." for combine two on more objects
const num5 = {...num1,...num2};
// console.log(num5);

// data can come from database as a key or value , we print data from data base as key or value
const data = {
    "name": "xyz",
    "age": 20,
    "city": "Surat"
}
console.log(Object.keys(data)); // access data using key
console.log(Object.values(data)); // access data using value

// Destructuring objects
const user = {
    name: "xyz",
    age: 20,
    city: "Surat"
}
const {name, age, city} = user; // destructuring
console.log(name, age, city); // xyz 20 Surat

