// I heard you like Java

function identity<T>(arg: T): T {
  return arg;
}

// result will be 'string'
identity<string>("myString");

// equivalent, can use generic type inference:
identity("myString");

// usage in classes:

class GenericNumber<T> {
  zeroValue?: T;
  add?: (x: T, y: T) => T;
}

// Generic Constraints;
// limit the types your generics can be

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity(1337); // bork
loggingIdentity({length: 10, value: 3}); // bjørk
