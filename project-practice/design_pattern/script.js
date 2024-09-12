//DESIGN PATTERN
/* 
1. Creational Design Pattern : Factory Pattern, Builder Pattern, Singleton Pattern, etc.
2. Structural Design Pattern : Proxy Pattern, Adaptor Pattern, etc.
3. Behavioral Design Pattern : Observer Pattern State Pattern, Iterator Pattern, etc.
*/

//Singleton Design Pattern :-

/* 1. Module and Revealing Module Design Pattern */
//Basic structure :
(function () {
    //declaring priavte vars and functions
    return{
        //declaring public var and function
    }
})();

//project on calorie calculator :

// const changecolor = document.querySelector("h1");
// changecolor.style.color = "#fff";
// const bg_color_change = document.querySelector("body");
// bg_color_change.style.backgroundColor = "#000";


//STANDARD MODULE PATTERN
// const UIctrl = (function() {    //now both of this are private, we cant access them outside the given module/scope
//     let text = "ABCDEF";        //private variable

//     const changeText = function() { //priavte method
//         const element = document.querySelector("h1");
//         element.textContent = text;
//     }
//     return {                    //we are returning this into the global scope
//         callChanges: function(){
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UIctrl.callChanges();

//REVEALING MODULE PATTERN

const ItemCtrl = (function(){
    let _data = [];

    function add(item) {
        _data.push(item);
        console.log("Item Added...");
        console.log(_data);
    }
    function get(id) {
        return _data.find(item =>{
            return item.id === id;
        });
    }
    return{
        add: add,
        get: get,
    }
})();

ItemCtrl.add({id: 1, name: "John🐒"});
ItemCtrl.add({id: 2, name: "Marry🐄"});

//Singleton

const Singleton =(function(){
    let instance;

    function createInstance() {
        const object = new Object("Object instance  !!!");
        return object;
    }

    return{
        getInstance: function() {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
console.log(instanceA);

//Factory Pattern

function MemberFactory(){
    this.createMember = function(name, type){
        let member;
        if(type === 'simple'){
            member = new SimpleMembership(name);
        } else if(type === 'standard'){
            member = new StandardMembership(name);
        }else if(type === 'super'){
            member = new SuperMembership(name);
        }
        member.type  = type;

        member.define = function(){
            console.log(`${this.name} (${this.type}): ${this.costx}`);
        }
        return member;
    }
}
const SimpleMembership = function(name) {
    this.name = name;
    this.cost = '$8';
}

const StandardMembership = function(name) {
    this.name = name;
    this.cost = '$12';
}
const SuperMembership = function(name) {
    this.name = name;
    this.cost = '$5';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("John Doe", "simple"));
console.log(members);

members.forEach(function(member) {
    member.define();
});

//Observer Pattern

function EventObserver(){
    this.observers = [];
}

EventObserver.prototype={
    subscribe: function(fn){

    }
}