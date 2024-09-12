// console.log("hi");

//prototype
//javascript always have prototypal behaviour,
//i.e, it accesses each and every level to
//execute any particular task

function multipleBy5(num){
    this.num = num
    return num*5;
}
console.log(multipleBy5(10));
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
    this.incrementScore = function(){
        this.score++;
    }
}

createUser.prototype.print = function() {
    console.log(`The score is : ${this.score}`);
}

console.log(createUser.prototype);
const  abc = new createUser("ABC", 24); //creating new instance
const  dqr = new createUser("DQR", 290); //creating new instance

abc.print();

/* Here's what happens behind the scene for 'new' keyword usage :
 A new object is created: The new keyword initiates thecreation of a new
 Javascript object.
 A prototype is linked: The newly created object gets linked
  to the prototype of the constructor function.
  This means that it has access to properties and methods defined on the 
  constuctor's prototype.
  
  the constructor is called: The constructor is called with the specified argumenets and this is
  bound to the specified arguments and this is bound to the newly created object.
 as the language doesn’t support classes in its plain language form but rather uses something 
 called prototype-based or instance-based inheritance.*/

 /*Constructor Pattern
    When thinking about classical object-oriented languages, a constructor is a special function
    in a class which initializes an object with some set of default and/or sent-in values.
    Common ways to create objects in JavaScript are the three following ways: */

    // we define a constructor for Person objects
function Person(name, age, isDeveloper) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper || false;

    this.writesCode = function() {
      console.log(this.isDeveloper? "This person does write code" : "This person does not write code");
    }
}

// creates a Person instance with properties name: Bob, age: 38, isDeveloper: true and a method writesCode
var person1 = new Person("Bob", 38, true);
// creates a Person instance with properties name: Alice, age: 32, isDeveloper: false and a method writesCode
var person2 = new Person("Alice", 32);

// prints out: This person does write code
// person1.writesCode();
// prints out: this person does not write code
// person2.writesCode();

/* Revealing Module Pattern
This pattern is an improvement made to the module pattern as illustrated above.
The main difference is that we write the entire object logic in the private scope of the
module and then simply expose the parts we want to be public by returning an anonymous object.  */

// we write the entire object logic as private members and
// expose an anonymous object which maps members we wish to reveal
// to their corresponding public members
var namesCollection = (function() {
    // private members
    var objects = [];

    function addObject(object) {
        objects.push(object);
    }

    function removeObject(object) {
        var index = objects.indexOf(object);
        if (index >= 0) {
            objects.splice(index, 1);
        }
    }

    function getObjects() {
        return JSON.parse(JSON.stringify(objects));
    }

    // public members
    return {
        addName: addObject,
        removeName: removeObject,
        getNames: getObjects
    };
})();

namesCollection.addName("Bob");
namesCollection.addName("Alice");
namesCollection.addName("Franck");

console.log(namesCollection.getNames()); // prints ["Bob", "Alice", "Franck"]
namesCollection.removeName("Alice");

console.log(namesCollection.getNames()); // prints ["Bob", "Franck"]

/*Singleton Pattern
The singleton pattern is used in scenarios when we need exactly one instance of a class.
For example, we need to have an object which contains some configuration for something. In these cases, it is not
necessary to create a new object whenever the configuration object is required somewhere in the system. */
var singleton = (function() {
    // private singleton value which gets initialized only once
    var config;

    function initializeConfiguration(values){
        this.randomNumber = Math.random();
        values = values || {};
        this.number = values.number || 5;
        this.size = values.size || 10;
    }

    // we export the centralized method for retrieving the singleton value
    return {
        getConfig: function(values) {
            // we initialize the singleton value only once
            if (config === undefined) {
                config = new initializeConfiguration(values);
            }

            // and return the same config value wherever it is asked for
            return config;
        }
    };
})();

var configObject = singleton.getConfig({ "size": 8 });
// prints number: 5, size: 8, randomNumber: someRandomDecimalValue
console.log(configObject);
var configObject1 = singleton.getConfig({ "number": 8 });
// prints number: 5, size: 8, randomNumber: same randomDecimalValue as in first config
console.log(configObject1);

/* Observer Pattern
The observer pattern is a very useful tool when we have a scenario where we need to improve the
communication between disparate parts of our system in an optimized way. It promotes loose coupling
between objects. */

/*Prototype Pattern
As we have already mentioned throughout the article, JavaScript does not support classes in its native form.
Inheritance between objects is implemented using prototype-based programming.
It enables us to create objects which can serve as a prototype for other objects being created. The prototype
object is used as a blueprint for each object the constructor creates.  */

var personPrototype = {
    sayHi: function() {
        console.log("Hello, my name is " + this.name + ", and I am " + this.age);
    },
    sayBye: function() {
        console.log("Bye Bye!");
    }
};

function Person(name, age) {
    name = name || "John Doe";
    age = age || 26;

    function constructorFunction(name, age) {
        this.name = name;
        this.age = age;
    };

    constructorFunction.prototype = personPrototype;

    var instance = new constructorFunction(name, age);
    return instance;
}

var person1 = Person();
var person2 = Person("Bob", 38);

// prints out Hello, my name is John Doe, and I am 26
person1.sayHi();
// prints out Hello, my name is Bob, and I am 38
person2.sayHi();