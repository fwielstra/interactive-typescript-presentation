// insert java joke here
// please laugh

class Greeter {
  // properties
  greeting: string;

  // constructor
  constructor(message: string) {
    this.greeting = message;
  }

  // methods (with implicit return type)
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
console.log(greeter.greet());
console.log(greeter.greeting);

// Inheritance

class Animal {
  name: string;
  protected age: number = 0;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name); // just like java
  }
  move(distanceInMeters = 5) {
    console.log("Slithering..." + this.age);
    super.move(distanceInMeters);
  }

  slither() {}
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }

  whinny() {}
}

let sam = new Snake("Sammy the Python");
sam.slither();
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

sam.age;

// Access modifiers
// (everything is public by default btw)

class PrivateAnimal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

new PrivateAnimal("Cat").name; // Error: 'name' is private;

// Getter / Setter support

class Employee {
  private _fullName: string = "";

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    // imagine some validations here
    this._fullName = newName;
  }
}

let employee = new Employee();
// these will use the get / set methods
employee.fullName = "Bob Smith";
console.log(employee.fullName);

// Statics

class Grid {
  static origin = { x: 0, y: 0 };
  // bla
}

console.log(Grid.origin);

// Constructor / property shorthand for less typing:

class Shorthand {
  constructor(name: string, age: number) {}
}

const shorthand = new Shorthand("name", 1);

class Wierd implements Animal, Shorthand {}
