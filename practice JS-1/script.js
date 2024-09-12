// Run JavaScript File
// Once you are in the correct directory, type the following command to run your JavaScript file:

// node filename.js
//node script.js

// AIM : create an application with following roles :
// 1. admin -- gets full access
// 2. subadmin -- gets access to create/delete courses
// 3. testprep -- gets access to create/delete testprep
// 4. user -- gets access to consume content

// console.log("Hello !!!");

// var user = "testprep";
// switch (user){
//     case "admin":
//         console.log("get full access");
//         break;
//     case "subadmin":
//         console.log("get access to create/delete courses");
//         break;
//     case "testprep":
//         console.log("get access to create/delete tests");
//         break;
//     case "user":
//         console.log("get access to consume content");
//         break;
//     default:
//         console.log("Trial User");
//         break;
// }

//TODO: falsy values :
// undefined
// null
// 0
// ""
// NaN

// var user = null;
// if(user){
//     console.log("User is logged in");
// }

// var user = "3";
// if(3 === user){
//     console.log("Statement is true");
// }

//functions

// function sayHello(){
//     console.log("Hello World");
// }

// sayHello();
// sayHello();

// function sayHello(name){
//     console.log("Hello World");
//     console.log(`Hello World, ${name}.`);
// }

// sayHello("Sammy");
// sayHello("Rammy");

// function namastey(){
//     return "Hello from India"
// }
// var greetings = namastey();     //declaring a variable with the function being called, returning its string value.
// console.log(greetings);         //printing the variable value.
// console.log(namastey());

/* 
    Define a function that can answer the role of a user.
    A user can be on following roles :
    1. admin - with all access
    2. subadmin - with access to create/delete courses
    3. testprep - with access to create/delete tests
    4. user - with access to consume content
    5. other - trial user

    Input : getUserRole(name, role)
*/

// function getUserRole(name, role){
//     switch(role){
//         case "admin":
//             return `${name} is admin with all access`

//         case "subadmin":
//             return `${name} is sub-admin  with access to create/delete courses`

//         case "testprep":
//             return `${name} is Test-preper with access to create/delete tests`
            
//         case "user":
//             return `${name} is user with access to consume content`
                
//         default:
//             break;
//     }
// }
// getUserRole("ABC", "subadmin");
// console.log(getUserRole("ABC", "subadmin"));

/* let --> used for declaring a block variable
   var --> used for declaring a function variable
   const --> used for declaring a constant variable
*/

// const arr = [1, 2];
// console.log(arr);

// arr.push('5');
// console.log(arr);

// function print(){
//     const name = "abc";
//     console.log(name);
// }
// // console.log(name);
// console.log(print());

// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Toyota";
// cars.push("Audi");
// console.log(cars);

// function tipper(a){
//     // var bill = a;
//     var bill = parseInt(a);
//     console.log(bill + 5);
// }
// tipper("10"); // output: 15



/* Hoisting is JavaScript's default behavior of moving all declarations 
    to the top of the current scope (to the top of the current 
        script or the current function). */


// console.log(name);      //Code hoisting in javascript
// var name = "ABC";

// function sayName(){
//     var name = "MNO";
//     console.log(name);
// }
// sayName(); // output: MNO
// console.log(name); // output: ABC

/* 
objects are things like: houses, cars, people, animals, or any other subjects.
A real life car has properties like weight and color:

car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white.
A real life car has methods like start and stop:

car.start(), car.drive(), car.brake(), car.stop().

JavaScript Objects
Objects are variables too. But objects can contain many values.

This code assigns many values (Fiat, 500, white) to an object named car:

Example
const car = {type:"Fiat", model:"500", color:"white"}; */

// create a new object
//Spaces and line breaks are not important. An object 
//initializer can span multiple lines:
// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// const person2 = {};    // an empty JavaScript object, and then adds 4 properties:
// person2.firstName = "Rebecca";
// person2.lastName = "Smith";
// person2.age = 30;
// person2.eyeColor = "green";


//Scope chaining in javascript

// var name = "PQR";
// console.log(name); // output: PQR

// function sayName(){
//     // var name = "MNO";
//     console.log(name); // output: MNO

//     sayNameTwo();

