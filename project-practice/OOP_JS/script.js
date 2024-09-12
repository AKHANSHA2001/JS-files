//Javascript and classes
//OOP

const user ={
    username:"SAFFY",
    loginCount: 7,
    signedIn: true,
    email: "llavi@shyamsteel.com",
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.loginCount);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    this.getUserDetails = function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        }
    return this
}

const userOne = new User("Hitesh", 12, true);
const userTwo = new User("ChaiAurode", 20, false);
console.log(userOne.constructor);
// console.log(userTwo);
//inorder to avoid overwriting our data, we use constructors to create new instances of the same method/class
