// can we use call function on constructor function?

class Hello {
    constructor(surname) {
        console.log("Original this value: ", this);
        this.surname = surname;
        console.log("After this value: ", this);
    }
    fullName() {
        console.log(this.name + " " + this.surname);
    }
}

const obj = { name: "Jatin" };

const hello1 = new Hello("Sharma");

// as we do this the original this gets replaced with obj and the this.surname wii be undefined
// to solve this we use 👇 to combine properties of both hello1 and obj then this will be out new combined this, pass it in call() or bind()
// const combined = Object.assign({}, hello1, obj);

hello1.fullName.bind(obj)();
hello1.fullName.call(obj);

// Pollyfill for bind: creating the bind method if browser dosen't have it

Function.prototype.myBind = function (thisFunctional) {
    // here this is the function body on which myBind is called
    const originalFunction = this;
    return function (...args) {
        // above function is returned and when ever its called below line will execute
        // which just calls the function with the this value we want
        originalFunction.call(thisFunctional, ...args);
    };
};

function nameFunction(surname, middlename) {
    console.log(
        "Name: ",
        this.name,
        middlename ? `${middlename} ${surname}` : surname
    );
}

const jatin = nameFunction.myBind({ name: "Jatin" });
jatin("Sharma", "Kumar");
const pragati = nameFunction.myBind({ name: "Pragati" });
pragati("Jain");

// call function implementation

Function.prototype.myCall = function name(thisFunctional, ...args) {
    // first take the original function's body
    const originalFunction = this;

    // now to call the original function with thisFunctional
    // we can put the original function inside thisFunctional as method and call it
    // as its called inside a object, so the original function's this will point to the outer object which is, thisFunctional.

    thisFunctional.originalFunction = originalFunction;
    thisFunctional.originalFunction(...args);

    delete thisFunctional.originalFunction;
};

function hello(rat) {
    console.log("cat: ", this.cat, rat);
}

hello.myCall({ cat: "Meaw" }, "Rat");