//     function sayNameTwo(){
//         // var name = "IGH";
//         console.log(name);
//     }
// }
// sayName();

//Javascript Object Method
//Object methods are actions that can be performed on objects.

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName()); // output: John Doe

// console.log(this);

// var game = "basketball";
// function sayName(){
//     var name = "FYI";
//     console.log(this);
// }
// sayName();

//ARRAY in Javascript

// var countries = ["India", "Japan", "South Korea"];
// var states = new Array("West Bengal", "Uttar Pradesh","Tamil Nadu");
// console.log(countries[0]); // output: India

// var isEven = (element) => {
//     return element % 2 === 0;         //the element is not being defined
// }
// // console.log(isEven(9));         //[2,4,6,7]

// var result = [2, 4, 6, 8].every(isEven);     //callback function
// console.log(result);

//arrow function and callback function

// const wishMe = function (action) {
//     action();
// }
// const wishGoodMorning = function (){
//     console.log("Good Morning");
// }
// const wishGoodEvening = function(){
//     console.log("Good Evening");
// }
// wishMe(wishGoodMorning); // output: Good Morning
// wishMe(wishGoodEvening); // output: Good Evening

//trying out diffrent callback methods

// const nums =[1,20,10,22,30,44,100,11];
// var sortedinascending = nums.sort((a,b) => a-b); //sorting done in ascending order
// // var sortedindescending = nums.sort((a,b) => a-b<0); //sorting done in descending order
// console.log(sortedinascending); //output: [1, 10, 11, 20,...]
// // onsole.log(sortedindescending); 

// const words= ['kia','karen','king','korean'];       //check wheather last character of the element is 'q'
// console.log(words.some(word => word[words.length - 1]==='q')); //if any one of the element varifies the condition, then gives true

// //check wheather first character of the element is 'k'
// console.log(words.every(word => word[0]==='k')); //if any one of the element varifies the condition, then gives true

// const names =['Jimmy Shah', "Ram Sharma", "Vikram Gupta", "Shyam Sharma"];
// const result = names.find(name => name.includes("Sharma"));
// const newresult = names.filter(name => name.includes("Sharma"));
// console.log(newresult); //output: ["Ram Sharma", "Shyam Sharma"]
// console.log(result); //output: Ram Sharma

// var testArray = [2,4,8,1,,5,9,8];
// console.log(testArray.fill("h",3, 5));

// const myNumber = [23,35,61,49,50,88,33,89,92];
// const result = myNumber.filter((num) => num > 45);
// console.log(result); //output: [61, 88, 89, 92]

// const nums = [44,2,66,45,17];
// let result = nums.reduce((max,item) => Math.max(max,item))
// console.log(result);    //output: 66

// const votes = ['y', 'y', 'n', 'y', 'n','n','n','n'];
// const result = votes.reduce((tally,vote) => {
//     tally[vote] = (tally[vote] || 0 ) + 1
//     return tally;
// }, {});
// console.log(result); //output: { y: 3, n: 5 }

// var users = ["Ted", "Yim", "Tom", "Kim", "Sora"];
// console.log(users.slice(1,4));  //first index in inclusive, i.e included and last index is exclusive, i.e not added
// users.splice(1,3, "HI","BYE");  
// console.log(users);

// const symbols = {
//     yt : "Youtube",
//     ig : "Instagram",
//     fb : "Facebook",
//     tw : "Twitter"
// };
// for(const n in symbols){
//     console.log(`Key is ${n} and value is: ${symbols[n]}`);
// }

// var counter = document.querySelector(".counter");
// var text = document.querySelector(".text");

// let count = 0;
// setInterval( () =>{
//     if(count<1000){
//         count++;
//         counter.innerText = count;
//     }
// }, 10);

// setTimeout(() => {
//     text.innerText = "Counting Finished";
// }, 11800)

// const red = document.querySelector(".red");
// const cyan = document.querySelector(".cyan");
// const violet = document.querySelector(".violet");
// const orange = document.querySelector(".orange");
// const pink = document.querySelector(".pink");
// const center = document.querySelector(".center");

// // console.log(window.getComputedStyle(red).backgroundColor);

