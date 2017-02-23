 TypeScript offers three ways to define a custom type: interfaces, classes, and enums.
 
One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck 
typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of 
defining contracts within your code as well as contracts with code outside of your project.


    function printLabel(labelledObj: { label: string }) { //argument should be a dictionary object with atleast one key type as 
    //string
        console.log(labelledObj.label);
    }
    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);

Notice that our object actually has more properties than this, but the compiler only checks that at least the ones required are 
present and match the types required. There are some cases where TypeScript isn’t as lenient, which we’ll cover in a bit.

    interface LabelledValue {
        label: string;
    }

    function printLabel(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
    }

    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);
// Notice we didn’t have to explicitly say that the object we pass to printLabel implements this interface like we might  
//have to in other languages. Here, it’s only the shape that matters. If the object we pass to the function meets the 
//requirements listed, then it’s allowed.
