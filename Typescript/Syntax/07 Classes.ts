/*
Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components, but this may feel a bit 
awkward to programmers more comfortable with an object-oriented approach, where classes inherit functionality and objects are 
built from these classes. Starting with ECMAScript 2015, also known as ECMAScript 6, JavaScript programmers will be able to 
build their applications using this object-oriented class-based approach. In TypeScript, we allow developers to use these 
techniques now, and compile them down to JavaScript that works across all major browsers and platforms, without having to wait 
for the next version of JavaScript.
*/
    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }

    let greeter = new Greeter("world");
    
//. This class has three members: a property called greeting, a constructor, and a method greet.
//You’ll notice that in the class when we refer to one of the members of the class we prepend this.. This denotes that it’s a //member access.


Inheritance:
    class Animal {
        name: string;
        constructor(theName: string) { this.name = theName; }
        move(distanceInMeters: number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    class Snake extends Animal {
        constructor(name: string) { super(name); }
        //super above refers to constructor method
        
        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }//super here refers to the parent object
    }

    class Horse extends Animal {
        constructor(name: string) { super(name); }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }

    let sam = new Snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");

    sam.move();
    tom.move(34);
    
//Derived classes that contain constructor functions must call super() which will execute the constructor function on the base 
//class
// Note that even though tom is declared as an Animal, since its value is a Horse, when tom.move(34) calls the overriding 
//method in Horse:

Public, private, and protected modifiers:
1. Public by default (you can mention it explicitly though)
2. When a member is marked private, it cannot be accessed from outside of its containing class.
    class Animal {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    new Animal("Cat").name; // Error: 'name' is private;


    class Animal {
        constructor(private name: string) { ... }
        fun1() {return name;}
    }//name is still a private property accessible by fun1() as well


TypeScript is a structural type system. When we compare two different types, regardless of where they came from, if the types 
of all members are compatible, then we say the types themselves are compatible.

//However, when comparing types that have private and protected members, we treat these types differently. For two types to be 
//considered compatible, if one of them has a private member, then the other must have a private member that originated in the 
//same declaration. The same applies to protected members.

Let’s look at an example to better see how this plays out in practice:
    class Animal {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    class Rhino extends Animal {
        constructor() { super("Rhino"); }
    }

    class Employee {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    let animal = new Animal("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");

    animal = rhino;
    animal = employee; // Error: 'Animal' and 'Employee' are not compatible