// const getBGColor = (selectedElement) => {
//     return window.getComputedStyle(selectedElement).backgroundColor;
// };

// var color = getBGColor(pink);

// element.addEventListener('mouseenter', () =>{
//     center.style.backgroundColor = color;
// });

// const magicColorChanger = () => {
//     red.style.backgroundColor = getBGColor(cyan);
// }

// const magicColorChanger = (element, color) => {
//     return element.addEventListener('mouseenter', () =>{
//         center.style.backgroundColor = color;
//     });
// };

// magicColorChanger(red, getBGColor(red));
// magicColorChanger(cyan, getBGColor(cyan));
// magicColorChanger(violet, getBGColor(violet));
// magicColorChanger(orange, getBGColor(orange));
// magicColorChanger(pink, getBGColor(pink));


// var User = function(firstName, courseCount){
//     this.firstName = firstName;
//     this.courseCount = courseCount;
//     this.getCourseCount = function () {
//         console.log(`Course count is : ${this.courseCount}`);
//     };
// };

// User.prototype.getFirstname = function() {
//     console.log(`Your firstname is : ${this.firstName}`);
// }


// var ABC = new User("ABC", 2);
// var SAM = new User("SAM", 6);
// // console.log(ABC);
// // console.log(SAM);
// // ABC.getFirstname();
// ABC.getCourseCount();
// // // // console.log(ABC.firstName);
// // SAM.getCourseCount();

// if(ABC.hasOwnProperty("firstNamee")){
//     ABC.getFirstname();
// }


// var num = 2;
// var num = 3;
// console.log(num);

// var User = {
//     name: "",
//     getUserName: function () {
//         console.log(`User name is : ${this.name}`);
//     },
// };

// var abc = Object.create(User);
// console.log(abc);
// abc.name = "ABC";
// abc.getUserName();

// var sam = Object.create(User, {
//     name: {value: "sammy"},
//     courseCount:{value: 3},
// });
// sam.getUserName();

/* Self-Executing Anonymous Function */

// function sayHello(){
//     console.log("Hello");
//     console.log("Hi there");
// }
// sayHello();

// (function(){
//     console.log("Hello");
//     console.log("Hi there");
// })();

// /* Lexical Scoping */   init is a short form for initialization

// function init(){
//     var firstName = "ABCD";
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     sayFirstName();  
// }
// init();

// /* Borrowing a method using bind */

// const abcde = {
//     firstName: "ABCDEF",
//     lastName: "PQRS",
//     role: "Admin",
//     courseCount: 3,
//     getInfo: function(){
//         console.log(`
//         First name is ${this.firstName}
//         Last name is ${this.lastName}
//         His role is ${this.role}
//         and he is studying ${this.courseCount} courses.
//         `);
//     },
// };

// const dj = {
//     firstName: "Rock",
//     lastName: "DJ",
//     role: "Sub-admin",
//     courseCount: 4,
// };
// abcde.getInfo();        
// abcde.getInfo.bind(dj)();       //funtion borrowing
// var djInfo =abcde.getInfo.bind(dj);
// djInfo();

// let name1 = {
//     firstname: "ABDC",
//     lastname: "PQRS",
// }

// let printFullName = function(hometown, state){
//     console.log(this.firstname + " " + this.lastname + " from " + hometown + "," + state);
// }
//  printFullName.call(name1, "Dehradun");

//  let name2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar",
//  }


//  printFullName.call(name2,"Mumbai", "Maharastra");  //call method

//  printFullName.apply(name2, ["Mumbai", "Maharastra"]);  //apply method

//  //bind method
//  let printMyName = printFullName.bind(name2, "Mumbai","Chennai");
// console.log(printMyName);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const courses =[
//     {id:1, name:"JavaScript", price: "3.1"},
//     {id:2, name:"Python",  price: "3.2"},
//     {id:3, name:"React",  price: "2.9"},
//     {id:4, name:"NodeJS",  price: "3.0"},
// ];

// function generateList() {
//     const ul = document.querySelector(".list-group");
//     ul.innerHTML =""   //resetting the values
//     courses.forEach((course) => {
//         const li = document.createElement("li");
//         li.classList.add("list-group-item");

