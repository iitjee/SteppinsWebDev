Accessors: To have fine-grained control over how a member is accessed on each object
      
//Without Getters and Setters      
      class Employee {
          fullName: string;
      }

      let employee = new Employee();
      employee.fullName = "Bob Smith";
      if (employee.fullName) {
          console.log(employee.fullName);
      }

//While allowing people to randomly set fullName directly is pretty handy, this might get us in trouble if people can change 
names on a whim.

In this version, we check to make sure the user has a secret passcode available before we allow them to modify the employee. We 
do this by replacing the direct access to fullName with a set that will check the passcode. We add a corresponding get to allow 
the previous example to continue to work seamlessly.

      let passcode = "secret passcode";
      class Employee {
          private _fullName: string; //this is not required

     //both are not mandatory. You can just implem get/set also
          get fullName(): string {
              return this._fullName; //instead of this._fullname you can have this.katrinakaif also
              //it's just some sort of convention
          }

          set fullName(newName: string) {
              if (passcode && passcode == "secret passcode") {
                  this._fullName = newName;
              }
              else {
                  console.log("Error: Unauthorized update of employee!");
              }
          }
      }

      let employee = new Employee();
      employee.fullName = "Bob Smith";
      if (employee.fullName) {
          console.log(employee.fullName);
      }
      
 A couple of things to note about accessors:
First, accessors require you to set the compiler to output ECMAScript 5 or higher. Downlevelling to ECMAScript 3 is not 
supported. Second, accessors with a get and no set are automatically inferred to be readonly. This is helpful when generating a 
.d.ts file from your code, because users of your property can see that they can’t change it.    

      
Static Properties:
Up to this point, we’ve only talked about the instance members of the class, those that show up on the object when it’s 
instantiated. We can also create static members of a class, those that are visible on the class itself rather than on the 
instances. 
    class Grid {
        static origin = {x: 0, y: 0};
        calculateDistanceFromOrigin(point: {x: number; y: number;}) {
            let xDist = (point.x - Grid.origin.x); //notice, we're using Grid.origin.x
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        constructor (public scale: number) { }
    }

    let grid1 = new Grid(1.0);  // 1x scale
    let grid2 = new Grid(5.0);  // 5x scale

    console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
    console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));      

Abstract Classes
Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members. 
    abstract class Animal {
        abstract makeSound(): void;
        move(): void {
            console.log("roaming the earth...");
        }
    }
      
      
      
      
      
