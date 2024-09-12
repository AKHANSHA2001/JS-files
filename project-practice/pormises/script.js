//implementation of promises and API in JS

//promise is a function that returns a value in future
 //to create instance of a promise, which is an object
 //there are 2 parts --> create and consume promise
const promiseOne = new Promise(function(resolve, reject) {
    //we can execute any async task
    //DB calls, netwrok, cryptography, etc.
    setTimeout(function(){
        console.log("Async task is complete");
        resolve(); //to connect to the .then methods when we call the resolve method
    }, 1000)
}); 

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is complete");
        resolve();
    },1000)
}).then(function(){
    console.log("Async task 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "ABC", email: "ABC@gmail.con"})
    },2000)
})

promiseThree.then(function(user){
    console.log(user); //fetch data from the const promiseThree
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"PUY", password:"987"})
        }else{
            reject("Error Occured");
        }
    },1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolevd or rejected"))

const promiseFIVE = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"PFY", password:"1123"})
        }else{
            reject("ERROR: JS went WRONG");
        }
    },1000)
})
// promiseFIVE.then()

async function consumeOfPromiseFive(){
    try {
        const response = await promiseFIVE;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumeOfPromiseFive();

// async function getAllUsers() {
//   try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(response);
//     const data = response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {       // fetch object is used to fetch the data from the given API much efficiently
    console.log(data);  //we log then to display the data accordingly.
})
.catch((error) => console.log(error))