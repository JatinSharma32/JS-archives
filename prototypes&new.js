function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}
Vehicle.prototype.startEngine = function () {
    console.log(`Engine started ${this.make}`);
};

let audi = new Vehicle("Audi", "Q3");
let car = { make: "Toyota", model: "Corolla" };

Object.setPrototypeOf(car, audi);
console.log(Object.getPrototypeOf(audi)); // Output: { startEngine: [Function (anonymous)] }
console.log(Object.getPrototypeOf(car)); // Output: Vehicle { make: 'Audi', model: 'Q3' }
// car.startEngine();

// DOCS

/** 
**Prototype:** In JavaScript, objects can inherit properties and methods from other objects. This is known as prototypal inheritance. The prototype of an object is another object from which it inherits properties. When you try to access a property or method of an object, JavaScript will first look for it on the object itself. If it can't find it there, it will look for it on the object's prototype, and so on up the prototype chain until it either finds the property or reaches an object with a null prototype.

```jsx
function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}
Vehicle.prototype.startEngine = function () {
    console.log(`Engine started ${this.make}`);
};

let audi = new Vehicle("Audi", "Q3");
let car = { make: "Toyota", model: "Corolla" };

Object.setPrototypeOf(car, audi);
console.log(Object.getPrototypeOf(audi)); // Output: { startEngine: [Function (anonymous)] } 
console.log(Object.getPrototypeOf(car)); // Output: Vehicle { make: 'Audi', model: 'Q3' }
car.startEngine();
```

In this example, `Vehicle` is a constructor function. 

<aside>
🛑 When you create an instance of a function using the `new` keyword (like `let audi = new Vehicle("Audi", "Q3");`), JavaScript does two things:

1. It creates a new object.
2. **It sets the prototype of this new object to `Vehicle.prototype`.**
</aside>

When you create a new object using `new Vehicle(...)`, the new object's prototype is set to `Vehicle.prototype`. This means that the new object has access to the `startEngine` method, even though that method is not defined on the object itself. Instead, it's defined on the object's prototype.

- Ways to define prototypes is JS
    - **Object.create: T**his will create a new Object from the old object, it mean the new object will have all the properties/methods of old object.
    
    ```jsx
    let VehiclePrototype = {
        startEngine: function() {
            console.log("Engine started");
        }
    };
    
    let car = Object.create(VehiclePrototype);
    car.startEngine(); // Output: Engine started
    ```
    
    - **Object.setPrototypeOf(newObject, Object/Prototype/<Constructor>.prototype):** Constructor function always returns new Object and that object’s prototype is set to `<Constructor>.prototype`
    - And finally By **classes**

                 new keyword V/S Object.setPrototypeOf()

    - new Keyword: When you use the new keyword with a constructor function (like new Vehicle("Audi", "Q3")), JavaScript creates a new object, sets the prototype of this new object to Vehicle.prototype, and then calls the Vehicle function with the new object as the this context. This means that the new object has direct access to the properties and methods defined in the Vehicle function and its prototype

    - Object.setPrototypeOf(): This method directly sets the prototype of an existing object to another object. It does not create a new object, and it does not call a constructor function. This means that the object will have access to the properties and methods of its new prototype, but it will not have direct access to the properties and methods defined in a constructor function (unless the new prototype is an instance of that constructor function).
*/
