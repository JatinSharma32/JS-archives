//This values in node env
let hello = () => {
    this.hello = "dnjfd";
    console.log("this1: ", this);
};
let hello2 = function () {
    console.log("this2: ", this);
};
let obj = {
    h1: () => {
        console.log("this1: ", this);
    },
    h2: function () {
        console.log("this2: ", this);
    },
};
hello();
hello2();
obj.h1();
obj.h2();
console.log(this);

// Constructor functions

function fun1(arg1) {
    this.arg1 = arg1;
    return this;
}

let fun1Inst1 = new fun1(10);
let fun1Inst2 = new fun1(30);

console.log("fun1Inst1:", fun1Inst1);
console.log("fun1Inst2:", fun1Inst2);

class Alien {
    constructor(name, phrase) {
        this.name = name;
        this.phrase = phrase;
        this.species = "alien";
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
    sayPhrase = function () {
        console.log(this.phrase);
    };
}
let alien1 = new Alien("Billu", "Mars se hun bhai");
let alien2 = new Alien("Bhegera", "Janver hun bhai");
console.log("alien1", alien1);
console.log("alien2", alien2);
alien1.sayPhrase();
alien2.sayPhrase();

// Inheritance

// In a class this always points to the class (encapsulated object of properties and meathods)
// - It might be in Arrow function constructor or normal function
class ParentClass {
    // simple way to declare properties is inside constructor function by using this keyword
    constructor(parentArgument) {
        this.parentArgument = parentArgument;
    }
    printParentArgument = () => {
        console.log("parentArgument: ", this.parentArgument);
    };
}

class ChildClass extends ParentClass {
    constructor(parentArgument, childArgument) {
        //this super is the constructor function of parent calss
        super(parentArgument);
        this.childArgument = childArgument;
    }
    printChildArgument = () => {
        console.log("childArgument: ", this.childArgument);
    };
}

class GrandChildClass extends ChildClass {
    constructor(parentArgument, childArgument, grandChildArgument) {
        //this super is the constructor function of parent calss
        super(parentArgument, childArgument);
        this.grandChildArgument = grandChildArgument;
    }
    printgrandChildArgument = () => {
        console.log("grandChildArgument: ", this.grandChildArgument);
    };
}

let grandChild1 = new GrandChildClass("parent1", "child1", "grandChild1");
grandChild1.printChildArgument();
grandChild1.printParentArgument();
grandChild1.printgrandChildArgument();

// Encaptulation

// Providing the combination of (selected/specific)properties and (selected/specific)meathods of class to its instance

class User {
    // to declear private properties we use '#'
    // Private properties or methods CAN'T be accessed out side of the classes even in the sub/child classes
    #password;
    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }
    #givePassword = () => {
        return this.#password;
    };
    userDetails = () => {
        let userPassword = this.#givePassword();
        console.log("username: ", this.username, "\npassword: ", userPassword);
    };
}

const user1 = new User("Jatin", "P");
user1.userDetails();

// Polymorphism
// it has two types
// inheritance-based (shown below)
// Parameter based

// Different behaviour of same properties and methods in different context

class Admin extends User {
    constructor(username, password, isAdmin) {
        super(username, password);
        this.isAdmin = isAdmin;
    }
    userDetails = () => {
        console.log(
            "username: ",
            this.username,
            "\nAdmin rights: ",
            this.isAdmin
        );
    };
}

let admin1 = new Admin("Psr", "sharma", true);
admin1.userDetails();
user1.userDetails();