//         const name = document.createTextNode(course.name);
//         li.appendChild(name);

//         const span = document.createElement("span");
//         span.classList.add("float-right");

//         const price = document.createTextNode(" $ " + course.price);
//         span.appendChild(price);

//         li.appendChild(span);
//         ul.appendChild(li);
//     });
// }

// generateList();

// window.addEventListener("load", generateList);

// const button = document.querySelector(".btn")

// button.addEventListener("click", () => {
//     courses.sort((a,b) => a.price - b.price);
//     generateList();
// });

////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(name);
// var name ="ABC";

// if(true){
//     var lastName = "PQR"
//     console.log(lastName);
// }

// var name = `ABCDE`;
// var fullName = `${name} ZXYV`;

// console.log(fullName);
// console.log(fullName.charAt(7));
// console.log(fullName.endsWith("y"));
// console.log(fullName.includes("ZXYV"));
// console.log(fullName.indexOf("ZXYV"));
//console.log(fullName.toLowerCase());

// var myMap = new Map();
// myMap.set(1, "Uno");
// myMap.set(2, "dos");
// myMap.set(3, "Tres");
// myMap.set(4, "Quatro");

// // console.log(myMap);

// // for(let key of myMap.keys()){
// //     console.log(`Key is ${key}`);
// // }

// // for(let value of myMap.values()){
// //     console.log(`Value is ${value}`);
// // }

// // for(let [key, value] of myMap){
// //     console.log(`Key is : ${key} and Value is ${value}`);
// // }

// // myMap.forEach((key) => console.log(`${key}`));
// // myMap.forEach((value) => console.log(`${value}`));

// // myMap.forEach((v,k) => console.log(`${v} and key is ${k}`));
//myMap.delete(2);
// console.log(myMap);


//Destructuring 

// const MyUser ={
//     name: "ABC",
//     age: 25,
//     address: "XYZ"
// };
// console.log(MyUser.age);

// const {name, age, address} = MyUser;
// console.log(age);

//Spread and Rest operators in JS
//syntactically same, but aim of usage is different
//A rest operator is a type of parameter that gets all of the remaining parameters of a function call via an Array. It enables us to handle a variety of inputs as parameters in a function. 
//The spread operator divides an array or object into separate elements or properties. The spread operator is mostly used if you want to duplicate the content of an array or combine or combine multiple arrays/objects together.

// var returnedValue = Math.max(2,8,9,1,4,5);
// console.log(returnedValue);

// var myObj = {};

// Object.assign(myObj, {a:1, b:2, c:3 }, {z:9, y:8, x:7});
// console.log(myObj);

// function sumOne(a,b){
//     return a+b;
// }
// var myA = [5,4];
// console.log(sumOne(...myA));

// function sumTwo(a,b,...args){
//     console.log(args);
//     let multi= a*b;
//     let sum = 0;
//     for(const arg of args)
//     {
//         sum += arg;
//     }
//     return [sum, multi];
// }
// console.log(sumTwo(2,3,1,1,1));


// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     courseList = [];

//     getInfo(){
//         return{
//             name: this.name,
//             email: this.email
//         };
//     }
//     enrollCourse(name){
//         this.courseList.push(name)
//     }
//     getCourseList(){
//         return this.courseList;
//     }
// }

// module.exports = User;

// const uno = () => {
//     console.log("Uno");
// };
// const dos = () => {
//     setTimeout(() =>{
//         console.log("Dos!!!!!!");
//     }, 3000)
//     console.log("Dos");
// };
// const tres = () => {
//     console.log("Tres");
// };

// uno();
// dos();
// tres();

// const uno = () => {
//     return "Uno";
// };
// const dos = () => {
//     setTimeout(() =>{
//        return "Dos!!!!!!";
//     }, 3000);
// };
// const tres = () => {
//     return "Tres";
// };

// const callMe = () => {
//     let valOne = uno();
//     console.log(valOne);
// };

// callMe();

fetch("https://api.chucknorris.io/jokes/random")
.then(response => {
    return response.json();
})
.then((data) => {
    // console.log(data);
    // console.log(data.value);
    var joke = data.value;
    console.log("Joke is : ", joke);
})
.catch();


//TODO: shuffle

