https://www.typescriptlang.org/docs/handbook/basic-types.html
//booleans
let isDone: boolean = false;

//Numbers
//As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. 
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    
//Strings
let color: string = "blue";
color = 'red';

let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`


// Arrays
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3]; //uses a generic array type, Array<elemType>

//Tuples
let x: [string, number]; // Declare a tuple type
x = ["hello", 10]; // Correct Initialization
x = [10, "hello"]; // Error (incorrect initialization)

console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

//When accessing an element outside the set of known indices, a union type is used instead: i.e
// x[3], x[4], x[5] are of type 'string | number'
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
x[6] = true; // Error, 'boolean' isn't 'string | number'

//Enum
//A helpful addition to the standard set of datatypes from JavaScript is the enum
enum Color {Red, Green, Blue};
let c: Color = Color.Green;

//By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:
enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;
//A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum. 
let colorName: string = Color[2]; //refers to Color.Green (since Red=1)

//Any
//We may need to describe the type of variables that we do not know when we are writing an application. 
//These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want 
//to opt-out of type-checking and let the values pass through compile-time checks. 
//To do so, we label these with the any type:
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean


The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type-checking during compilation. You might expect Object to play a similar role, as it does in other languages. But variables of type Object only allow you to assign any value to them - you can’t call arbitrary methods on them, even ones that actually exist:

let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

//The any type is also handy if you know some part of the type, but perhaps not all of it. For example, you may have an array but the array has a mix of different types:
let list: any[] = [1, true, "free"];
list[1] = 100;


//Void
void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:

function warnUser(): void {
    alert("This is my warning message");
}
//Declaring variables of type void is not useful because you can only assign undefined or null to them:
let unusable: void = undefined;



//Null and Undefined
//In TypeScript, both undefined and null actually have their own types named undefined and null respectively.
//Much like void, they’re not extremely useful on their own:

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.




.....some more left...
