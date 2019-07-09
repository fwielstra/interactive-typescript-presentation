enum Direction {
  Up,
  Down,
  Left,
  Right
}

let dirValue: Direction = Direction.Right;
dirValue = "blaat"; // invalid
dirValue = "Up"; // Also invalid; enums are not strings by default.

// Note that enum naming information is lost at compile-time.

// Enums are backed by simple auto incrementing ordinal values (0, 1, 2, etc)
// The following is valid but not recommended:

dirValue = 1;

dirValue === Direction.Up;

// Enums can be initialized with own values, the value after the first will be auto incremented:

const enum CustomDirection {
  Up = 1,
  Down,
  Left = 2 * 2,
  Right
}

console.log("Up = " + CustomDirection.Up);
console.log("Down = " + CustomDirection.Down);
console.log("Left = " + CustomDirection.Left);
console.log("Right = " + CustomDirection.Right);

// Can be initialized with dynamic values:

const getSomeValue = () => Math.random();
enum DynamicEnum {
  A = getSomeValue(),
  B = 2
}

// Can be initialized with backing string values.
// Note that a string value is automagic in e.g. java, but not here
// so it's a bit more boilerplatey. For now.
enum StringedDirection {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

const blaaaaat = StringedDirection.Up;

switch (blaaaaat) {
  case StringedDirection.Up:
    "blu";
}

// const enums are optimized out completely during compilation, replaced with their values.
const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right
];

// after compiling:

var compiled = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
