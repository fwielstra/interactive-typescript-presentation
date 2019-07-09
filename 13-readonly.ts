// Readonly properties

interface Point {
  readonly x: number;
  readonly y: number;
  readonly z: number[];
}

let p1: Point = { x: 10, y: 20, z: [1, 2, 3] };

// we cannot reassign readonly properties
p1.z = [1, 2, 3];

// However, common pitfall in most languages; we CAN still mutate the array itself.
p1.z.push(4);

// TS includes a number of types that add more restrictions to prevent these things though:

let ro: ReadonlyArray<number> = [1, 2, 3];
ro[0] = 12; // error!

// Readonly index signatures / dynamic properties
// (cannot add properties after initializing):
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
const myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[0] = "Mallory"; // error!

// Readonly class properties
class ReadonlyClass {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  setName(name: string) {
    this.name = name; // nope
  }
}

const bla = new ReadonlyClass("henk", 30);
bla.name = "piet"; // narp

// Shorthand
class ReadonlyClass2 {
  constructor(readonly name: string, readonly age: number) {}
}

// Note: readonly can only be used in class properties or constructor method, NOT in regular functions / methods.
